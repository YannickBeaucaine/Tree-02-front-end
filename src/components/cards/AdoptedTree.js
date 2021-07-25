import React from 'react';
import './AdoptedTree-style.css';

export const AdoptedTree = () => {
    return (
        <div className='card-container adopted-tree-section'>
        <div className='card-long'>
            <div className='row'>
               {/* left column */}
               <div className='col-md-5 map-left adopted-tree-map-responsive'>
                {/* place map here  */}
                    MAP
                </div>
                {/* end of left column  */}
                {/* right column  */}
                <div className='col-md-7 adopted-tree-right'>
                    <h1 className="card-title mt-2 text-center adopted-header">TEST</h1>
                   
                      <p className="card-content text-center adopted-text">
                            TEST
                      </p>
                </div>
                {/* end of right column */}
            </div>
        </div>
    </div>
    )
}

export default AdoptedTree;