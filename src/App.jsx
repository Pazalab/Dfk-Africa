import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import Resources from './pages/Resources';
import MemberFirms from './pages/MemberFirms';

function App() {
  const location = useLocation();

  useEffect(() => {
         window.scrollTo(0, 0);
  }, [location])
  
  return (
    <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/dfk-africa/'  element={<About />} />
             <Route path='/get-in-touch/' element={<Contact />} />
             <Route path='/our-solutions'  element={<Solutions />} />
             <Route path='/resources/' element={<Resources />} />
             <Route path="/member-firms/" element={<MemberFirms />} />
    </Routes>
  )
}

export default App
