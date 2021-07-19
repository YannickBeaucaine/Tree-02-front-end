import React from 'react';
import './Card1-style.css';

const Card1 = props => {
    return (
        <div className="card text-center shadow">
         <div className="overflow">
            <img src= {props.imgsrc} alt="partner store logo" className="card-img-top" />
         </div>
         <div className="card-body text-dark">
             <h4 className="card-title">{props.partnername}</h4>
             <p className="card-text text-secondary">
                 lorem ipsum dolor sit amet, consectetur
             </p>
             {/* <a href="#" className="btn btn-outline-success"></a> */}
         </div>
     </div>
    );
};

export default Card1;