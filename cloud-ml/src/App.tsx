import React from 'react';
import './css/App.css';
import { Routes, Route } from "react-router-dom";
import AuthContext from './authContext'
import Home from "./home";
import Login from './login';
import Profile from './profile';
import Footer from './Footer';

function App() {

  const [authenticated, setAuthenticated] = React.useState<boolean>(false);

  return (
      <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
        
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
        <Footer />
      </AuthContext.Provider>
    )
}

export default App;
