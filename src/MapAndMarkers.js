import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { MapPin } from "react-feather";

import Tooltip from "rc-tooltip";
import '../node_modules/rc-tooltip/assets/bootstrap.css';

const Marker = ({ name }) =>
  <div style={{ height: "50px", width: "50px" }}>
    <Tooltip
      placement="top"
      animation="zoom"
      overlay={
        <span>
          {name}
        </span>
      }
    >
      <span> <MapPin /></span>
    </Tooltip>
   
  </div>;

export default class MapAndMarkers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { markers } = this.props;

    let Mapmarkers = markers.map((marker, index) => {
      return (
        <Marker
          key={marker.id}
          lat={marker.lat}
          lng={marker.lng}
          name={marker.name}
        />
      );
    });

    return (
      <div style={{ height: "100vh" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDPkvjc9B3wQ9qqZPHt_xpHzlZIJintAsg",
            v: "3.32"
          }}
          center={this.props.center}
          zoom={this.props.zoom}
          hoverDistance={40 / 2}
        >
          {Mapmarkers}
        </GoogleMapReact>
      </div>
    );
  }
}