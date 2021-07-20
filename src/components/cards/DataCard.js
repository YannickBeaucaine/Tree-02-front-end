import React from 'react'
import StatImage from '../images/dataimages/trees-icon.png'
import './Datacard-style.css'

export const DataCard = () => {
    return (
        <div className="">
            {/* section container  */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center data-title">
                        <h1 className="text-uppercase title-text">Measure our impact</h1>
                        <p className="para">
                            Thanks to our contributors we ave achieved :
                        </p>

                    </div>
                </div>
                {/* cards section  */}
                <div className="container data-cards">
                    <div className="row">
                        <div className="col-lg-3 cold-md-6 col-sm-12">
                            <div className="stat-card">
                                <div className="stat-image text-center py-4">
                                    <img src= {StatImage} alt="Trees planted" />
                                 <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase">Trees Planted</h5>
                                    <p className="card-text-secondary">well hello there</p>
                                 </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 cold-md-6 col-sm-12">
                            <div className="stat-card">
                                <div className="stat-image text-center py-4">
                                    <img src= {StatImage} alt="Trees planted" />
                                 <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase">Trees Planted</h5>
                                    <p className="card-text-secondary">well hello there</p>
                                 </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 cold-md-6 col-sm-12">
                            <div className="stat-card">
                                <div className="stat-image text-center py-4">
                                    <img src= {StatImage} alt="Trees planted" />
                                 <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase">Trees Planted</h5>
                                    <p className="card-text-secondary">well hello there</p>
                                 </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 cold-md-6 col-sm-12">
                            <div className="stat-card">
                                <div className="stat-image text-center py-4">
                                    <img src= {StatImage} alt="Trees planted" />
                                 <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase">Trees Planted</h5>
                                    <p className="card-text-secondary">well hello there</p>
                                 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                      {/* card two               */}
                        {/* card two               */}
                          {/* card two               */}
                {/* end of cards section */}
            </div>
        </div>
    )
}
export default DataCard;