import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://ctp-zip-api.herokuapp.com/zip";

const fetchCity = (zipCode) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${BASE_URL}/${zipCode}`);
    fetch(url)
      .then((response) =>
        response.json().then((data) => {
          setCities(data);
          setIsLoading(false);
        })
      )
      .catch((error) => console.log(error));
  }, [zipCode]);
  return { cities, isLoading };
};

export default fetchCity;
