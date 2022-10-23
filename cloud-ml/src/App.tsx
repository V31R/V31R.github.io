import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./home";
import Login from './login';
import Profile from './profile';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
