import styles from '../home.module.scss';
import { Box, Grid, Typography } from '@mui/material';
import { Favorite, FavoriteBorder, FavoriteOutlined } from "@mui/icons-material";
import { Section } from '../section';
import { Flexbox } from '@todo-nx/react-components';

interface ITechItem {
  image: string;
  name: string;
}

const techItems: ITechItem[] = [
  { name: 'angular', image: 'angular.svg' },
  { name: 'react', image: 'react.svg' },
  { name: 'html', image: 'html.svg' },
  { name: 'css', image: 'css.svg' },
  { name: 'redux', image: 'redux.svg' },
  { name: 'ngrx', image: 'ngrx.svg' },
  { name: 'material', image: 'material.svg' },
  { name: 'nodejs', image: 'nodejs.svg' },
  { name: 'aws', image: 'aws.svg' },
  { name: 'mariadb', image: 'mariadb.svg' },
  { name: 'typescript', image: 'typescript.svg' },
  { name: 'nestjs', image: 'nestjs.svg' },
  { name: 'linode', image: 'linode.svg' },
  { name: 'mongodb', image: 'mongodb.svg' },
];

export function About() {
  return (
    <Section style={{ backgroundColor: 'secondary.main', color: 'white' }}>
      <Typography variant="body1" sx={{ mb: 2, fontWeight: 'bold' }}>
        Hi, I'm Tom. An experienced web-developer available for freelance work.
      </Typography>

      <Typography variant="body1" sx={{maxWidth: '1200px'}}>
        In my 12+ years as a developer I've worked with a wide variety of
        companies, agencies and startups. I've been lucky enough to collaborate
        with and learn from some highly talented people while creating software
        products for business and consumer use.
      </Typography>

      <Typography
        variant="h4"
        sx={{ mt: 4, display: 'flex', alignItems: 'center', fontWeight: 'bold' }}
      >
        Technologies I
        <FavoriteBorder
          sx={{
            height: 35,
            width: 35,
            ml: 1
          }}
        />
      </Typography>

      <Box
        sx={{
          p: 4,
          mt: 1,
          maxWidth: 1200,
          backgroundColor: '#ffffff61',
          borderRadius: '5px'
        }}
      >
        <Grid container spacing={2}>
          {techItems.map((t: ITechItem) => (
            <Grid item xs={4} md={3} lg={1.5} key={t.name}>
              <Flexbox >
                <img
                  src={`/assets/tech/${t.image}`}
                  style={{ width: '50%', height: '50%' }}
                />
                <div style={{textTransform: 'uppercase', fontSize: '0.8em'}}>
                  {t.name}
                </div>
              </Flexbox>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Section>
  );
}
