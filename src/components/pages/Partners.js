import React, { Component } from 'react';
import Cards1 from '../cards/Cards1';
import './Header-style.css';

export default class Partners extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="header-title">
                         <h1 className="header-font"> MEET OUR PARTNERS</h1>
                    </div>
                </div>
                <Cards1 />
            </div>
        )
    }
}
