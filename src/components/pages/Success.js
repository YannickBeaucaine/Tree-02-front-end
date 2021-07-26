import React, { Component } from 'react';
import './Header-style.css';
import LoadingSpinner from '../cards/LoadingSpinner'
import './Success-style.css';



export default class SuccessPage extends Component {
    render() {
        return (
            <div>
            <div className="header">
                <div className="header-title">
                     <h1 className="header-font"> THANK YOU!</h1>
                </div>
            </div>
            <LoadingSpinner />
            <div>
             
            </div>
        </div>
        )
    }
}
      