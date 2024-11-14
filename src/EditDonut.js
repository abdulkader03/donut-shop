// src/components/EditDonut.js
import React, { useState } from "react";
import axios from "axios";

const EditDonut = ({ donut, onClose, onSave }) => {
  const [formData, setFormData] = useState(donut);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost/donutshop/api.php", formData);
      onSave();
      onClose();
    } catch (error) {
      console.error("Error updating donut:", error);
    }
  };

  return (
    <div>
      <h2>Edit Donut</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditDonut;
