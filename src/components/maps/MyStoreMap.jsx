import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';




export class MyStoreMap extends Component {

  parseAdopters = () => {
    try {
      let data = JSON.parse(sessionStorage.getItem('getAdopters'))
      let trees = data.map((adopter) => {
      return adopter.trees
      })
      let allTrees = [...trees[0], ...trees[1], ...trees[2]]
      sessionStorage.setItem('allTrees', JSON.stringify(allTrees))
      } catch(err) {
        console.log(err)
      }
  }

  createMarkers = (trees) => {
    if(trees) {
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
    }
  };

  render() {

    this.parseAdopters()

    if(!sessionStorage.getItem('getAdopter')) {
      return <Map
      google={this.props.google}
      zoom={12}
      initialCenter={
        {
          lat: "-8.6263352",
          lng: "126.6795575"
        }
      }
    />
    }
    return (
      <Map
        google={this.props.google}
        zoom={12}
        initialCenter={
          {
            lat: "-8.6263352",
            lng: "126.6795575"
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
