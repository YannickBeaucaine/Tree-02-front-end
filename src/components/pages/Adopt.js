import React, { Component } from 'react';
import './Header-style.css';
import PaymentForm from '../forms/PaymentForm';
import BlueWave from '../sections/BlueWave';
import BlueSection from '../sections/BlueSection';


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
             <BlueWave />
             <BlueSection/>
        
             </div>


        )
    }
}
