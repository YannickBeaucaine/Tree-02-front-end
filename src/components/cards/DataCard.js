import React from 'react'
import './Datacard-style.css'

export const DataCard = props => {
    return (
        
                
                <div className="container data-cards">
                    
                        {/* Card  */}
                            <div className="stat-card">
                                <div className="stat-image text-center py-4">
                                    <img src= {props.staticon} alt={props.staticonalt} />
                                 <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase">{props.statname}</h5>
                                    <p className="card-text-secondary">well hello there</p>
                                 </div>
                                </div>
                            </div>
                        {/* Card end */}

                </div>
               
         
    )
}
export default DataCard;
                   
                     
                    