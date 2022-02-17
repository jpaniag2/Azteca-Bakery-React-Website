
import Footer from '../Footer';
import About from '../About';
import { homeObjOne, homeObjTwo } from '../About/Data';

import { Container } from './ContentsStyle';

export const Contents = () => {
  return (
        <Container>
      <About  {...homeObjOne}/>
      <About  {...homeObjTwo}/>
      <Footer />
        
        </Container>

  )
}

export default Contents