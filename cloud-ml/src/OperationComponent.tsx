import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Operation from './operation';
import './css/operation_component.css';

class OperationComponent extends React.Component<Operation>{

    render(){
        console.log(process.env.PATH);
        console.log(require.main)
        console.log("./images/"+this.props.img_name);
        return(
            <div className="col-md-6 col-lg-4 mb-3">
                <div className="product">
                    <div>
                        <div className="mb-3">
                            <a href="/">
                            <img src={require(`./images/${this.props.img_name}`).default} alt='Пример'/>
                            </a>
                        </div>
                        <div className="product-title">
                            <a className="nav-link" href={this.props.link}>
                                <b>{this.props.name}</b>
                            </a>
                        </div>
                        <br />
                        <div>{this.props.description}</div>
                    </div>
                    <br />
                    <div className ="mt-auto">
                        <a className="btn btn-try" href="/" type="button">Опробовать</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default OperationComponent;