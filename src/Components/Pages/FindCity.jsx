import React, { useState, useEffect } from "react";
import useFetchCity from "../../FetchData/useFetchCity";

const zip = 10016;
const FindCity = () => {
  const { cities, isLoading } = useFetchCity(zip);
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(true);
  const [filteredCities, setFilteredCities] = useState();

  useEffect(() => {
    const implementSearch = () => {
      setFilteredCities(
        cities.filter((city) => {
          return city.City.toLowerCase().includes(search.toLowerCase());
        })
      );
    };
    implementSearch();
  }, [search, cities]);

  return (
    <>
      {isLoading ? (
        <h1>Is Loading..</h1>
      ) : searching ? (
        <div>
          <input
            className="input"
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setSearch(e.target.value);
              setSearching(false);
            }}
          />
        </div>
      ) : (
        <div>
          <input
            className="input"
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setSearch(e.target.value);
              if (e.target.value === "") {
                setSearching(true);
              }
            }}
          />
          {filteredCities.map((city) => {
            return (
              <>
                <div>State: {city.State}</div>
                <div>City: {city.City}</div>
                <div>
                  Location: ({city.Lat},{city.Long})
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};
export default FindCity;
