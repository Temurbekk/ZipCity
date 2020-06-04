import React from "react";
import useFetchCity from "../../FetchData/useFetchCity";

const zip = 10016;
const FindCity = () => {
  const { cities, isLoading } = useFetchCity(zip);
  return (
    <>
      {isLoading ? (
        <h1>Is Loading..</h1>
      ) : (
        <div>
          {cities.map((city) => {
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
