// src/components/DonutList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import EditDonut from "./EditDonut";

const DonutList = ({ onRefresh }) => {
  const [donuts, setDonuts] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchDonuts();
  }, []);

  const fetchDonuts = async () => {
    try {
      const response = await axios.get("http://localhost/donutshop/api.php");
      setDonuts(response.data);
    } catch (error) {
      console.error("Error fetching donuts:", error);
    }
  };

  const deleteDonut = async (id) => {
    try {
      await axios({
        method: 'delete',
        url: "http://localhost/donutshop/api.php",
        data: { id: id } // Send `id` in the request body as a JSON payload
      });
      fetchDonuts();  // Refresh list after deletion
    } catch (error) {
      console.error("Error deleting donut:", error);
    }
  };

  return (
    <div>
      <h1>Donut List</h1>
      <ul>
        {donuts.map((donut) => (
          <li key={donut.id} style={{ marginBottom: "20px" }}>
            <h3>{donut.name}</h3>
            <p>Price: ${donut.price}</p>
            <p>{donut.description}</p>
            {donut.image_url && (
              <img
                src={donut.image_url}
                alt={donut.name}
                style={{ width: "150px", height: "auto" }}
              />
            )}
            <div>
              <button onClick={() => deleteDonut(donut.id)}>Delete</button>
              <button onClick={() => setEditing(donut)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
      {editing && (
        <EditDonut
          donut={editing}
          onClose={() => setEditing(null)}
          onSave={() => {
            setEditing(null);
            fetchDonuts();
          }}
        />
      )}
    </div>
  );
};

export default DonutList;
