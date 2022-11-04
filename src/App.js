import './App.scss';
import React, { useEffect, lazy } from 'react';
import { HomePage, TablePage, CardsPage, GamePage, Header, Footer } from './Pages/index';
import { axiosGetWords } from './Api/getServices';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ErrorPage404 = lazy(() => import('./Pages/ErrorPage/ErrorPage'));

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state);
  const dataWords = data.items;
  const isLoading = data.isLoading;
  console.log(dataWords, data.isLoading);

  useEffect(() => {
    dispatch(axiosGetWords());
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
          <Route path='/table' element={<TablePage words={dataWords} />} />
          <Route path='/cards' element={<CardsPage words={dataWords} />} />
          <Route path='/game' element={<GamePage />} />
          <Route path='*' element={<ErrorPage404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
