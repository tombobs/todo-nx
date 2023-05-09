import {Button, Box} from '@mui/material';
import React, { useState } from 'react';
import { StoryInput } from './story-input/story-input';
import { IStoryInput } from './interfaces/story-input.interface';
import { StoryOutput } from './story-output/story-output';
import { Banner, Flexbox, Footer } from '@todo-nx/react-components';
import { environment } from '../environments/environment';

export default function App() {
  const [storyInput, setStoryInput] = useState<IStoryInput>({
    gender: '',
    name: '',
  });
  const [storyText, setStoryText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  async function go(): Promise<void> {
    setLoading(true);
    setStoryText('');
    setError(null);

    try {
      const res: Response = await fetch(
        `${environment.aiApiUrl}/storytime?name=${storyInput.name}&gender=${storyInput.gender}`
      );
      const text = (await res.json()).data;
      setStoryText(text);
    } catch (e) {
      setError(e);
    }

    setLoading(false);
  }

  return (
    <Flexbox>
      <Banner environment={environment} />

      <Flexbox sx={{ backgroundColor: 'primary.main', pb: 5, pt: '75px' }}>
        <Flexbox sx={{ pb: 2, borderRadius: 1, maxWidth: 500, border: '3px solid', borderColor: 'secondary.main' }}>
          <h2>Tell me a story about a...</h2>
          <StoryInput
            onChange={(i: IStoryInput) => setStoryInput(i)}
            loading={loading}
          />
          <Button
            variant="contained"
            color="success"
            disabled={loading || !storyInput.gender || !storyInput.name}
            onClick={go}
          >
            Go
          </Button>
        </Flexbox>
      </Flexbox>

      <Flexbox sx={{ flex: 1, backgroundColor: 'secondary.main', py: 2, minHeight: 'calc(100vh - 70px - 377px)' }}>
        <StoryOutput storyText={storyText} loading={loading} error={error} />
      </Flexbox>

      <Footer environment={environment} />
    </Flexbox>
  );
}
