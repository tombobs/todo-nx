import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/layout';
import { Home } from './home/home';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
