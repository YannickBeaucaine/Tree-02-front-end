import React,{useMemo} from 'react';
import './FarmerCard-style.css';

export const FarmerCard = () => {

  
  const [tree, numberOfTrees] = useMemo(() => {
    const trees = JSON.parse(sessionStorage.getItem('getAdopter')).trees;
    const index = Math.floor(Math.random() * trees.length);
    return [trees[index],trees.length];
  },[])


    return (
        <div className='card-container py-4'>
      <div className='card-long'>
          <div className='row'>
             {/* left column */}
             <div className='col-md-7 text-center farmer-details'>
              {/* place farmer details here  */}
              <h4 className='farmer-name'>{tree.farmerName}</h4><br/>
              <h4 className='farmer-location'>{tree.farmerBio}</h4>
              
              </div>
              {/* end of left column  */}
              {/* right column  */}
              <div className='col-md-5 farmer-picture-frame'>
                {/* place picture here  */}
                <img src={tree.farmerPhotoURL} alt="farmer" className="card-img-center farmer-photo" />
                
              </div>
              {/* end of right column */}
          </div>
      </div>
  </div>
    )
}
export default FarmerCard;