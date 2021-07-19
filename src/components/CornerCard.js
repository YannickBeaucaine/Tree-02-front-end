import React from 'react';
import Img1 from '../components/Images/t02greensm.png';

export const CornerCard = () => {
    return (
     <div className="card text-center">
         <div className="overflow">
            <img src= {Img1} alt="image 1" />
         </div>
         <div className="card-body text-dark">
             <h4 className="card-title">Card title</h4>
             <p className="card-text text-secondary">
                 lorem ipsum dolor sit amet, consectetur
             </p>
             <a href="#" className="btn btn-outline-success"></a>
         </div>
     </div>
    )
}
