import React from 'react'
import './Datacard-style.css'

export const DataCard = props => {
    const {staticon,staticonalt,...statDetails} = props;
    return (
        
                
                <div className="container data-cards">
                    
                        {/* Card  */}
                            <div className="stat-card">
                                <div className="stat-image text-center py-4">
                                    <img src= {staticon} alt={staticonalt} />
                                 <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase">{statDetails.statname}</h5>
                                    <p className="card-text-secondary">{statDetails.statnumber}</p>
                                 </div>
                                </div>
                            </div>
                        {/* Card end */}

                </div>
               
         
    )
}
export default DataCard;
                   
                     
                    