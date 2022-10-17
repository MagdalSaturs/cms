import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Website from './views/website';
import Admin from './views/admin';
import './App.scss';
import Context from './context/App.context';

const App = () => {
  const { Provider } = Context;
  const [sliderState, setSliderState] = useState(true);
  const [sliderText, setSliderText] = useState('');

  return (
    <div className='App'>
      <Provider value={{sliderState,
                        setSliderState,
                        sliderText,
                        setSliderText}}> {/* dostępny w każdym komponencie */}
        <BrowserRouter>
          <Routes>
              <Route path='*' element={<Website />} />
              <Route path='/admin' element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
