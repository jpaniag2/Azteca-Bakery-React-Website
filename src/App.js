import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/index';
import CakesPage from './pages/menu'
import ScrollToTop from './Components/ScrollToTop';
import NavBar from './Components/NavBar';
import Locations from './pages/locations';
import Footer from './Components/Footer';

 
function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    
    <Router>

    <NavBar />

    <ScrollToTop />
      <Routes >
        <Route exact path='/' element={<Home />} />
        <Route exact path='/menu' element={<CakesPage />} />
        <Route exact path='/locations' element={<Locations />} />
        {/* <Route exact path="/bakery" element={<BakeryInfo />} /> */}
      </Routes>

      <Footer />

    </Router>  


 
  );
}

export default App;
