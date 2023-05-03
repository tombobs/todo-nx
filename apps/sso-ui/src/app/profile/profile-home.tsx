import { Route, Routes, Outlet, useLocation, Link } from 'react-router-dom';
import { AuthState, useAuth } from '@todo-nx/react-components';
import { environment } from '../../environments/environment';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadProfile } from './profile.store';
import { Profile } from './profile';
import { LoginHistory } from './login-history/login-history';
import { ProfileApps } from './my-apps/profile-apps';
import { DialogPage } from '../shared/dialog-page/dialog-page';
import { Tab, Tabs } from '@mui/material';
import { profileRoutes } from './profile.routes';
import { set } from 'react-hook-form';

export function ProfileHome() {

  const { authState, redirectToLogin } = useAuth(environment);
  const dispatch = useDispatch();
  const location = useLocation();
  const [profilePath, setProfilePath] = useState<string>('');

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


  return (
    <DialogPage width={'auto'}>

      <Tabs value={profilePath}
        onChange={(e, p) => setProfilePath(p)}>
        {profileRoutes.map((r, i) =>
          <Tab label={r.label} value={r.path} key={i} component={Link} to={r.path} />
        )}
      </Tabs>

      <Outlet />

    </DialogPage>
  );
}


