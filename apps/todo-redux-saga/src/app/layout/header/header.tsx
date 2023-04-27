import styles from './header.module.scss';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import {useDispatch, useSelector} from 'react-redux';
import {activeListSelector, renameList, editListNameSelector, errorSelector, loadingSelector} from '../../todo/todo-store';
import SyncIcon from '@mui/icons-material/Sync';
import ReportIcon from '@mui/icons-material/Report';
import {Link} from 'react-router-dom';
import {IconButton, Paper, Popover, TextField} from '@mui/material';
import {useState} from 'react';
import {ListSettings} from '../../list/list-settings';
import {ChevronRight} from '@mui/icons-material';
import {usePrevious} from '../../../utils';

export function Header() {
  const activeList = useSelector(activeListSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const editingActiveListName = useSelector(editListNameSelector);
  const previousLoading = usePrevious(loading);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  if (!!anchorEl && (!activeList || editingActiveListName)) {
    setAnchorEl(null);
  }
  
  if (previousLoading && !loading) {
    // show save OK icon
  }
  console.log(previousLoading)

  return (
    <div className={styles.header}>
      <Link to='/'>
        <HomeIcon fontSize={'inherit'}/>
      </Link>

      <div className={styles.title}>

        {editingActiveListName &&
        <Paper>
            <TextField defaultValue={activeList?.name} onBlur={e => dispatch(renameList({name: e.target.value, id: activeList!.id}))}
                       inputRef={input => input && setTimeout(() => input.focus())}/>
        </Paper>
          || activeList?.name
        }

        {activeList && <>
            <IconButton onClick={e => setAnchorEl(e.currentTarget)}
                        size="large"
                        sx={{
                          paddingLeft: '25px',
                          '& svg': {
                            color: 'rgba(255,255,255,0.8)',
                            transition: '0.2s',
                            transform: 'translateX(0) rotate(0)',
                          },
                          '&:hover': {
                            bgcolor: 'unset',
                            '& svg:first-of-type': {
                              transform: 'translateX(-4px) rotate(-20deg)',
                            },
                            '& svg:last-of-type': {
                              right: 0,
                              opacity: 1,
                            },
                          }
                        }}>
                <SettingsIcon/>
                <ChevronRight sx={{position: 'absolute', right: 4, opacity: 0}}/>
            </IconButton>

            <Popover
                open={!!anchorEl}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}>
                <ListSettings/>
            </Popover>
        </>
        }
      </div>

      <div className={styles.right}>
        {loading && <SyncIcon fontSize={'inherit'} sx={{
          animation: "spin 2s linear infinite",
          "@keyframes spin": {
            "100%": {
              transform: "rotate(0deg)",
            },
            "0%": {
              transform: "rotate(360deg)",
            },
          },
        }}/>}

        <div className={`${styles.saveIcon} ${previousLoading ? styles.saveOk : ''}`}>lol</div>

        {error && <ReportIcon/>}


      </div>
    </div>
  );
}
