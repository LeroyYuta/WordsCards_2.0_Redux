import React, { useEffect, lazy } from 'react';
import { HomePage, TablePage, CardsPage, GamePage, Header, Footer } from './Pages/index';
import { axiosGetWords } from './Api/getServices';
import { useSelector } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ErrorPage404 = lazy(() => import('./Pages/ErrorPage/ErrorPage'));

const App = () => {
  const { items, isLoading } = useSelector(state => state);

  useEffect(() => {
    store.dispatch(axiosGetWords());
  }, []);

  if (isLoading) {
    return (
      <div className='loader-block'>
        <h1 className='loader'></h1>
      </div>
    )
  }

  return (
    <div className="cards-app">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/table' element={<TablePage words={items} />} />
          <Route path='/cards' element={<CardsPage words={items} />} />
          <Route path='/game' element={<GamePage  words={items} />} />
          <Route path='*' element={<ErrorPage404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
