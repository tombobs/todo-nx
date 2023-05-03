import React, { useEffect } from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import { Layout } from './layout/layout';
import { Todo } from './todo/todo';
import { Lists } from './list/lists';
import './app.module.scss';
import { useDispatch } from 'react-redux';
import { loadLists } from './todo/todo-store';
import { environment } from '../environments/environment';
import { AuthState, useAuth } from '@todo-nx/react-components';


function App() {
  const dispatch = useDispatch();
  const {authState, redirectToLogin} = useAuth(environment);

  useEffect(() => {
    if (authState === AuthState.Valid) {
      dispatch(loadLists())
    }
    if (authState === AuthState.Invalid) {
      redirectToLogin();
    }
  }, [authState]);

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
