import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/layout';
import { Home } from './home/home';
import { Contact } from "./contact/contact";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
