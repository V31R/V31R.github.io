import React from 'react';
import '../css/App.css';
import { Routes, Route } from "react-router-dom";
import AuthContext from '../authContext'
import Home from "./home";
import Login from './login';
import Profile from './profile';
import Footer from './footer';

import Regression from './regression';
import Distribution from './distribution';
import DataPreprocessing from './dataPreprocessing';
import Clusterization from './clusterization';
import Correlation from './correlation';


function App() {

  const [authenticated, setAuthenticated] = React.useState<boolean>(false);

  return (
      <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
        
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/regression" element={ <Regression />} />
          <Route path="/distribution" element={ <Distribution /> } />
          <Route path="/data-preprocessing" element={ <DataPreprocessing />} />
          <Route path="/clusterization" element={ <Clusterization/>} />
          <Route path="/correlation" element={ <Correlation /> }/>
        </Routes>
        <Footer />
      </AuthContext.Provider>
    )
}

export default App;
