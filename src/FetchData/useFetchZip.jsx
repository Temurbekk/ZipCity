import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://ctp-zip-api.herokuapp.com/city";

const fetchCity = (cityName) => {
  const [zipCodes, setZipCodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${BASE_URL}/${cityName}`).then((response) => {
      setZipCodes(response.data);
      setIsLoading(false);
    });
  }, []);
  return { zipCodes, isLoading };
};

export default fetchCity;
