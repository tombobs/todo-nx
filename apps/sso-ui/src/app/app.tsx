import { Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Register } from './register/register';
import { Layout } from './layout/layout';
import { Verify } from './verify/verify';
import { RequestPasswordReset } from './reset-password/request-password-reset';
import { ResetPassword } from './reset-password/reset-password';
import { routeNames } from './shared/route-names';

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Login/>}/>
        <Route path={routeNames.register} element={<Register/>}/>
        <Route path={routeNames.verify} element={<Verify/>}/>
        <Route path={routeNames.requestPasswordReset} element={<RequestPasswordReset />}/>
        <Route path={routeNames.resetPassword} element={<ResetPassword />}/>
      </Route>
    </Routes>
  );
}

export default App;
