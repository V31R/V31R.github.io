import React from "react";
import '../css/button_default.css';
import '../css/unlogin.css';
import { useNavigate, NavigateFunction } from "react-router-dom";
import authContext from "../authContext";

function UnLoginButton() {
    const navigate:NavigateFunction = useNavigate();
    const auth_context = React.useContext(authContext);

    function HandleMouseEvent(){
        navigate('/login');
        auth_context!.setAuthenticated(false);
        sessionStorage.setItem('user', '')
    };

    return (
        <React.Fragment>
            <div className="col-md-6 col-lg-4 mb-4">
                <button type="submit" onClick = {() =>HandleMouseEvent()} className="btn button-default btn-unlogin">Выйти</button>
            </div>
        </React.Fragment>
    );
}

export default  UnLoginButton;