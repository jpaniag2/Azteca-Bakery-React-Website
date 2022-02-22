import React, {useState} from 'react'
import CakesPageContents from '../Components/CakesPageContents';

const CakesPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }


  return (
      <>
      <CakesPageContents offset="-60" />
      </>
  )
}

export default CakesPage