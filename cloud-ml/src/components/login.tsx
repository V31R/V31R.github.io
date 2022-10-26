import React from "react";
import '../css/login.css';
import HeaderCentral from "./headerCentral";
import { useNavigate, NavigateFunction } from "react-router-dom";
import authContext from "../authContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    const navigate:NavigateFunction = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const auth_context = React.useContext(authContext);

    function HandleMouseEvent(){
        if(email !== '' && password !== ''){
            navigate('/profile')
            auth_context!.setAuthenticated(true);
            console.log( auth_context!.authenticated);
        }
    };

    return (
        <React.Fragment>
            <HeaderCentral />
            <main className="container">
                <section className="login-form mb-3">
                    <div className="title">
                        <h1>Авторизация</h1>
                    </div>
                    <form className="mt-4" method="post">
                        <div className="mb-4">
                            <div><label>Email</label></div>
                            <div><input type="email" className="w-100" name="email" required onChange={evt => setEmail(evt.target.value)} /></div>
                            <div className="errors">Заполните "Email"</div>
                        </div>
                        <div className="mb-4">
                            <div><label>Пароль</label></div>
                            <div><input type="password" className="w-100" name="password" required onChange={evt => setPassword(evt.target.value)} /></div>
                            <div className="errors">Заполните "Пароль"</div>
                        </div>
                        <div className="mb-4">
                            <button type="submit" onClick={()=>HandleMouseEvent()} className="btn btn-login">Войти</button>
                        </div>
                    </form>
                </section>
            </main>
        </React.Fragment>
    );
}



export default  Login;