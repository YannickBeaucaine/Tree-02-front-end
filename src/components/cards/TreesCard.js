import React from 'react';
import './TreesCard-style.css';


export const TreesCard = () => {
    return (

      <div className='card-container'>
      <div className='card-long'>
          <div className='row'>
             {/* left column */}
             <div className='col-md-5'>
              {/* place map here  */}
                 {/* <img src= {TreesMap} alt="Map of trees location" className="card-img img-fluid md-6 tree-map" /> */}
              </div>
              {/* end of left column  */}
              {/* right column  */}
              <div className='col-md-7'>
                  <h1 className="card-title mt-2 text-center">Thank You "username"</h1>
                    <p className="card-content text-center">
                    You have adopted "" trees-----------     
                    Your carbon impact------------------
                    Number 3----------------------------
                    Number 4----------------------------
                    </p>
              </div>
              {/* end of right column */}
          </div>
      </div>
  </div>
    );
  }
             
  

export default TreesCard;