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
                <img src={sliderImage ? sliderImage : 'https://tueuropa.pl/uploads/articles_files/2021/11/05/6e7f9516-1948-d9e8-ca22-00007380aca5.jpg'} height='50%' alt='wrong link'></img>
            </div>}
        </>
    )
};

export default Slider;