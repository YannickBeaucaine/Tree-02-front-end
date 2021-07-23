import React, { Component } from 'react';
import './Header-style.css';
import MyAccountCard from '../cards/MyAccountCard'

export default class Account extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="header-title">
                         <h1 className="header-font">MY ACCOUNT</h1>
                    </div>
                </div>
              <MyAccountCard />
            
            </div>
        )
    }
}
