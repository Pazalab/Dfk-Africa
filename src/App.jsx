import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import Resources from './pages/Resources';
import MemberFirms from './pages/MemberFirms';
import FirmPage from './pages/FirmPage';

function App() {
  const location = useLocation();

  useEffect(() => {
         window.scrollTo(0, 0);
  }, [location])
  
  return (
    <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/dfk-africa/'  element={<About />} />
             <Route path='/contact-us/' element={<Contact />} />
             <Route path='/our-solutions'  element={<Solutions />} />
             <Route path='/insights/' element={<Resources />} />
             <Route path="/member-firms/" element={<MemberFirms />} />
             <Route path='/dfk-member/:name' element={<FirmPage />} />
    </Routes>
  )
}

export default App
