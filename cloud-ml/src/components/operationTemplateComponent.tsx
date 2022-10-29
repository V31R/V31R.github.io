import React from 'react';
import '../css/button_default.css';
import '../css/operationTemplateComponent.css';
import FileLoad from './fileLoad';
import Header from "./header";

function OperationTemplateComponent(props: any) {
    return (
        <React.Fragment>
            <Header />
            <main className="container">
                <div className = "template-section"> 
                    <div>
                        <h2>{props.title}</h2>
                    </div>
                </div>
                <section className="functions-list row">
                    <div className="col-md-6 col-lg-6 mb-3">
                        <div className="function">
                            <div className='template-title'>
                                Параметры
                        </div>
                            {props.left}
                            <FileLoad />
                        </div>
                    </div>
                    <div className="function col-md-6 col-lg-6 mb-3">
                        <div className='template-title'>
                            Результат
                        </div>
                        {props.right}
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}

export default OperationTemplateComponent;