import React, { Component } from 'react';
import Cards1 from '../cards/Cards1';
import './Partners.css'

export default class Partners extends Component {
    render() {
        return (
            <div>
                <div className="partner-header">
                    <div className="partner-title">
                         <h1> MEET OUR PARTNERS</h1>
                    </div>
                </div>
                <Cards1 />
            </div>
        )
    }
}
