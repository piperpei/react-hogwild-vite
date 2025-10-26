import React, { useState } from "react";
import Nav from "./Nav";
import hogsData from "../porkers_data";
import HogList from "./HogList"; 
import AddHogForm from "./AddHogForm";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortBy, setSortBy] = useState("");

  const handleAddHog = (newHog) => {
    setHogs((prevHogs) => [...prevHogs, newHog]);
  };

  const handleHideHog = (name) => {
    setHogs((prevHogs) => prevHogs.filter((hog) => hog.name !== name));
  };

  const filteredHogs = filterGreased
    ? hogs.filter((hog) => hog.greased)
    : hogs;

  const sortedHogs = [...filteredHogs];
  if (sortBy === "name") {
    sortedHogs.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "weight") {
    sortedHogs.sort((a, b) => a.weight - b.weight);
  }

  return (
    <div className="App">
      <Nav />

      <div className="filterWrapper">
        <label>
          Greased Pigs Only?
          <input
            type="checkbox"
            checked={filterGreased}
            onChange={(e) => setFilterGreased(e.target.checked)}
          />
        </label>

        <label style={{ marginLeft: "1rem" }}>
          Sort by:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </label>
      </div>

      <HogList hogs={sortedHogs} onHideHog={handleHideHog} />

      <AddHogForm onAddHog={handleAddHog} />
    </div>
  );
}

export default App;