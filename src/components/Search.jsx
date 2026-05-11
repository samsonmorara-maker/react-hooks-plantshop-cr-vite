import React, { useState } from "react";


function Search() {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {  
    e.preventDefault();
      setSearch(e.target.value);
      const searchPlants = plants.filter((plant) =>
        plant.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setPlants(searchPlants);
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
