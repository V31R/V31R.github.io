import React from "react";
import "./css/footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component{
    render(){
        return(
            <footer className="mt-auto">
                <div className="container">
                    <div>
                            &copy; V31R, 2022
                    </div>
                    <div>
                        <a className="link" href="https://github.com/V31R">GitHub</a>
                    </div>
                </div>  
            </footer>
        );
    }
}

export default Footer;