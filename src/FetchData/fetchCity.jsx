import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://ctp-zip-api.herokuapp.com/zip";

const fetchCity = (zipCode) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${BASE_URL}/:${zipCode}`).then((response) => {
      console.log(response);
    });
  }, [zipCode]);
  return { cities, isLoading };
};

export default fetchCity;
