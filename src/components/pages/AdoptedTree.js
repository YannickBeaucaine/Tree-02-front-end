import React, { Component } from 'react';
import './Header-style.css';
import AdoptedTree from '../cards/AdoptedTree';
import FarmerCard from '../cards/FarmerCard';


export default class AdoptedTree extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="header-title">
                         <h1 className="header-font">CONGRATULATIONS !</h1>
                    </div>
                </div>
                <AdoptedTree />
                <FarmerCard />
            </div>
        )
    }
}
              
