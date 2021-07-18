import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
     
                   <div className="fixed-bottom" >
            <div className="bg-footerBlue">
                <div className="container">
                    <div className="row">
                        {/*Column Left*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>Hello</h4>
                            <ul className="list-unstyled"> 
                                <li>Thing1</li>
                                <li>Thing2</li>
                                <li>Thing3</li>
                                <li>Thing4</li>
                            </ul>
                        </div>
                    </div>
                    {/* Copyright */}
                    <div className="footer-bottom">
                        <p className="text-sm-center">
                            &copy; {new Date().getFullYear()} Tree02 - All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
            
        )
    }
}
