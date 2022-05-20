import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/index';
import CakesPage from './pages/menu'
import ScrollToTop from './Components/ScrollToTop';
import NavBar from './Components/NavBar';
import Locations from './pages/locations';
import Footer from './Components/Footer';
import NavBar2 from './Components/NavBar2';
import BakeryInfo from './Components/BakeryInfo';
import Cakebar from './Components/CakeBar';
import NavigationBar from './Components/NavigationBar'
import TacoBar from './Components/Tacobar'

 
function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    
    <Router>
    {/* <NavBar toggle={toggle}/>
    <Cakebar isOpen={isOpen} toggle={toggle}/> */}

    {/* <NavigationBar toggle={toggle}/> */}
    <NavBar2 toggle={toggle} />
    <TacoBar isOpen={isOpen} toggle={toggle}/>
    {/* <NavBar2 /> */}
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
