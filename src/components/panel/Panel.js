import './Panel.scss';
import Context from '../../context/App.context';
import { useContext } from 'react';

const Panel = () => {
    const context = useContext(Context);
    const {sliderState,
            setSliderState,
            sliderText,
            setSliderText} = context;
    
    const setSliderStateHandler = () => {
        setSliderState(!sliderState);
    };

    const setSliderTextHandler = (e) => {
        const text = e.target.value;

        setSliderText(text);
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
            </ul>
        </div>
    )
}
export default Panel;