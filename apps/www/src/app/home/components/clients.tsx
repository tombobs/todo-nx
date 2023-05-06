import { Grid, Typography } from '@mui/material';
import styles from '../home.module.scss';

interface IClient {
  name: string;
  imageName: string;
  scale?: number;
  cover?: boolean;
}

const clients: IClient[] = [
  { name: 'BAE Systems', imageName: 'bae-systems.svg', cover: true },
  { name: 'Bank of America', imageName: 'bofa.png', scale: 0.75, cover: true },
  { name: 'The AA', imageName: 'the-aa.svg', scale: 0.85, cover: true },
  { name: 'DST Systems', imageName: 'DST.png', scale: 0.9, cover: true },
  { name: 'Estee Lauder', imageName: 'EL.svg', scale: 0.8 },
  { name: 'Aareon', imageName: 'aareon.jpg', scale: 0.85, cover: true },
];

export function Clients() {
  return (
    <div style={{ background: 'black', marginBottom: 0 }} className={styles.section}>
      <Typography sx={{ color: 'white' }} variant="h4" component="h3">
        You're in good company
      </Typography>
      <Typography
        sx={{ color: 'white', paddingBottom: '10px' }}
        variant="h5"
        component="h4"
      >
        Clients I've consulted for
      </Typography>

      <Grid container spacing={2}>
        {clients.map((client: IClient) => (
          <Grid lg={4} sm={6} xs={12} item>
            <div style={{ padding: '5px', background: 'transparent' }}>
              <img
                src={`/assets/clients/${client.imageName}`}
                style={{
                  height: '190px',
                  width: '100%',
                  objectFit: client.cover ? 'cover' : 'contain',
                  transform: `scale(${client.scale})`,
                }}
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
