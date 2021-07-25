
import React from 'react';
import './AboutCard-style.css'
import T02Logo from '../images/t02greenfull.png'


export const AboutCard = () => {
    return (
        <div className='card-container'>
            <div className='card-long'>
                <div className='row'>
                   
                    <div className='col-md-7'>
                        <h1 className="card-title mt-2">The App</h1>
                        <p className="card-content">
                        TreeO2 is a unique digital community forestry management platform to manage
                        smallholder tree and carbon farming. Using a smartphone, RFID technology and cloud
                        data storage it is a complete forest inventory management tool for smallholder farmers.
                         It introduces a new level of accountability, transparency and efficiency into smallholder tree and carbon farming. 
                        </p>
                    </div>
                    <div className='col-lg-5'>
                    <img src= {T02Logo} alt="tree02 logo" className="card-img img-fluid md-6" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCard

