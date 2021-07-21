import React from 'react';
import CornerStore from '../images/stores/corner-store.jpg';

export const StoreImgCard = props => {
    return (
        
         <div className="overflow">
            <img src= {props.currentstoreimg} alt="my store logo" className="card-img-top" />
         </div>
        
    )
}

export default StoreImgCard;