import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import { useEffect } from 'react';
import './Styles/main.css';
import Menu from './Components/Menu/Menu';

function App() {
  function getTheme() {
    const theme: string | null = localStorage.getItem('theme');

    if (theme) {
      document.getElementsByTagName('html')[0].classList.add(`theme-${theme}`);
    } 
  }

  useEffect(() => {
    getTheme();
  }, []);

  return (
    <>
      <Menu />
      <Header />
      <Outlet />
    </>
  )
}

export default App
