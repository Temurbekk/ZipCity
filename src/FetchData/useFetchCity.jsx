import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://ctp-zip-api.herokuapp.com/zip";

const useFetchCity = (zipCode) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${zipCode}`)
      .then((response) => {
        setCities(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [zipCode]);
  return { cities, isLoading };
};

export default useFetchCity;
