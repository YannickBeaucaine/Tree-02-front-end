import React from 'react';
import './TreesCard-style.css';
import MyTreesMap from '../maps/MyTreesMap';


export const TreesCard = () => {
    return (

      <div className='card-container whole-card'>
      <div className='card-long my-trees'>
          <div className='row'>
             {/* left column */}
             <div className='col-lg-7 map-left tree-map-responsive px-0' style={{ width: '22rem' }} >
              {/* place map here  */}
              <MyTreesMap />
                 {/* <img src= {TreesMap} alt="Map of trees location" className="card-img img-fluid md-6 tree-map" /> */}
              </div>
              {/* end of left column  */}
              {/* right column  */}
              <div className='col-lg-5 '>
                  <h1 className="card-title  text-center cust-name " style={{ width: '20rem' }}>Thanks <br/>{sessionStorage.getItem('name')}!</h1>
                    <h4 className="card-content text-center" style={{ width: '20rem' }}>
                    You have adopted {sessionStorage.getItem('name').length} trees    
                    </h4>
              </div>
              {/* end of right column */}
          </div>
      </div>
  </div>
    );
  }
             
  

export default TreesCard;