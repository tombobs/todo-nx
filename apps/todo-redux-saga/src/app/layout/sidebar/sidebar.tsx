import styles from './sidebar.module.scss';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, useTheme} from '@mui/material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import {useDispatch, useSelector} from 'react-redux';
import {addList, listsSelector} from '../../todo/todo-store';
import {NavLink, useNavigate} from 'react-router-dom';
import {IList} from '@todo-nx/interfaces';

export interface SidebarProps {
  toggleExpand: () => void;
  isExpanded: boolean;
}

export function Sidebar({toggleExpand, isExpanded}: SidebarProps) {
  const lists = useSelector(listsSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <div className={styles.sidebar}>
      <ListItemButton onClick={toggleExpand}>
        <ListItemIcon className={isExpanded ? '' : styles.rotate}>
          <MenuOpenIcon/>
        </ListItemIcon>
      </ListItemButton>

      <List sx={{height: '100%', maxHeight: 'calc(100% - 90px)', overflow: 'hidden auto'}}>
        {lists.map((l: IList) =>
          <ListItem disablePadding key={l.id}>
            <NavLink style={{textDecoration: 'none', width: '100%'}} to={'/' + l.id?.toString()}
                     className={({isActive}) =>
                       isActive ? styles.active : styles.navLink
                     }>
              <ListItemButton>
                <ListItemIcon>
                  <DragHandleIcon/>
                </ListItemIcon>
                <ListItemText primary={l.name}/>
              </ListItemButton>
            </NavLink>
          </ListItem>
        )}
      </List>

      <Paper sx={{
        border: '1px solid black',
        borderRadius: '0',
        width: '100%',
        whiteSpace: 'nowrap',
        '&:hover': {background: theme.palette.primary.main}
      }}>
        <ListItemButton onClick={() => dispatch(addList({navigate}))}>
          <ListItemIcon>
            <LibraryAddIcon/>
          </ListItemIcon>
          <ListItemText primary='Add new list'/>
        </ListItemButton>
      </Paper>
    </div>);
}
