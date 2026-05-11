import React from "react";
import { useState }from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, onAddPlant}) {
  const [search, setSearch] = useState("");

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

 
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search onSearch={ setSearch }  />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
