import React from "react";
import "../css/header_central.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/brain.png';
import {main_page_link, site_name} from '../globals';
import { Link } from "react-router-dom";

function HeaderCentral(){
    return (
        <header>
            <nav>
                <div className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link to={main_page_link()}>
                                <div className="logo">
                                    <img src={logo} width = {150} alt="logo" />
                                </div>
                            </Link>
                            <Link className="nav-link" to={main_page_link()}> {site_name()} </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}


export default HeaderCentral;