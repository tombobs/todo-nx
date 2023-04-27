import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {addTodo} from '../todo-store';
import {IconButton, Paper, TextField} from '@mui/material';
import styles from './add-todo.module.scss'
import { Add } from '@mui/icons-material';


export function AddTodo(props: any) {
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch()

  function onAdd(): void {
    if (!text) {
      return;
    }
    dispatch(addTodo({title: text}));
    setText('');
  }

  return (
    <div className={styles.addTodo} {...props}>
      <Paper sx={{width: '100%'}}>
        <TextField label='what do you need to do?' variant='outlined' value={text} fullWidth
                 onChange={e => setText(e.target.value)} onKeyPress={e => e.code === 'Enter' && onAdd()}/>
      </Paper>
      <Paper sx={{marginLeft: '10px'}}>
        <IconButton sx={{height: '100%', width: '100%'}} onClick={() => onAdd()} disabled={!text} color='primary'>
          <Add />
        </IconButton>
      </Paper>
    </div>
  );
}
