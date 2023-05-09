import { Button, Grid, Typography } from '@mui/material';
import { Section } from '../section';
import { Flexbox, GlassContainer } from "@todo-nx/react-components";
import { Link } from 'react-router-dom';

export function HireMe() {
  return (
    <Section style={{ flexDirection: 'row', backgroundImage: `url(/assets/bg.png)`, backgroundSize: 'cover' }}>
      <GlassContainer>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4.8} sx={{ textAlign: 'center' }}>
          <Flexbox sx={{ alignItems: {md: 'flex-end', sm: 'center'} }}>
            <Typography
              variant="h4"
              sx={{ whiteSpace: 'nowrap', color: 'black' }}
            >
              Hire me for
            </Typography>
          </Flexbox>
        </Grid>

        <Grid item sx={{ ml: 0, display: 'flex', justifyContent: 'center' }} xs={12} md={6}>
          <Flexbox sx={{ ml: {md: 2, sm: 0}, flexDirection: 'row', justifyContent: 'center' }}>
            <Button component={Link} sx={{whiteSpace: 'nowrap', px: {md: 5, xs: 1}, py: {md: 2, xs: 1}}} to="/contact" variant="contained" color='success'>
              <Typography variant="body2">Consulting</Typography>
            </Button>

            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="secondary"
              sx={{ ml: 1.5, whiteSpace: 'nowrap', px: {md: 5, xs: 1}, py: {md: 2, xs: 1} }}
            >
              <Typography variant="body2">Project work</Typography>
            </Button>
          </Flexbox>
        </Grid>
      </Grid>
      </GlassContainer>
    </Section>
  );
}
