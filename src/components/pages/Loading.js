
import React, { Component } from 'react';
import './Header-style.css';
import LoadingSpinner from '../cards/LoadingSpinner'
import './Success-style.css';



export default class Loading extends Component {
    render() {
        return (
            <div>
                <div className="header">
                  <div className="header-title">
                       <h1 className="header-font">ONE TREE AT A TIME!</h1>
                    </div>
                </div>
                    <LoadingSpinner />
             
       
            </div>
        )
    }
}

