import { Parallax } from 'react-parallax';
import Snow from '../images/Rolls Royce Phantom - 2017.jpg';

const ImageTwo = () => (
    <Parallax className='image'  bgImage={Snow} strength={300}>
 <div className='content'>
    <span className='img-txt'>
    Rolls Royce Phantom
    </span>
</div>
    </Parallax>
);

export default ImageTwo;