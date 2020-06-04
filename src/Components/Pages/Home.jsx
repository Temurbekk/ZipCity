import React from "react";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="title has-text-centered is-size-1">
          Welcome to ZipCity
        </div>
        <div className="box section has-text-centered">
          <p className="is-size-3">
            ZipCity is a site where you can search for a zip code of a
            particular city or search for its zip code. You can click on the
            Find City button on the navigation bar to start looking for a
            particular city by entering a valid zip code. You can click on the
            Find Zip Code button on the navigation bar to start looking for a
            particular zip code by entering a valid city name
          </p>
        </div>
        <div className="section has-text-centered is-size-3">
          We hope you consider this app for your future searches
        </div>
      </div>
    </>
  );
};

export default Home;
