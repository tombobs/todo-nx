import React, {useEffect} from 'react';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router';
import {Layout} from './layout/layout';
import {Todo} from './todo/components/todo';
import {Lists} from './list/lists';
import './app.module.scss';
import {useDispatch} from 'react-redux';
import { loadLists } from './todo/todo-store';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLists());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Lists/>}/>
        <Route path=':id' element={<Todo/>} />
      </Route>
    </Routes>
  );
}

export default App;
