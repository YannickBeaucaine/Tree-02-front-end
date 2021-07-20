import React, { Component } from 'react';
import './Header-style.css';
import SignupForm from '../forms/SignupForm';

export default class Signup extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="header-title">
                         <h1 className="header-font"> SIGN UP</h1>
                    </div>
                </div>
                <SignupForm />
            </div>
        )
    }
}
