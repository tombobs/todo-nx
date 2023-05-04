import { Link, Outlet, useLocation } from 'react-router-dom';
import { AuthState, LoadingWrapper, useAuth } from '@todo-nx/react-components';
import { environment } from '../../environments/environment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProfile, profileSelector, resetError } from './profile.store';
import { DialogPage } from '../shared/dialog-page/dialog-page';
import { LinearProgress, Tab, Tabs } from '@mui/material';
import { profileRoutes } from './profile.routes';
import styles from './profile-home.module.scss';

export function ProfileHome() {

  const { authState, redirectToLogin } = useAuth(environment);
  const dispatch = useDispatch();
  const location = useLocation();
  const [profilePath, setProfilePath] = useState<string>('');
  const {  updating } = useSelector(profileSelector);

  useEffect(() => {
    if (authState === AuthState.Valid) {
      dispatch(loadProfile());
    }
    if (authState === AuthState.Invalid) {
      redirectToLogin();
    }
  }, [authState]);

  useEffect(() => {
    const lastPartOfPath = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
    if (profileRoutes.find(p => p.path === lastPartOfPath)) {
      setProfilePath(lastPartOfPath);
    }
  }, [])

  function onTabChange(_e: any, path: string): void {
    dispatch(resetError());
    setProfilePath(path);
  }

  return (
    <DialogPage width={'612px'}>
      <LoadingWrapper loading={authState !== AuthState.Valid} color='black'>
        <div className={styles.loadingContainer}>
          {updating && <LinearProgress sx={{ height: '100%', width: '100%'}} />}
        </div>

        <Tabs value={profilePath}
          onChange={onTabChange}>
          {profileRoutes.map((r, i) =>
            <Tab label={r.label} value={r.path} key={i} component={Link} to={r.path} />
          )}
        </Tabs>

        <Outlet />
      </LoadingWrapper>
    </DialogPage>
  );
}



