import { ITodo } from '@todo-nx/interfaces';
import { TodoListItem } from '../todo-list-item/todo-list-item';
import styles from './todo-detail.module.scss';
import { IconButton, Paper, TextField } from '@mui/material';
import { DateTime } from 'luxon';
import { ChevronRight, Delete } from '@mui/icons-material';

export interface TodoDetailProps {
  activeTodo?: ITodo;
  toggleComplete: (todo: ITodo) => void;
  toggleStar: (todo: ITodo) => void;
  confirmDelete: (todo: ITodo) => void;
  onNotesEdit: (todo: ITodo, notes: string) => void;
  close: () => void;
}

export function TodoDetail({
                             activeTodo,
                             toggleComplete,
                             toggleStar,
                             confirmDelete,
                             onNotesEdit,
                             close
                           }: TodoDetailProps) {
  return (
    <div className={styles.container}>

      <div className={styles.close}>
        <IconButton onClick={close}>
          <ChevronRight/>
        </IconButton>
      </div>

      <Paper>
        <TodoListItem item={activeTodo} toggleComplete={toggleComplete} toggleStar={toggleStar}
                      isActive={false}/>
      </Paper>

      <Paper>
        <TextField multiline={true} rows={3} fullWidth={true} defaultValue={activeTodo?.notes}
                   onBlur={e => onNotesEdit(activeTodo!, e.target.value)}/>
      </Paper>


      <div className={styles.bottom}>
        <div>
          <span className={styles.label}>Created:</span>
          <span
            className={styles.created}>{activeTodo && DateTime.fromISO(activeTodo?.createdAt!).toRelative()}</span>
        </div>

        <IconButton onClick={() => confirmDelete(activeTodo!)}>
          <Delete/>
        </IconButton>
      </div>
    </div>
  );
}
