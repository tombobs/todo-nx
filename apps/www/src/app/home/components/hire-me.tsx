import { Button, Grid, Typography } from '@mui/material';
import { Section } from '../section';
import { Flexbox } from '@todo-nx/react-components';
import { Link } from 'react-router-dom';

export function HireMe() {
  return (
    <Section style={{ flexDirection: 'row' }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4.8} sx={{ textAlign: 'center' }}>
          <Flexbox sx={{ alignItems: { md: 'flex-end', sm: 'center' } }}>
            <Typography
              variant="h4"
              sx={{ color: 'black', whiteSpace: 'nowrap' }}
            >
              Hire me for
            </Typography>
          </Flexbox>
        </Grid>

        <Grid item sx={{ ml: 4 }} xs={12} md={6}>
          <Flexbox sx={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Button component={Link} to="/contact" variant="contained">
              <Typography variant="body2">Consulting</Typography>
            </Button>

            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="secondary"
              sx={{ ml: 1.5 }}
            >
              <Typography variant="body2">Project work</Typography>
            </Button>
          </Flexbox>
        </Grid>
      </Grid>
    </Section>
  );
}
