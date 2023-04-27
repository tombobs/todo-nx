import { Routes, Route } from "react-router-dom";
import {Login} from './login/login';
import {Register} from './register/register';
import {Layout} from './layout/layout';

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Login />} />
        <Route path='/register' element={<Register />}/>
      </Route>

    </Routes>
  );
}

export default App;
