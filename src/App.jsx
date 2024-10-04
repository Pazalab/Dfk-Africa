import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const location = useLocation();

  useEffect(() => {
         window.scrollTo(0, 0);
  }, [location])
  
  return (
    <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/dfk-africa'  element={<About />} />
    </Routes>
  )
}

export default App
