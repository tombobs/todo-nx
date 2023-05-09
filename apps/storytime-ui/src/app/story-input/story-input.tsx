import {ButtonGroup, TextField} from '@mui/material';
import Button from '@mui/material/Button';
import './story-input.scss';
import React, {useState} from 'react';
import {Gender} from '../enums/gender.enum';
import {IStoryInput} from '../interfaces/story-input.interface';

export interface StoryInputProps {
  onChange: (value: IStoryInput) => void;
  loading: boolean;
}

export function StoryInput(props: StoryInputProps) {
  const [gender, setGender] = useState<string>('');
  const [name, setName] = useState<string>('');

  function onGenderChange(newGender: string): void {
    setGender(newGender);
    emit({newGender});
  }

  function onNameChange(newName: string): void {
    setName(newName);
    emit({newName});
  }

  function emit({newGender, newName}: { newGender?: string, newName?: string }): void {
    props.onChange({gender: newGender || gender, name: newName || name});
  }

  return (
    <div className='story-input-container'>
      <ButtonGroup variant="contained" disabled={props.loading}>
        <Button variant={gender === Gender.Boy ? 'contained' : 'outlined'} color='boyColor'
                onClick={() => onGenderChange(Gender.Boy)}>Boy</Button>
        <Button variant={gender === Gender.Girl ? 'contained' : 'outlined'} color='girlColor'
                onClick={() => onGenderChange(Gender.Girl)}>Girl</Button>
      </ButtonGroup>

      <TextField label="Named" variant="outlined" disabled={props.loading}
                 onChange={(e) => onNameChange(e.target.value)}/>
    </div>
  );
}
