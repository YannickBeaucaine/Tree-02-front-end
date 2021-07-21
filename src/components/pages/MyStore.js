import React, { Component } from 'react';
import './Header-style.css';
import MyStoreCard from '../cards/MyStoreCard';

export default class MyStore extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="header-title">
                         <h1 className="header-font">MY STORE</h1>
                    </div>
                </div>
                <MyStoreCard />
            </div>
        )
    }
}
