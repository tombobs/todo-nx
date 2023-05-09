import styles from "../app.module.scss";
import { CircularProgress, Paper, Typography } from "@mui/material";
import React from "react";
import { Flexbox } from "@todo-nx/react-components";

export interface StoryOutputProps {
  storyText: string;
  loading: boolean;
  error: any;
}

export function StoryOutput({storyText, loading, error}: StoryOutputProps) {
  return (
    <Flexbox>
      {storyText &&
        <Paper sx={{width: 0.9, m: 'auto', p: 1}}>
          <Typography variant='body1' component='p'>{storyText}</Typography>
          <Typography variant='body1' component='p' sx={{mt: 2, textAlign: 'center'}}>The end.</Typography>
        </Paper>}

      {loading &&
        <Paper sx={{width: 0.9, m: 'auto', p: 1}}>
          <Flexbox sx={{p: 2}}>
            <Typography variant='body1'>Writing your story...</Typography>
            <Typography variant='body2' sx={{mb: 2}}>Takes about 10 seconds</Typography>
            <CircularProgress/>
          </Flexbox>
        </Paper>
        }

      {error &&
        <Paper sx={{width: 0.9, m: 'auto', p: 1}}>
          <Flexbox>
            <Typography variant='body1'>Sorry - something went wrong</Typography>
          </Flexbox>
        </Paper>
        }
    </Flexbox>
  );
}
