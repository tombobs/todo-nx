import React, {useEffect} from 'react';
import {Routes, useSearchParams} from 'react-router-dom';
import {Route} from 'react-router';
import {Layout} from './layout/layout';
import {Todo} from './todo/todo';
import {Lists} from './list/lists';
import './app.module.scss';
import {useDispatch} from 'react-redux';
import {loadLists} from './todo/todo-store';
import {environment} from '../environments/environment';
import {checkToken} from '../utils';

function App() {

  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    let token = searchParams.get(environment.tokenStorageKey);
    if (token) {
      localStorage.setItem(environment.tokenStorageKey, token);
      setSearchParams({});
    } else {
      token = localStorage.getItem(environment.tokenStorageKey);
    }

    checkToken(token!);
    dispatch(loadLists());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Lists/>}/>
        <Route path=':id' element={<Todo/>}/>
      </Route>
    </Routes>
  );
}

export default App;
