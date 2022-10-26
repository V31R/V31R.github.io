import React from 'react';
import '../css/operationTemplateComponent.css';
import FileLoad from './fileLoad';
import Header from "./header";

function OperationTemplateComponent(props: any) {
    return (
        <React.Fragment>
            <Header />
            <main className="container">
                <section className = "template-section"> 
                    <div>
                        <h2>{props.title}</h2>
                    </div>
                </section>
                <section className="functions-list row">
                    <section className = "function col-md-5 col-lg-5 mb-3">
                    <div className= 'template-title'>
                        Параметры
                    </div>
                    { props.left } 
                    <FileLoad />
                    </section>
                    <section className = "function col-md-7 col-lg-7 mb-3"> 
                    <div className= 'template-title'>
                        Результат
                    </div>
                    { props.right } 
                    </section>
                </section>
            </main>
        </React.Fragment>
    );
}

export default OperationTemplateComponent;