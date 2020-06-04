import React, { useState, useEffect } from "react";
import ZipSearch from "./ZipSearch";
import axios from "axios";

const zip = 10016;
const FindCity = () => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .get(`http://ctp-zip-api.herokuapp.com/zip/${zip}`)
      .then((response) => {
        setResult(response.data);
      });
  }, []);
  const handleChange = (event) => {
    setResult(event.target.value);
  };
  return (
    <>
      {result.map((city) => {
        console.log(city.City);
      })}
      <form>
        <h1>Zip Code Search</h1>
        <label>Zip Code: </label>
        <input type="number" placeholder="Try 10016" onChange={handleChange} />
        <ZipSearch Zip={result} name="Result" />
      </form>
    </>
  );
};

export default FindCity;
