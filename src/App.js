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
  const [sliderInsideText, setSliderInsideText] = useState('');
  const [sliderImage, setSliderImage] = useState('');
  const [sliderImage_2, setSliderImage_2] = useState('');
  const [sliderImage_3, setSliderImage_3] = useState('');
  const [articlesState, setArticlesState] = useState(true);
  const [articlesTopic, setArticlesTopic] = useState('');
  const [articlesText, setArticlesText] = useState('');
  const [articlesMainImage, setArticlesMainImage] = useState('');
  const [articlesMainImage_2, setArticlesMainImage_2] = useState('');
  const [articlesMainImage_3, setArticlesMainImage_3] = useState('');
  const [footerState, setFooterState] = useState(true);
  const [footerPhone, setFooterPhone] = useState('');
  const [footerMadeBy, setFooterMadeBy] = useState('');

  return (
    <div className='App'>
      <Provider value={{sliderState,
                        setSliderState,
                        sliderText,
                        setSliderText,
                        sliderInsideText,
                        setSliderInsideText,
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
