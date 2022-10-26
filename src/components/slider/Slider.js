import './Slider.scss';
import Context from '../../context/App.context';
import { useContext } from 'react';

const Slider = () => {
    const context = useContext(Context);
    const {sliderState, sliderText, sliderImage, sliderInsideText, sliderImage_2, sliderImage_3} = context;

    return (
        <>
            {sliderState && <div className='slider-container'>
                <h3>{sliderText ? sliderText : 'Cats'}</h3>
                <img src={sliderImage ? sliderImage : 'https://zooart.com.pl/blog/wp-content/uploads/2020/11/sfinks-kot-4-min.jpg'} height='200px' width='350px' alt='wrong link'></img>
                <img src={sliderImage_2 ? sliderImage_2 : 'https://zwierzaki.pl/wp-content/uploads/2021/02/koty-domowe-840x400.jpg'} height='200px' width='350px' alt='wrong link' />
                <img src={sliderImage_3 ? sliderImage_3 : 'https://img.wprost.pl/img/kot-zdj-ilustracyjne/d1/63/8f02374ec00427e1dd4d547e56e3.jpeg'} height='200px' width='350px' alt='wrong link' />
                <p>{sliderInsideText ? sliderInsideText : 'This website is about cats.'}</p>
            </div>}
        </>
    )
};

export default Slider;