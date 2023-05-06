import styles from '../home.module.scss';
import { Typography } from "@mui/material";
import { Favorite, FavoriteBorder } from '@mui/icons-material';

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
    <div className={styles.section} style={{background: '#B15D46', padding: '5vw 20vw 1vw 20vw', color: 'white'}}>
      <Typography variant='h5' sx={{marginBottom: '10px'}}>
        Hi, I'm Tom. An experienced web-developer available for freelance work.
      </Typography>

      <Typography variant='h5'>
        In my 12+ years as a developer I've worked with a wide variety of companies, agencies and startups.
        I've been lucky enough to collaborate with and learn from some highly talented people while
        creating software products for business and consumer use.
      </Typography>

      <Typography variant='h5' sx={{marginTop: '50px', display: 'flex', alignItems: 'center'}}>
        Technologies I <Favorite sx={{color: 'red', height: '25px', width: '25px', marginLeft: '5px'}} />
      </Typography>

      <div className={styles.box}>
        {techItems.map((t: ITechItem) => (
            <div className={styles.item}>
              <img src={`/assets/tech/${t.image}`} width='100%' />
              {t.name}
            </div>
          )

        )}
      </div>
    </div>
  );
}
