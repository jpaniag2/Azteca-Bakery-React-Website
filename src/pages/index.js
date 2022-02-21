import React, {useState} from 'react';
import Contents from '../Components/Contents';
import NavBar from '../Components/NavBar';
// import Hero from '../Components/Hero';
// import About from '../Components/About';
// import Footer from '../Components/Footer';

// import { homeObjOne, homeObjTwo } from '../Components/About/Data';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return <>
    <NavBar toggle={toggle}/>
    <Contents />
    {/* <Hero />
    <About  {...homeObjOne}/>
    <About  {...homeObjTwo}/>
    <Footer /> */}

  </>;
};

export default Home;
