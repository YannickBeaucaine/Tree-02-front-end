import React, { Component } from 'react';
import Card1 from './Card1';
import img1 from '../images/partners/corner-logo.png';
import img2 from '../images/partners/etiko-logo.png';
import img3 from '../images/partners/oneseed-logo.png';
import img4 from '../images/partners/onesp-logo.png';
import img5 from '../images/partners/showroom-logo.png';

export default class Cards1 extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-lg-4">
                            <Card1 imgsrc={img1} partnername="The Corner Store Network"/>
                        </div>
                        <div className="col-lg-4">
                            <Card1 imgsrc={img2} partnername="Etiko"/>
                        </div>
                        <div className="col-lg-4">
                            <Card1 imgsrc={img3} partnername="WithOneSeed"/>
                        </div>
                        <div className="col-lg-4">
                            <Card1 imgsrc={img4} partnername="One Sustainable Planet"/>
                        </div>
                        <div className="col-lg-4">
                            <Card1 imgsrc={img5} partnername="Showroom-x"/>
                        </div>
                </div>
                
            </div>
            
      
        
            
            
        )
    }
}
