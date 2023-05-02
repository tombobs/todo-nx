import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { CalendarToday, Delete, ExpandLess, ExpandMore, Palette, Sort, StarBorder, Title } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import {
  activeListSelector,
  removeList,
  sortBy,
  sortBySelector,
  startRenameList,
  TodoSortBy
} from '../../todo/todo-store';
import { ListThemeSelector } from '../theme-selector/list-theme-selector';
import { useNavigate } from 'react-router-dom';
import { openConfirmationDialog } from '@todo-nx/react-components';

export function ListSettings() {
  const [sortByOpen, setSortByOpen] = useState<boolean>(false);
  const [themeOpen, setThemeOpen] = useState<boolean>(false);

  const dispatch = useDispatch();
  const currentSortBy = useSelector(sortBySelector);
  const activeList = useSelector(activeListSelector);
  const navigate = useNavigate();

  const theme = useTheme();

  const sortByOptions = [
    { key: TodoSortBy.name, icon: <Title fontSize='inherit'/>, label: 'Name' },
    { key: TodoSortBy.date, icon: <CalendarToday fontSize='inherit'/>, label: 'Date' },
    { key: TodoSortBy.star, icon: <StarBorder fontSize='inherit'/>, label: 'Starred' }
  ];

  function onRenameClick(): void {
    setSortByOpen(false);
    dispatch(startRenameList());
  }

  function confirmDelete(): void {
    dispatch(openConfirmationDialog({
      onSubmit: () => dispatch(removeList({ list: activeList!, navigate })),
      message: `${activeList!.name} will be permanently deleted`
    }));
  }

  return (
    <List>
      <ListItemButton sx={{ minHeight: 32 }} onClick={onRenameClick}>
        <ListItemIcon sx={{ color: 'inherit' }}>
          <EditIcon/>
        </ListItemIcon>
        <ListItemText
          primary='Rename list'
          primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}/>
      </ListItemButton>

      <ListItemButton onClick={() => setSortByOpen(!sortByOpen)}>
        <ListItemIcon>
          <Sort/>
        </ListItemIcon>
        <ListItemText primary="Sort by" primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}/>
        {sortByOpen ? <ExpandLess/> : <ExpandMore/>}
      </ListItemButton>
      <Collapse in={sortByOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {sortByOptions.map(s =>
            <ListItemButton key={s.key} sx={{
              pl: 4,
              background: s.key === currentSortBy ? (theme.palette.success.main + ' !important') : 'inherit'
            }} onClick={() => dispatch(sortBy(s.key))}>
              <ListItemIcon sx={{ fontSize: '14px' }}>
                {s.icon}
              </ListItemIcon>
              <ListItemText primary={s.label} primaryTypographyProps={{ fontSize: 12, fontWeight: 'lighter' }}/>
            </ListItemButton>
          )}
        </List>
      </Collapse>

      <ListItemButton onClick={() => setThemeOpen(!themeOpen)}>
        <ListItemIcon>
          <Palette/>
        </ListItemIcon>
        <ListItemText primary="Theme" primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}/>
        {themeOpen ? <ExpandLess/> : <ExpandMore/>}
      </ListItemButton>
      <Collapse in={themeOpen} timeout="auto" unmountOnExit>
        <ListThemeSelector/>
      </Collapse>

      <ListItemButton onClick={confirmDelete} color='error'>
        <ListItemIcon color='error'>
          <Delete color='error'/>
        </ListItemIcon>
        <ListItemText primary='Delete list' color='inherit'
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium', color: 'error' }}/>
      </ListItemButton>
    </List>
  );
}
