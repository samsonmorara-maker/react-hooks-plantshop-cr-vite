import React from "react";
import { useState } from "react";

function NewPlantForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(""); 





const handleSubmit = (e) => {
  e.preventDefault();
  const newPlant = {
    name,
    image,
    price: parseFloat(price),
  };

  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlant),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("New plant added:", data);
      // Optionally, you can update the plants state in App component here
    })
    .catch((error) => {
      console.error("Error adding plant:", error);
    });
};
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" 
        name="name" 
        placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
