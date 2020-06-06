import React, { useState } from "react";
import InputZip from "../Inputs/InputZip";
import RenderCities from "../Render/RenderCities";

const FindCity = () => {
  const [search, setSearch] = useState(0);
  const [searching, setSearching] = useState(true);

  return (
    <>
      {searching ? (
        <div>
          <InputZip setSearch={setSearch} setSearching={setSearching} />
        </div>
      ) : (
        <div>
          <InputZip setSearch={setSearch} setSearching={setSearching} />
          <RenderCities zip={search} />
        </div>
      )}
    </>
  );
};
export default FindCity;
