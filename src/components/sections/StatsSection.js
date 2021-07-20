import React, { Component } from 'react';
// styling import
import './StatsSection-style.css'

// images import 
import DataCard from '../cards/DataCard'
import TreeImg from '../images/statsicons/trees-icon.png';
import FarmImg from '../images/statsicons/farmer-icon.png';
import MoneyImg from '../images/statsicons/money-tree-icon.png';
import CloudImg from '../images/statsicons/cloud-download-icon.png';


export default class StatsSection extends Component {
    render() {
        return (
            <div className="stats-section">
         
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center data-title">
                        <h1 className="text-uppercase title-text">Measure our impact</h1>
                        <p className="para">
                            Thanks to our contributors we have achieved
                        </p>

                    </div>
                </div>
                {/* cards section  */}
                    <div className="row">
                        {/* card 1  */}
                        <div className="col-lg-3 cold-md-6 col-sm-12">
                             <DataCard staticon={TreeImg} statname="Trees Planted" staticonalt="tree icon"/>
                        </div>
                        {/* card 2  */}
                        <div className="col-lg-3 cold-md-6 col-sm-12">
                             <DataCard staticon={FarmImg} statname="Farmers" staticonalt="farmer icon"/>
                        </div>
                        {/* card 3  */}
                        <div className="col-lg-3 cold-md-6 col-sm-12">
                             <DataCard staticon={MoneyImg} statname="Farmers earnings" staticonalt="farmer iscon icon"/>
                        </div>
                        {/* card 4  */}
                        <div className="col-lg-3 cold-md-6 col-sm-12">
                             <DataCard staticon={CloudImg} statname="CO2 Asborbed in Tonnes" staticonalt="Co2 absorbtion icon"/>
                        </div>
                    </div>
                {/* card section end  */}
            </div>
        </div>
        )
    }
}
