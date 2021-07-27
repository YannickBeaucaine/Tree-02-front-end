import React from 'react';
import './MyStoreCard-style.css';
import StoreImgCard from './StoreImgCard';
import CornerStoreImg from '../Images/stores/corner-store.jpg';
import { Link } from 'react-router-dom';
import MyStoreMap from '../maps/MyStoreMap'


export const MyStoreCard = () => {
    return (
      <div className='card-container '>
        <div className='card-long'>
            <div className='row'>
              {/* left column */}
              <div className='col-lg-6 store-map-left store-map-responsive'>
                {/* place map here  */}
                  {/* <img src= {TreesMap} alt="Map of trees location" className="card-img img-fluid md-6 tree-map" /> */}
                  <MyStoreMap />
                </div>
                {/* end of left column  */}
                    {/* mid column  */}
                    <div className='col-lg-3 store-descp-mid'>
                        {/* <h1 className="">This is your store </h1> */}
                          <p className="card-title mt-3 text-center">
                          Why The Corner Store Network?
                          Because business as usual isn’t working.   
                          Globally, we waste roughly 1.3 billion tonnes of food annually, we emit roughly 36 billion tonnes of CO2  annually, and whilst many of us love our morning latte, coffee farmers are some of the lowest paid farmers in the world. 
                          And we’re not ok with any of that.   
 
 
                          </p>
                    </div>
                   {/* end of mid column */}
               {/* right column  */}
               
                <div className='col-lg-3 store-img-right'>
                    <Link to={{ pathname: "https://cornerstorenetwork.org.au/"}} style={{ textDecoration: 'none' }} target="_blank">
                         <StoreImgCard currentstoreimg={CornerStoreImg} />
                         <div className='col-auto'>
                            <h5 className='text-center store-info'>
                            42 Regent Street, Oakleigh, 
                            VIC 3166 Australia <br/>
                            0460 785 085 
                           </h5> 
                         </div>
                   </Link>
              </div>
              {/* end of right column */}
            </div>
        </div>
    </div>
   
    );
  }
             
                    
                            
  export default MyStoreCard;


  
