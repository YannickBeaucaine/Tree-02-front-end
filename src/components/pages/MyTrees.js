import React, { Component } from 'react';
import './Header-style.css';
import TreeCard from '../cards/TreeCard';

export default class Mytrees extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="header-title">
                         <h1 className="header-font">MY TREE</h1>
                    </div>
                </div>
                <TreeCard />
            </div>
        )
    }
}
