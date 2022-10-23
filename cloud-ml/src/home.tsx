import React from 'react';
import './css/index.css';
import Header from './Header';

class Home extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Header />
            </React.Fragment>
        );
    }
}

export default Home;