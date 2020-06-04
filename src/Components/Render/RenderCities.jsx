import React from "react";
import useFetchCity from "../../FetchData/useFetchCity";

function RenderCities({ zip }) {
  const { cities, isLoading } = useFetchCity(zip);
  return (
    <div>
      {cities.map((city) => {
        return (
          <>
            {isLoading ? (
              <div>LOADING</div>
            ) : (
              <div>
                <div>State: {city.State}</div>
                <div>City: {city.City}</div>
                <div>
                  Location: ({city.Lat},{city.Long})
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

export default RenderCities;
