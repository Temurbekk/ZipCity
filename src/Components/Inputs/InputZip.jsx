import React from "react";

const InputZip = ({ setSearch, setSearching }) => {
  const handleChange = (e) => {
    if (e.target.value === "" || e.target.value.toString().length !== 5) {
      setSearching(true);
    } else {
      setSearch(e.target.value);
      setSearching(false);
    }
  };
  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};

export default InputZip;
