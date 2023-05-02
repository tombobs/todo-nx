import styles from './todo-list.module.scss';
import { List } from '@mui/material';
import { ITodo } from '@todo-nx/interfaces';
import { TodoListItem } from '../todo-list-item/todo-list-item';

export interface TodoListProps {
  todos: ITodo[];
  toggleComplete: (todo: ITodo) => void;
  toggleStar: (todo: ITodo) => void;
  select: (todo: ITodo) => void;
  opaqueComplete?: boolean;
  activeTodo?: ITodo;
}

export function TodoList({ todos, toggleStar, toggleComplete, select, opaqueComplete, activeTodo }: TodoListProps) {
  return (
    <List className={styles.list}>
      {todos.map((todo: ITodo) =>
        <TodoListItem click={select} key={todo.id} opaqueComplete={opaqueComplete}
                      toggleComplete={toggleComplete} isActive={activeTodo?.id === todo.id}
                      toggleStar={toggleStar} item={todo}/>
      )}
    </List>
  );
}
