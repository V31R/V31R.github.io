import React from 'react';
import './css/App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from './pages/login';
import Profile from './pages/profile';
import Footer from './components/footer';

import Regression from './pages/regression';
import Distribution from './pages/distribution';
import DataPreprocessing from './pages/dataPreprocessing';
import Clusterization from './pages/clusterization';
import Correlation from './pages/correlation';
import Registration from './pages/registration';


function App() {

  return (
      <>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/registration" element={ <Registration /> }/>
          <Route path="/regression" element={ <Regression />} />
          <Route path="/distribution" element={ <Distribution /> } />
          <Route path="/data-preprocessing" element={ <DataPreprocessing />} />
          <Route path="/clusterization" element={ <Clusterization/>} />
          <Route path="/correlation" element={ <Correlation /> }/>
        </Routes>
        <Footer />
      </>
    )
}

export default App;
