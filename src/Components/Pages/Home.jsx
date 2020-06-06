import React from "react";

const Home = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="title has-text-centered is-size-1">
            Welcome to ZipCity
          </div>
          <div className="box section has-text-centered">
            <p className="section is-size-3">
              ZipCity is a website where you can search for a city with a
              particular zip code.
            </p>
            <p className="is-size-3">
              You can click on the Find City button on the navigation bar to
              start looking for a particular city by entering a valid zip code.
            </p>
          </div>
          <div className="section has-text-centered is-size-3">
            We hope you consider this app for your future searches
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
