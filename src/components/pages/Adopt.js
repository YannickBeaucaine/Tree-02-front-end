import React, { Component } from 'react';
import './Header-style.css';
import PaymentForm from '../forms/PaymentForm';

export default class Adopt extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="header-title">
                        <h1 className="header-font"> ADOPT A TREE</h1>
                    </div>
                </div>
             <PaymentForm />
             </div>


        )
    }
}
