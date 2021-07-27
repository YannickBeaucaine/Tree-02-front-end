import React from 'react';
// styling import
import './StatsSection-style.css'

// images import 
import DataCard from '../cards/DataCard'
import TreeImg from '../Images/statsicons/trees-icon.png';
import FarmImg from '../Images/statsicons/farmer-icon.png';
import MoneyImg from '../Images/statsicons/money-tree-icon.png';
import CloudImg from '../Images/statsicons/cloud-download-icon.png';


const StatsSection = ({data}) => {


        
        if(!data){
            return null;
        }
        return (
            <div className="color-container">
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
                                <div className="col-lg-3 cold-md-6 col-sm-12 px-1">
                                    <DataCard staticon={TreeImg} statname="Trees Planted" statnumber={data.totalTreeCount} staticonalt="tree icon"/>
                                </div>
                                {/* card 2  */}
                                <div className="col-lg-3 cold-md-6 col-sm-12 px-1">
                                    <DataCard staticon={FarmImg} statname="Farmers" statnumber={data.totalFarmers} staticonalt="farmer icon"/>
                                </div>
                                {/* card 3  */}
                                <div className="col-lg-3 cold-md-6 col-sm-12 px-1">
                                    <DataCard staticon={MoneyImg} statname="Farmers earnings" statnumber={data.totalFarmerEarnings} staticonalt="farmer iscon icon"/>
                                </div>
                                {/* card 4  */}
                                <div className="col-lg-3 cold-md-6 col-sm-12 px-1">
                                    <DataCard staticon={CloudImg} statname="CO2 Asborbed" statnumber={data.tonnesOfCarbonSequestered} staticonalt="Co2 absorbtion icon"/>
                                </div>
                            </div>
                        {/* card section end  */}
                    </div>
            </div>
        </div>
        )
}
export default StatsSection;