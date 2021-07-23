import React from 'react';
import './TreesCard-style.css';
import MyTreesMap from '../maps/MyTreesMap';


export const TreesCard = () => {
    return (

      <div className='card-container'>
      <div className='card-long'>
          <div className='row'>
             {/* left column */}
             <div className='col-md-5 map-left'>
              {/* place map here  */}
              <MyTreesMap />
                 {/* <img src= {TreesMap} alt="Map of trees location" className="card-img img-fluid md-6 tree-map" /> */}
              </div>
              {/* end of left column  */}
              {/* right column  */}
              <div className='col-md-7 cust-stats-right'>
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