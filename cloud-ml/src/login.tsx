import React from "react";
import './css/login.css';
import HeaderCentral from "./HeaderCentral";
import { useNavigate, NavigateFunction } from "react-router-dom";
import AuthContext from './authContext'

function HandleMouseEvent(navigate:NavigateFunction, email:string, password: string, setLogin: any){
    if(email !== '' && password !== ''){
        navigate('/profile')
        setLogin(true);
    }
};


function Login() {
    const navigate:NavigateFunction = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [authenticated, setAuthenticated] = React.useState(false);
    return (
        <React.Fragment>
            <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
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
                            <button type="submit" onClick={evt=>HandleMouseEvent(navigate, email, password, setAuthenticated)} className="btn btn-login">Войти</button>
                        </div>
                    </form>
                </section>
            </main>
            </AuthContext.Provider>
        </React.Fragment>
    );
}



export default  Login;