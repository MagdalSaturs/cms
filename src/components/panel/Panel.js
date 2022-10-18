import './Panel.scss';
import Context from '../../context/App.context';
import { useContext } from 'react';

const Panel = () => {
    const context = useContext(Context);
    const {sliderState,
            setSliderState,
            sliderText,
            setSliderText,
            sliderImage,
            setSliderImage,
            articlesState,
            setArticlesState,
            articlesMainImage,
            setArticlesMainImage,
            footerState,
            setFooterState,
            footerPhone,
            setFooterPhone,
            footerMadeBy,
            setFooterMadeBy} = context;
    
    const setSliderStateHandler = () => {
        setSliderState(!sliderState);
    };

    const setFooterStateHandler = () => {
        setFooterState(!footerState);
    };

    const setArticlesStateHandler = () => {
        setArticlesState(!articlesState);
    };

    const setSliderTextHandler = (e) => {
        const text = e.target.value;

        setSliderText(text);
    };

    const setSliderImageHandler = (e) => {
        const image = e.target.value;

        setSliderImage(image);
    };

    const setArticlesMainImageHandler = (e) => {
        const image = e.target.value;

        console.log(image)

        setArticlesMainImage(image);
    };

    const setFooterPhoneHandler = (e) => {
        const phone = e.target.value;

        setFooterPhone(phone);
    };

    const setFooterMadeByHandler = (e) => {
        const madeBy = e.target.value;

        setFooterMadeBy(madeBy);
    };

    return (
        <div className='panel-conatiner'>
            <h2>Control Panel</h2>
            <ul>
                <li>
                    <p>Slider</p>
                    <input type='checkbox' 
                            defaultChecked={sliderState}
                            onClick={setSliderStateHandler}
                            onChange={setSliderStateHandler}/>
                </li>
                <li>
                    <p>Slider text</p>
                    <input type='text'
                            defaultValue={sliderText}
                            onChange={(e) => setSliderTextHandler(e)}
                            placeholder='Type text...'/>
                </li>
                <li>
                    <p>Slider image</p>
                    <input type='link'
                                defaultValue={sliderImage}
                                onChange={(e) => setSliderImageHandler(e)}
                                placeholder='Type link to the photo...'/>
                </li>
                <li>
                    <p>Articles</p>
                    <input type='checkbox' 
                            defaultChecked={articlesState}
                            onClick={setArticlesStateHandler}
                            onChange={setArticlesStateHandler}/>
                </li>
                <li>
                    <p>Main article</p>
                    <input type='link' 
                                defaultValue={articlesMainImage}
                                onChange={(e) => setArticlesMainImageHandler(e)}
                                placeholder='Typy link to the main article...'/>
                </li>
                <li>
                    <p>Footer</p>
                    <input type='checkbox' 
                            defaultChecked={footerState}
                            onClick={setFooterStateHandler}
                            onChange={setFooterStateHandler}/>
                </li>
                <li>
                    <p>Phone number</p>
                    <input type='phone'
                                defaultValue={footerPhone}
                                onChange={(e) => setFooterPhoneHandler(e)}
                                placeholder='Type phone number...'/>
                </li>
                <li>
                    <p>Made by</p>
                    <input type='text' 
                                defaultValue={footerMadeBy}
                                onChange={(e) => setFooterMadeByHandler(e)}
                                placeholder='Made by...'/>
                </li>
            </ul>
        </div>
    )
}
export default Panel;