
import Footer from '../Footer';
import About from '../About';
import { homeObjOne, homeObjTwo } from '../About/Data';

import { Container } from './ContentsStyle';
import Carousel from '../Carousel';

export const Contents = () => {
  return (
        <Container>
            <Carousel />
            <About  {...homeObjOne}/>
            <About  {...homeObjTwo}/>
            <Footer />
        
        </Container>

  )
}

export default Contents