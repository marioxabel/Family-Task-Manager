import { useState } from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import './App.css';  

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
