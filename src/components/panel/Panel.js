import '../panel/Panel.scss';
import Context from '../../context/App.context';
import { useContext } from 'react';

const Panel = () => {
    const context = useContext(Context);
    const {sliderState,
            setSliderState} = context;
    
    const setSliderStateHandler = () => {
        setSliderState(!sliderState);
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
            </ul>
        </div>
    )
}
export default Panel;