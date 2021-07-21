import React from 'react';
import './MyStoreCard-style.css';


export const MyStoreCard = () => {
    return (
      <div className='card-container'>
        <div className='card-long'>
            <div className='row'>
              {/* left column */}
              <div className='col-md-6 store-map-left'>
                {/* place map here  */}
                  {/* <img src= {TreesMap} alt="Map of trees location" className="card-img img-fluid md-6 tree-map" /> */}
                </div>
                {/* end of left column  */}
                    {/* mid column  */}
                    <div className='col-md-3 store-descp-mid'>
                        {/* <h1 className="">This is your store </h1> */}
                          <p className="card-title mt-2 text-center">
                            This is the business information, bla bla bla bla
                          </p>
                    </div>
                   {/* end of mid column */}
               {/* right column  */}
                <div className='col-md-3 store-img-right'>
                    <h1 className="card-title mt-2 text-center"></h1>
                      <p className="card-content text-center">
                  
                    </p>
              </div>
              {/* end of right column */}
            </div>
        </div>
    </div>
   
    );
  }
             
  

export default MyStoreCard;