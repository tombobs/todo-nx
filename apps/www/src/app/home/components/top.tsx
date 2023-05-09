import { Avatar, Box, Typography } from "@mui/material";
import { environment } from "../../../environments/environment";
import { theme } from "@todo-nx/theme";
import { Flexbox } from "@todo-nx/react-components";

export function Top() {

  return (
    <Flexbox sx={{
      backgroundImage: `url('/assets/bg.png')`,
      backgroundAttachment: 'initial !important',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      pt: 15
    }}>
      <Typography variant="h3" component="h1" sx={{fontWeight: 'bold'}}>
        Full-stack developer & consultant
      </Typography>
      <Typography sx={{ mt: 1 }} variant="h4" component="h2">
        I build awesome web applications
      </Typography>

      <Avatar
        src={`${environment.assetsUrl}/me.jpg`}
        sx={{ mb: 30, mt: 4, height: 150, width: 150, border: `3px solid ${theme.palette.secondary.main}`}}
      />
    </Flexbox>
  );
}
