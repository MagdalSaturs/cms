import './Slider.scss';
import Context from '../../context/App.context';
import { useContext } from 'react';

const Slider = () => {
    const context = useContext(Context);
    const {sliderState, sliderText} = context;

    return (
        <>
            {sliderState && <div className='slider-container'>
                <p>{sliderText ? sliderText : 'Slider'}</p>
            </div>}
        </>
    )
};

export default Slider;