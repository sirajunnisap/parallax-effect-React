import { Parallax } from 'react-parallax';
import Desert from '../images/Rolls-Royce Dawn Black Badge.jpg';

const ImageOne = () => (
    <Parallax className='image'  bgImage={Desert} strength={300}>
 <div className='content'>
    <span className='img-txt'>
    Srit Of Ecstacy
    </span>
</div>
    </Parallax>
);

export default ImageOne;