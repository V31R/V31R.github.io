import React from "react";
import "./css/header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/brain.png';
import {main_page_link, site_name} from './globals';
import { Link } from "react-router-dom";

class Header extends React.Component{
    render(){
        return(
            <header>
                <nav>
                    <div className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                            <a  href={main_page_link()}>
                                    <div className="logo">
                                        <img src={logo} alt="logo"/>
                                    </div>
                                </a>
                                <a className="nav-link" href={main_page_link()}> {site_name()} </a>
                            </div>
                            <div className="navbar-brand">
                                <a className="nav-link" href="/login">Профиль</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;