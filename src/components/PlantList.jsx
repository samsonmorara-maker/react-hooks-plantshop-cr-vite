import React from "react";
import PlantCard from "./PlantCard";
import { useState } from "react";

function PlantList({plants}) {
  
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
