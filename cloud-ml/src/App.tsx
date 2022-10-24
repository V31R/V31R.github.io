
import './css/App.css';
import { Routes, Route } from "react-router-dom";

import Home from "./home";
import Login from './login';
import Profile from './profile';
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
