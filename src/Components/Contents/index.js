
import Footer from '../Footer';
import About from '../About';
import Location from '../Location'
import { homeObjOne, homeObjTwo } from '../About/Data';

import { Container } from './ContentsStyle';
import Hero from '../Hero';

export const Contents = () => {
  return (
        <Container>
            <Hero />
            <About  {...homeObjOne}/>
            <About  {...homeObjTwo}/>
            <Location />
            <Footer />
        
        </Container>

  )
}

export default Contents