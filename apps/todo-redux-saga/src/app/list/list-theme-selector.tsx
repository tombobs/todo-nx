import styles from './list-theme-selector.module.scss';
import {IListTheme, listThemes} from '@todo-nx/interfaces';
import {useDispatch, useSelector} from 'react-redux';
import {activeListSelector, selectListTheme} from '../todo/todo-store';
import {Delete} from '@mui/icons-material';
import { MouseEvent } from 'react';

export function ListThemeSelector() {

  const activeList = useSelector(activeListSelector);
  const dispatch = useDispatch();

  function removeTheme(e: MouseEvent): void {
    e.stopPropagation();
    dispatch(selectListTheme(undefined))
  }

  return (
    <div className={styles.container}>
      {listThemes.map((t: IListTheme, index: number) =>
        <div className={`${styles.color} ${activeList?.theme === t.id ? styles.active : ''}`}
             key={index} style={{background: t.color}}
             onClick={() => dispatch(selectListTheme(t))}>
          {activeList?.theme === t.id && <Delete onClick={e => removeTheme(e)} />}
        </div>
      )}
    </div>
  );
}
