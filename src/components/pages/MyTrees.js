import React, { Component } from 'react';
import './Header-style.css';
import TreesCard from '../cards/TreesCard';
import AdoptedTree from '../cards/AdoptedTree';
import FarmerCard from '../cards/FarmerCard';

export default class Mytrees extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="header-title">
                         <h1 className="header-font">MY TREES</h1>
                    </div>
                </div>
                <TreesCard />
                <AdoptedTree />
                <FarmerCard />
            </div>
        )
    }
}
