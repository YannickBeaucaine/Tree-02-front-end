import React from 'react';
import './TreesCard-style.css';
import MyTreesMap from '../maps/MyTreesMap';


export const TreesCard = () => {

  try {
    const numberOfTrees = JSON.parse(sessionStorage.getItem('getAdopter')).trees.length
    sessionStorage.setItem('numberOfTrees', numberOfTrees)
  } catch{
    const numberOfTrees = 0
    sessionStorage.setItem('numberOfTrees', numberOfTrees)
  }
  

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
                    You have adopted {sessionStorage.numberOfTrees} trees    
                    </h4>
                    
                  
              </div>
              {/* end of right column */}
          </div>
          
      </div>
     {/* insert wave here   */}
 


  </div>
      
    );
  }
             
  

export default TreesCard;