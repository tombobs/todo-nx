import { Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Register } from './register/register';
import { Layout } from './layout/layout';
import { Verify } from './verify/verify';
import { RequestPasswordReset } from './reset-password/request-reset/request-password-reset';
import { ResetPassword } from './reset-password/reset-password';
import { routeNames } from './shared/route-names';
import { ProfileHome } from './profile/profile-home';
import { Profile } from './profile/profile';
import { profileRoutes } from './profile/profile.routes';
import { ResetRequested } from "./reset-password/request-reset/reset-requested";

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Login/>}/>
        <Route path={routeNames.register} element={<Register/>}/>
        <Route path={routeNames.verify} element={<Verify/>}/>
        <Route path={routeNames.requestPasswordReset} element={<RequestPasswordReset />}/>
        <Route path={routeNames.resetRequested} element={<ResetRequested />}/>
        <Route path={routeNames.resetPassword} element={<ResetPassword />}/>
        <Route path={routeNames.profile} element={<ProfileHome />} >
          {profileRoutes.map(r =>
            <Route key={r.path} path={r.path} element={<r.component />}/>
          )}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
