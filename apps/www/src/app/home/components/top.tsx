import { Avatar, Typography } from '@mui/material';
import { environment } from '../../../environments/environment';
import { theme } from '@todo-nx/theme';
import { BackgroundImage, Flexbox } from '@todo-nx/react-components';

export function Top() {
  return (
    <BackgroundImage src={'bg.png'}>
      <Flexbox sx={{pt: 15}}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold' }}>
          Full-stack developer & consultant
        </Typography>
        <Typography sx={{ mt: 1 }} variant="h4" component="h2">
          I build awesome web applications
        </Typography>

        <Avatar
          src={`${environment.assetsUrl}/me.jpg`}
          sx={{
            mb: 30,
            mt: 4,
            height: 150,
            width: 150,
            border: `3px solid ${theme.palette.secondary.main}`,
          }}
        />
      </Flexbox>
    </BackgroundImage>
  );
}
