import React, {useState} from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import About from '../Components/About';
import { homeObjOne, homeObjTwo } from '../Components/About/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return <>
    <NavBar toggle={toggle}/>
      <About  {...homeObjOne}/>
      <About  {...homeObjTwo}/>
      <Footer />
  </>;
};

export default Home;
