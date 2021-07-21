import React from 'react';

export const StoreImgCard = props => {
    return (
        
         <div className="overflow">
            <img src= {props.currentstoreimg} alt="my store logo" className="card-img-top" />
         </div>
        
    )
}

export default StoreImgCard;