import {
  activeListSelector,
  activeTodoSelector,
  completeTodosSelector,
  incompleteTodosSelector,
  listsSelector,
  removeTodo,
  selectList,
  selectTodo,
  updateTodo
} from './todo-store';
import { AddTodo } from './components/add-todo/add-todo';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { TodoList } from './components/todo-list/todo-list';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { ITodo, listThemes } from '@todo-nx/interfaces';
import styles from './todo.module.scss';
import { TodoDetail } from './components/todo-detail/todo-detail';
import { openConfirmationDialog } from '../../../../../libs/react-components/src/confirmation-dialog/confirmation-dialog.store';


export function Todo() {
  const incompleteTodos = useSelector(incompleteTodosSelector);
  const completeTodos = useSelector(completeTodosSelector);
  const lists = useSelector(listsSelector);
  const activeTodo = useSelector(activeTodoSelector);
  const activeList = useSelector(activeListSelector);
  const dispatch = useDispatch();

  const [showCompleted, setShowCompleted] = useState<boolean>(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(selectList({ id, navigate }));
  }, [dispatch, id, lists]);

  function onToggleComplete(todo: ITodo): void {
    dispatch(updateTodo({ ...todo, isComplete: !todo.isComplete }));
  }

  function onToggleStar(todo: ITodo): void {
    dispatch(updateTodo({ ...todo, starred: !todo.starred }));
  }

  function onNotesEdit(todo: ITodo, notes: string): void {
    dispatch(updateTodo({ ...todo, notes }));
  }

  function onSelect(todo?: ITodo): void {
    dispatch(selectTodo(todo));
  }

  function confirmDelete(todo: ITodo): void {
    dispatch(openConfirmationDialog({
      onSubmit: () => dispatch(removeTodo(todo)),
      message: `${todo.title} will be permanently deleted`
    }));
  }

  function getBackground(): string | undefined {
    if (activeList?.theme) {
      return listThemes.find(t => t.id === activeList!.theme)?.color!;
    }
  }

  return (
    <div className={styles.container + ' ' + (activeTodo ? styles.expanded : '')}>

      <div className={styles.list} style={{ background: getBackground() }}>

        <TodoList todos={incompleteTodos} toggleComplete={onToggleComplete} toggleStar={onToggleStar}
                  select={onSelect} activeTodo={activeTodo}/>

        <AddTodo style={{ marginTop: '20px' }}/>

        {completeTodos.length !== 0 &&
        <em onClick={() => setShowCompleted(!showCompleted)} className={styles.toggleShowComplete}>
          {showCompleted ? 'hide' : 'show'} completed items
        </em>}

        {showCompleted && completeTodos.length !== 0 &&
        <TodoList todos={completeTodos} toggleComplete={onToggleComplete} toggleStar={onToggleStar}
                  select={onSelect}
                  opaqueComplete={true} activeTodo={activeTodo}/>}
      </div>

      <TodoDetail activeTodo={activeTodo} toggleComplete={onToggleComplete} toggleStar={onToggleStar}
                  confirmDelete={confirmDelete} onNotesEdit={onNotesEdit} close={() => onSelect()}/>
    </div>
  );
}

