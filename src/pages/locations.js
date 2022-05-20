import React, {useState} from 'react'
import LocationContents from '../Components/LocationContents';

const Locations = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }


  return (
      <>
      <LocationContents />
      </>
  )
}

export default Locations