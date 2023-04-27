import {Paper, TextField} from '@mui/material';
import {IList} from '@todo-nx/interfaces';

export interface ListNameEditProps {
  activeList?: IList;
}

export function ListNameEdit({activeList}: ListNameEditProps) {
  return (
    <Paper>
      <TextField defaultValue={activeList?.name} autoFocus={true}/>
    </Paper>
  );
}
