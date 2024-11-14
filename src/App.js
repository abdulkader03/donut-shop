// src/App.js
import React, { useState } from "react";
import DonutList from "./DonutList";
import AddDonut from "./AddDonut";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Donut Shop Application</h1>
      <AddDonut onAdd={handleRefresh} />
      <DonutList key={refresh} onRefresh={handleRefresh} />
    </div>
  );
};

export default App;
