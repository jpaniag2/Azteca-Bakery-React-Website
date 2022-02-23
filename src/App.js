import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/index';
import CakesPage from './pages/cakespage'
import ScrollToTop from './Components/ScrollToTop';
import NavBar from './Components/NavBar';
import Locations from './Components/Location';
import Footer from './Components/Footer';

 
function App() {


  return (
    
    <Router>
    <NavBar />
    <ScrollToTop />
      <Routes >
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cakespage' element={<CakesPage />} />
        <Route exact path='/locations' element={<Locations />} />
      </Routes>

      <Footer />

    </Router>  


 
  );
}

export default App;
