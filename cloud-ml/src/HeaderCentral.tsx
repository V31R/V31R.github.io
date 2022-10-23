import React from "react";
import "./css/header_central.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/brain.png';
import {main_page_link, site_name} from './globals';

class HeaderCentral extends React.Component{
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
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default HeaderCentral;