import React, { Component } from "react";
import axois from "axios";
export default class ZipSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: this.props.Zip,
      city: null,
    };
  }
  componentDidMount() {
    const URL = "http://ctp-zip-api.herokuapp.com/zip";
    console.log(`${URL}/${10016}`);
    axois
      .get(`${URL}/${10016}`)
      .then((response) => {
        const data = response.data;
        const foundCity = {
          name: data.LocationText,
          state: data.State,
          locationLat: data.Lat,
          locationLong: data.Long,
          population: data.EstimatedPopulation,
          total: data.TotalWages,
        };
        this.setState({ city: foundCity });
      })
      .catch((error) => console.log(error));
  }
  render() {
    let display;
    if (this.state.zip) {
      display = <p>Loading...</p>;
    } else {
      display = (
        <>
          <h1>{this.state.city.name}</h1>
          <ul>State: {this.state.city.foundCity.state}</ul>
          <ul>
            Location:({this.state.city.foundCity.locationLat},
            {this.state.city.foundCity.locationLong})
          </ul>
          <ul>Population: {this.state.city.foundCity.population}</ul>
          <ul>Total: {this.state.city.foundCity.total}</ul>
        </>
      );
    }
    return <div className="City">{display}</div>;
  }
}
