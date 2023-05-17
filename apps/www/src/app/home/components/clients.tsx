import { Grid, Typography } from '@mui/material';
import { Section } from '../section';
import {
  BackgroundImage,
  Flexbox,
  GlassContainer,
} from '@todo-nx/react-components';

interface IClient {
  name: string;
  imageName: string;
  scale?: number;
  cover?: boolean;
}

const clients: IClient[] = [
  { name: 'Bank of America', imageName: 'bofa.png', cover: true },
  { name: 'BAE Systems', imageName: 'bae.png', cover: true, scale: 1.1 },
  { name: 'The AA', imageName: 'the-aa.svg', cover: true },
  { name: 'DST Systems', imageName: 'DST.png', cover: true, scale: 0.9 },
  { name: 'Estee Lauder', imageName: 'EL.svg', scale: 0.8 },
  { name: 'Aareon', imageName: 'aareon.jpg', cover: true, scale: 0.8 },
];

export function Clients() {
  return (
    <BackgroundImage src={'wall-bg.png'}>
      <Section>
        <Typography sx={{ color: 'white' }} variant="h4" component="h3">
          You're in good company
        </Typography>
        <Typography
          sx={{ color: 'white', paddingBottom: '10px', mt: 1, mb: 2 }}
          variant="h5"
          component="h4"
        >
          Clients I've consulted for
        </Typography>

        <GlassContainer borderColor="primary.main">
          <Grid container spacing={2} sx={{ px: 8, maxWidth: 800 }}>
            {clients.map((client: IClient) => (
              <Grid lg={4} sm={6} xs={12} item key={client.imageName}>
                <Flexbox sx={{ p: 1 }}>
                  <img
                    src={`/assets/clients/${client.imageName}`}
                    style={{
                      width: '100%',
                      maxWidth: '300px',
                      objectFit: client.cover ? 'cover' : 'contain',
                      transform: `scale(${client.scale})`,
                    }}
                  />
                </Flexbox>
              </Grid>
            ))}
          </Grid>
        </GlassContainer>
      </Section>
    </BackgroundImage>
  );
}
