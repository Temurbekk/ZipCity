import React from "react";
import useFetchCity from "../../FetchData/useFetchCity";

function RenderCities({ zip }) {
  const { cities, isLoading } = useFetchCity(zip);
  return (
    <>
      <div className="columns">
        <div className="column">
          {cities.map((city) => {
            return (
              <>
                {isLoading ? (
                  <div>LOADING</div>
                ) : (
                  <div className="section">
                    <div className="container">
                      <div className="card">
                        <div className="card-header has-centered-text">
                          {city.City}, {city.State}
                        </div>
                        <div className="card-content">
                          <ul>
                            <li>State: {city.State}</li>
                            <li>
                              Location: ({city.Lat},{city.Long})
                            </li>
                            <li>
                              Population (estimated): {city.EstimatedPopulation}
                            </li>
                            <li>Total Wages: {city.TotalWages}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default RenderCities;
