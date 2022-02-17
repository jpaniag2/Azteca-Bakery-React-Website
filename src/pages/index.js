import React, {useState} from 'react';
import Contents from '../Components/Contents';
import NavBar from '../Components/NavBar';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return <>
    <NavBar toggle={toggle}/>
    <Contents />

  </>;
};

export default Home;
