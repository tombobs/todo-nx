import { Profile } from './profile';
import { ProfileApps } from './my-apps/profile-apps';
import { LoginHistory } from './login-history/login-history';
import { ChangePassword } from './change-password/change-password';
import { Logout } from './logout/logout';

export const profileRoutes: {path: string, component: () => JSX.Element, label: string}[] = [
  { path: '', component: Profile, label: 'Profile' },
  { path: 'apps', component: ProfileApps, label: 'My apps' },
  { path: 'login-history', component: LoginHistory, label: 'Login history' },
  { path: 'change-password', component: ChangePassword, label: 'Change password' },
  { path: 'logout', component: Logout, label: 'Logout' },
];
