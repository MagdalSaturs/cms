import './Slider.scss';
import Context from '../../context/App.context';
import { useContext } from 'react';

const Slider = () => {
    const context = useContext(Context);
    const {sliderState, sliderText, sliderImage} = context;

    return (
        <>
            {sliderState && <div className='slider-container'>
                <p>{sliderText ? sliderText : 'Slider'}</p>
                <img src={sliderImage ? sliderImage : 'https://zooart.com.pl/blog/wp-content/uploads/2020/11/sfinks-kot-4-min.jpg'} height='50%' alt='wrong link'></img>
            </div>}
        </>
    )
};

export default Slider;