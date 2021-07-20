import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                        <div className="col-md-4 col-lg-3">
                            <Link to={{ pathname: "https://cornerstorenetwork.org.au/"}} target="_blank">
                                <Card1 imgsrc={img1} />
                            </Link>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <Link to={{ pathname: "https://www.etiko.com.au/"}} target="_blank">
                                <Card1 imgsrc={img2} />
                            </Link>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <Link to={{ pathname: "https://withoneseed.org.au"}} target="_blank">
                                <Card1 imgsrc={img3} />
                            </Link>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <Link to={{ pathname: "https://www.onesustainableplanet.co/"}} target="_blank">
                                <Card1 imgsrc={img4} />
                            </Link>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <Link to={{ pathname: "https://showroom-x.com/"}} target="_blank">
                                <Card1 imgsrc={img5} />
                            </Link>
                        </div>
                </div>
                
            </div>
            
      
        
            
            
        )
    }
}
