import React, {useState} from 'react'
import NavBar from '../Components/NavBar';

const CakesPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }


  return (
      <>
    <NavBar toggle={toggle}/>
    <h1>This is the cake page.</h1>
      </>
  )
}

export default CakesPage