import React from "react";
import "../css/header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/brain.png';
import { main_page_link, site_name} from '../globals';
import { Link } from "react-router-dom";
import authContext from "../authContext";

function Header (){
    const isLogin = React.useContext(authContext);
    // eslint-disable-next-line
    
    console.log(isLogin)
    let link: string = '/login';
    if (isLogin!.authenticated) {
        link = '/profile';
    }
    console.log(link);
    return (
        <header>
            <nav>
                <div className="navbar">
                    <div className="container">
                        <div className="navbar-brand left ms-0">
                            <Link to={main_page_link()}>
                                <div className="logo">
                                    <img src={logo} width = {120} alt="logo" />
                                </div>
                            </Link>
                            <Link className="nav-link" to={main_page_link()}> {site_name()} </Link>
                        </div>
                        <div className="navbar-brand right me-0">
                            <Link className="nav-link" to={link}> Профиль </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}


export default Header;