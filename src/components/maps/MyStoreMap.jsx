import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';



export class MyStoreMap extends Component {

  constructor(props) {
    super(props);

    let data = JSON.parse(sessionStorage.getItem('getAdopters'))
    let trees = data.map((adopter) => {
    return adopter.trees
    })
    let allTrees = [...trees[0], ...trees[1]]
    sessionStorage.setItem('allTrees', JSON.stringify(allTrees))
  }

  createMarkers = (trees) => {
    return trees.map(tree => (
      <Marker 
        title={tree.farmerName}
        position={{lat: tree.lat, lng: tree.lon}}
        key={tree.treeID}
        icon={{
          url: '/maptree2.png',
      
        }}
      >
      </Marker>
    ));
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        initialCenter={
          {
            lat: JSON.parse(sessionStorage.getItem('allTrees'))[0].lat,
            lng: JSON.parse(sessionStorage.getItem('allTrees'))[0].lon
          }
        }
      >
      {this.createMarkers(JSON.parse(sessionStorage.getItem('allTrees')))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MyStoreMap);
