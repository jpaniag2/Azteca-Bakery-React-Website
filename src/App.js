import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/index';
import CakesPage from './pages/cakespage'

 
function App() {


  return (
    
    <Router>
      <Routes >
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cakespage' element={<CakesPage />} />
      </Routes>

    </Router>  


 
  );
}

export default App;
