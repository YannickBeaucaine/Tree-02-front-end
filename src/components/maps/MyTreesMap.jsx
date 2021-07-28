import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


export class MyTreeMap extends Component {
  constructor(props) {
    super(props);

    if(JSON.parse(sessionStorage.getItem('getAdopter'))) {
      let data = JSON.parse(sessionStorage.getItem('getAdopter'))
      sessionStorage.setItem('adopterTrees', JSON.stringify(data.trees))
    }

    this.state = {
      loading: true
  }
    
  }

  componentDidMount(){
    if(this.state.loading) {
      this.forceUpdate()
    }
    this.setState({ loading: false})
}


  createMarkers = (trees) => {
    if (trees) {
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
        {this.createMarkers(JSON.parse(sessionStorage.getItem('adopterTrees')))}
        </Map>
      );
    
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MyTreeMap);
