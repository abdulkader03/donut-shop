// src/components/AddDonut.js
import React, { useState } from "react";
import axios from "axios";

const AddDonut = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image_url: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost/donutshop/api.php", formData);
      setFormData({ name: "", description: "", price: "", image_url: "" });
      onAdd();
    } catch (error) {
      console.error("Error adding donut:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Donut</h2>
      <input
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <input
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
      />
      <input
        placeholder="Image URL"
        value={formData.image_url}
        onChange={(e) =>
          setFormData({ ...formData, image_url: e.target.value })
        }
      />
      <button type="submit">Add Donut</button>
    </form>
  );
};

export default AddDonut;
