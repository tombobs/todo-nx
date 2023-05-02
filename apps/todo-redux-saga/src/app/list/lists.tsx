import { useDispatch, useSelector } from 'react-redux';
import { clearActiveList, listsSelector, removeList } from '../todo/todo-store';
import styles from './lists.module.scss';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IList } from '@todo-nx/interfaces';
import { MouseEvent, useEffect } from 'react';
import { openConfirmationDialog } from '@todo-nx/react-components';

export function Lists() {
  const lists = useSelector(listsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearActiveList());
  }, []);

  function onDelete(e: MouseEvent, list: IList): void {
    e.preventDefault();
    if (!list.todos.length) {
      dispatch(removeList({ list }));
      return;
    }
    // confirm deletion if list has todos
    dispatch(openConfirmationDialog({
      onSubmit: () => dispatch(removeList({ list })),
      message: `${list.name} will be permanently deleted`
    }));
  }

  return (
    <div className={styles.container}>
      {lists.map(l =>
        <Link className={styles.link} key={l.id} to={'/' + l.id}>
          <div className={styles.left}>
            <strong>{l.name}</strong>
            <em>{l.todos?.length} items</em>
          </div>

          <div className={styles.right}>
            <DeleteForeverIcon className={styles.deleteIcon} onClick={e => onDelete(e, l)}/>
          </div>
        </Link>
      )}
    </div>
  );
}
