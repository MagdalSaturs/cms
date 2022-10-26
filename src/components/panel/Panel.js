import './Panel.scss';
import Context from '../../context/App.context';
import { useContext } from 'react';

const Panel = () => {
    const context = useContext(Context);
    const {sliderState,
            setSliderState,
            sliderInsideText,
            setSliderInsideText,
            sliderText,
            setSliderText,
            sliderImage,
            setSliderImage,
            sliderImage_2,
            setSliderImage_2,
            sliderImage_3,
            setSliderImage_3,
            articlesState,
            setArticlesState,
            articlesTopic,
            setArticlesTopic,
            articlesText,
            setArticlesText,
            articlesMainImage,
            setArticlesMainImage,
            articlesMainImage_2,
            setArticlesMainImage_2,
            articlesMainImage_3,
            setArticlesMainImage_3,
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

    const setSliderInsideTextHandler = (e) => {
        const text = e.target.value;

        setSliderInsideText(text);
    };

    const setSliderImageHandler = (e) => {
        const image = e.target.value;

        setSliderImage(image);
    };

    const setSliderImage2Handler = (e) => {
        const image = e.target.value;

        setSliderImage_2(image);
    };

    const setSliderImage3Handler = (e) => {
        const image = e.target.value;

        setSliderImage_3(image);
    };

    const setArticlesTopicHandler = (e) => {
        const topic = e.target.value;

        setArticlesTopic(topic);
    };

    const setArticlesTextHandler = (e) => {
        const text = e.target.value;

        setArticlesText(text);
    };

    const setArticlesMainImageHandler = (e) => {
        const image = e.target.value;

        setArticlesMainImage(image);
    };

    const setArticlesMainImage_2Handler = (e) => {
        const image = e.target.value;

        setArticlesMainImage_2(image);
    };

    const setArticlesMainImage_3Handler = (e) => {
        const image = e.target.value;

        setArticlesMainImage_3(image);
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
                    <p>Slider inside text</p>
                    <input type='text'
                            defaultValue={sliderInsideText}
                            onChange={(e) => setSliderInsideTextHandler(e)}
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
                    <p>Slider image 2</p>
                    <input type='link'
                            defaultValue={sliderImage_2}
                            onChange={(e) => setSliderImage2Handler(e)}
                            placeholder='Type link to the photo...'/>
                </li>
                <li>
                    <p>Slider image 3</p>
                    <input type='link'
                            defaultValue={sliderImage_3}
                            onChange={(e) => setSliderImage3Handler(e)}
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
                    <p>Topic</p>
                    <input type='text'
                            defaultValue={articlesTopic}
                            onChange={(e) => setArticlesTopicHandler(e)}
                            placeholder='Type topic...'/>
                </li>
                <li>
                    <p>Text inside</p>
                    <input type='text'
                            defaultValue={articlesText}
                            onChange={(e) => setArticlesTextHandler(e)}
                            placeholder='Type text...'/>
                </li>
                <li>
                    <p>First article</p>
                    <input type='link' 
                            defaultValue={articlesMainImage}
                            onChange={(e) => setArticlesMainImageHandler(e)}
                            placeholder='Typy link to the main article...'/>
                </li>
                <li>
                    <p>Second article</p>
                    <input type='link'
                            defaultValue={articlesMainImage_2}
                            onChange={(e) => setArticlesMainImage_2Handler(e)}
                            placeholder='Type link to the second article...'/>
                </li>
                <li>
                    <p>Third article</p>
                    <input type='link'
                            defaultValue={articlesMainImage_3}
                            onChange={(e) => setArticlesMainImage_3Handler(e)}
                            placeholder='Type link to the third article...'/>
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