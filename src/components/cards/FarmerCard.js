import React from 'react';
import './FarmerCard-style.css';

export const FarmerCard = () => {
    return (
        <div className='card-container py-4'>
      <div className='card-long'>
          <div className='row'>
             {/* left column */}
             <div className='col-md-7 text-center farmer-details'>
              {/* place farmer details here  */}
              <h4 className='farmer-name'>Farmer Jose</h4><br/>
              <h4 className='farmer-location'>Timor-Leste</h4>
              
              </div>
              {/* end of left column  */}
              {/* right column  */}
              <div className='col-md-5 farmer-picture-frame'>
                {/* place picture here  */}
                <img src="" alt="farmer" className="card-img-center farmer-photo" />
                
              </div>
              {/* end of right column */}
          </div>
      </div>
  </div>
    )
}
export default FarmerCard;