import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Website from './views/website';
import Admin from './views/admin';
import Main from './views/main';
import History from './views/history';
import List from './components/History/list/List';
import Biology2Views from './views/Biology2/Biology2views';
import BiologyList from './views/BiologyList';
import './App.scss';
import Context from './context/App.context';
import Login from './views/login';
import History2 from './views/history2';

const App = () => {
  const { Provider } = Context;
  const [sliderState, setSliderState] = useState(true);


  return (
    <div className='App'>
      <Provider value={{sliderState,
                        setSliderState}}> {/* dostępny w każdym komponencie */}
        <BrowserRouter>
          <Routes>
              <Route path='/biologia' element={<Website />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/main' element={<Main />} />
              <Route path='/history' element={<History />} />
              <Route path='/history/list' element={<List />} />
              <Route path='/biologia/list' element={<BiologyList />} />
              <Route path='/biologia/biology2' element={<Biology2Views />} />
              <Route path='/' element={<Login />} />
              <Route path='/history2' element={<History2 />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
