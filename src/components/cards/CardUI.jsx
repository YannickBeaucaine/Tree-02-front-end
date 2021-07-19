import React from 'react'
import Img1 from '../images/t02greenfull.png'

const Card1 = props => {
    return (
        <div className="card text-center">
         <div className="overflow">
            <img src= {Img1} alt="tree02 logo" />
         </div>
         <div className="card-body text-dark">
             <h4 className="card-title">Card title</h4>
             <p className="card-text text-secondary">
                 lorem ipsum dolor sit amet, consectetur
             </p>
             {/* <a href="#" className="btn btn-outline-success"></a> */}
         </div>
     </div>
    );
};

export default Card1;