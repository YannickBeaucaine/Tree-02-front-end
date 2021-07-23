import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './MyStoreMap-style.css'

export function myStoreMap() {

  let data = JSON.parse(sessionStorage.getItem('getAdopters'))
  let trees = data.map((adopter) => {
    return adopter.trees
  })
  let allTrees = [...trees[0], ...trees[1]]
  sessionStorage.setItem('allTrees', allTrees)

  let createMarkers = (trees) => {
    return trees.map(tree => (
      <Marker 
        title={tree[0]}
        position={{lat: tree[1], lng: tree[2]}}
        key={tree[3]}
      >
      </Marker>
    ));
  };

  return (
    <Map
        google={this.props.google}
        zoom={12}
        initialCenter={
          {
            lat: allTrees[0].lat,
            lng: allTrees[1].lon
          }
        }
      >
      {createMarkers(allTrees)}
      </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: ''
})(myStoreMap);
