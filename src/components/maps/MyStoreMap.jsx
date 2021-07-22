import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '600px',
  height: '350px'
};

let data = JSON.parse(sessionStorage.getItem('getAdopters'))
let trees = data.map((adopter) => {
  return adopter.trees
})
let allTrees = [...trees[0], ...trees[1]]
let allTreeLocations = allTrees.map((tree, index) => {
  let location = [
    tree.farmerName,
    parseFloat(tree.lat),
    parseFloat(tree.lon),
    index + 1
  ]
  return location
})

sessionStorage.setItem('allTrees', allTreeLocations)

export class MyStoreMap extends Component {


  createMarkers = (trees) => {
    return trees.map(tree => (
      <Marker 
        title={tree[0]}
        position={{lat: tree[1], lng: tree[2]}}
        key={tree[3]}
      >
      </Marker>
    ));
  };

  

  

  render() {
    console.log(this.createMarkers(allTreeLocations));
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={
          {
            lat: allTrees[0].lat,
            lng: allTrees[1].lon
          }
        }
      >
      {this.createMarkers(allTreeLocations)}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBWtZTsxX-PhM2tT5lWwRlf49VEux_we0I'
})(MyStoreMap);