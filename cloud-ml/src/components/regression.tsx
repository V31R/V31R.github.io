import React from 'react';
import '../css/regression.css';
import FileLoad from './fileLoad';
import Header from "./header";

function Regression() {
    return (
        <React.Fragment>
            <Header />
            <main className="container">
                <section className = "reg-section"> 
                    <div>
                        <h2>Регрессия</h2>
                    </div>
                </section>
                <section className="functions-list row">
                    <section className = "function col-md-5 col-lg-5 mb-3">
                    <div className= 'reg-title'>
                        Параметры
                    </div> 
                    <FileLoad />
                    </section>
                    <section className = "function col-md-7 col-lg-7 mb-3"> 
                    <div className= 'reg-title'>
                        Результат
                    </div>
                    </section>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Regression;