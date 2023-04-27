import styles from './todo-list-item.module.scss';
import {Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import {ITodo} from '@todo-nx/interfaces';
import {ChangeEvent, MouseEvent, useRef} from 'react';

export interface TodoListItemProps {
  item?: ITodo;
  toggleComplete: (todo: ITodo) => void;
  toggleStar: (todo: ITodo) => void;
  click?: (todo: ITodo) => void;
  opaqueComplete?: boolean;
  isActive: boolean;
}

export function TodoListItem({item, toggleComplete, toggleStar, click, opaqueComplete, isActive}: TodoListItemProps) {

  const checkboxRef = useRef<HTMLButtonElement>(null);

  function onToggleComplete(e: ChangeEvent, todo: ITodo): void {
    e.preventDefault();
    toggleComplete(todo);
  }

  function onToggleStar(e: MouseEvent, todo: ITodo): void {
    e.stopPropagation();
    toggleStar(todo);
  }

  function onClick(e: MouseEvent): void {
    if (!checkboxRef.current!.contains(e.target as Node)) {
      click && click(item!);
    }
  }

  return (
    <Paper >
      <ListItem disablePadding key={item?.id}
                onClick={onClick}
                sx={{minWidth: '200px'}}
                className={`${styles.item} ${item?.isComplete ? styles.complete : ''} ${opaqueComplete ? styles.opaqueComplete : ''} ${isActive ? styles.active : ''}`}
                secondaryAction={
                  <IconButton edge='end' onClick={e => onToggleStar(e, item!)}>
                    {item?.starred && <StarIcon/> || <StarOutlineIcon/>}
                  </IconButton>
                }>

        <ListItemButton>
          <ListItemIcon>
            <Checkbox checked={item?.isComplete} onChange={e => onToggleComplete(e, item!)} ref={checkboxRef}/>
          </ListItemIcon>

          <ListItemText primary={item?.title}/>

        </ListItemButton>

      </ListItem>
    </Paper>
  );
}
