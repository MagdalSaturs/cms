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
  const [sliderImage, setSliderImage] = useState('');
  const [articlesState, setArticlesState] = useState(true);
  const [articlesMainImage, setArticlesMainImage] = useState('');
  const [footerState, setFooterState] = useState(true);
  const [footerPhone, setFooterPhone] = useState('');
  const [footerMadeBy, setFooterMadeBy] = useState('');

  return (
    <div className='App'>
      <Provider value={{sliderState,
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
                        setFooterMadeBy}}> {/* dostępny w każdym komponencie */}
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
