import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapAndMarkers from './MapAndMarkers.js'

const API = 'https://sheets.googleapis.com/v4/spreadsheets/1mpFIiSlkqU0BQmn5la3nEwkmy3QJUR8SvkaCHJmm6zk/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=AIzaSyBNTDOtaFrsIMbKsIJ_E3CxKaTwf0tCaW8';

class App extends Component {

  constructor(){
    super();

    this.state = {
     items:[],
     center: { lat: 37.8254957, lng: -122.4995417 },
     zoom: 10,
    };

  }

   
  componentDidMount(){

     fetch(API).then(response => response.json()).then(data => {
      let batchRowValues = data.valueRanges[0].values;

      const rows = [];
      for (let i = 1; i < batchRowValues.length; i++) {
        let rowObject = {};
        for (let j = 0; j < batchRowValues[i].length; j++) {
          rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
        }
        rows.push(rowObject);
      }

        this.setState({ items: rows });
        console.log(this.state.items);
    });

  }


  render() {



    return (
      <div>
         <MapAndMarkers markers={this.state.items} zoom={this.state.zoom} center={this.state.center} />
      </div>
    );
  }
}

export default App;
