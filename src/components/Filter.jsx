import React from "react";

const Filter = ({ showGreasedOnly, sortBy, onGreaseChange, onSortChange }) => {
  return (
    <div className="filterWrapper">
      <label htmlFor="greasedCheckbox">
        Greased Pigs Only?
        <input
          id="greasedCheckbox"
          type="checkbox"
          checked={showGreasedOnly}
          onChange={onGreaseChange}
        />
      </label>

      <label htmlFor="sortSelect" style={{ marginLeft: "1rem" }}>
        Sort by:
        <select id="sortSelect" value={sortBy} onChange={onSortChange}>
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;