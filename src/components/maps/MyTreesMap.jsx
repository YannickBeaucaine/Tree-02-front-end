import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


export class MyTreeMap extends Component {
  constructor(props) {
    super(props);
    let data = JSON.parse(sessionStorage.getItem('getAdopter'))
    sessionStorage.setItem('adopterTrees', JSON.stringify(data.trees))
  }

  createMarkers = (trees) => {
    console.log(trees)
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
            lat: JSON.parse(sessionStorage.getItem('adopterTrees'))[3].lat,
            lng: JSON.parse(sessionStorage.getItem('adopterTrees'))[2].lon
          }
        }
      >
      {this.createMarkers(JSON.parse(sessionStorage.getItem('adopterTrees')))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MyTreeMap);
