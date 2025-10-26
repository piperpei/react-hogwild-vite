import React, { useState } from "react";

function AddHogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    greased: false,
    weight: "",
    image: "",
    "highest medal achieved": "bronze",
  });

  const handleChange = (e) => {
    const { id, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [id === "greasedCheckbox" ? "greased" : id.replace("Input", "")]:
        type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHog = {
      ...formData,
      image: formData.image || "https://via.placeholder.com/150", 
    };
    onAddHog(newHog);
    setFormData({
      name: "",
      specialty: "",
      greased: false,
      weight: "",
      image: "",
      "highest medal achieved": "bronze",
    });
  };

  return (
    <form className="addHogForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nameInput">Name:</label>
        <input
          id="nameInput"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="weightInput">Weight:</label>
        <input
          id="weightInput"
          type="number"
          required
          value={formData.weight}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="specialtyInput">Specialty:</label>
        <input
          id="specialtyInput"
          type="text"
          required
          value={formData.specialty}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="greasedCheckbox">Greased?</label>
        <input
          id="greasedCheckbox"
          type="checkbox"
          checked={formData.greased}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="imageInput">Image URL:</label>
        <input
          id="imageInput"
          type="text"
          value={formData.image}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="medalInput">Highest Medal:</label>
        <select
          id="medalInput"
          value={formData["highest medal achieved"]}
          onChange={(e) =>
            setFormData({
              ...formData,
              "highest medal achieved": e.target.value,
            })
          }
        >
          <option value="bronze">bronze</option>
          <option value="silver">silver</option>
          <option value="gold">gold</option>
          <option value="platinum">platinum</option>
        </select>
      </div>

      <button type="submit">Add Hog</button>
    </form>
  );
}

export default AddHogForm;