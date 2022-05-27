import React from 'react';
import { Container } from 'react-bootstrap';
import Contents from '../Components/Contents';
import NavBar from '../Components/NavBar';
// import Hero from '../Components/Hero';
// import About from '../Components/About';
// import Footer from '../Components/Footer';

// import { homeObjOne, homeObjTwo } from '../Components/About/Data';


const Home = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => {
    //     setIsOpen(!isOpen)
    // }
  return (

    <Container fluid style={{backgroundColor: '#f5f5f5'}}>
    <Contents />
    </Container>

  )
};

export default Home;
