import { Parallax } from 'react-parallax';
import Sea from '../images/Rolls-Royce Flaunts New Privacy Suite for Extended Wheelbase Phantom.jpg';

const ImageThree = () => (
    <Parallax className='image'  bgImage={Sea} strength={300}>
 <div className='content'>
    <span className='img-txt'>
    Rolls Royce Ghost  
      </span>
</div>
    </Parallax>
);

export default ImageThree;