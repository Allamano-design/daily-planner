import React, { useState, useEffect } from "react";


export default function HealthSection() {
  const [exercise, setExercise] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const [hydration, setHydration] = useState("");

  // Load saved data
  useEffect(() => {
    setExercise(localStorage.getItem("exercise") || "");
    setBreakfast(localStorage.getItem("breakfast") || "");
    setLunch(localStorage.getItem("lunch") || "");
    setDinner(localStorage.getItem("dinner") || "");
    setHydration(localStorage.getItem("hydration") || "");
  }, []);

  // Save health logs
  const handleSave = () => {
    localStorage.setItem("exercise", exercise);
    localStorage.setItem("breakfast", breakfast);
    localStorage.setItem("lunch", lunch);
    localStorage.setItem("dinner", dinner);
    localStorage.setItem("hydration", hydration);
    alert("Body & Health saved.");
  };

  return (
    <div className="healh-section" id="health">
    <div className="health-card" >
      <h2>Body & Health</h2>

      {/* Exercise */}
      <label>Exercise</label>
      <textarea
        placeholder="Log today's exercise..."
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
      ></textarea>

      {/* Meals */}
      <label>Meals</label>

      <label>Breakfast</label>
      <select value={breakfast} onChange={(e) => setBreakfast(e.target.value)}>
        <option value="">Select Breakfast</option>
        <option>Porridge</option>
        <option>Bread & Eggs</option>
        <option>Cereal</option>
        <option>Fruits</option>
      </select>

      <label>Lunch</label>
      <select value={lunch} onChange={(e) => setLunch(e.target.value)}>
        <option value="">Select Lunch</option>
        <option>Rice & Beans</option>
        <option>Ugali & Sukuma</option>
        <option>Pasta</option>
        <option>Chapati & Ndengu</option>
      </select>

      <label>Dinner</label>
      <select value={dinner} onChange={(e) => setDinner(e.target.value)}>
        <option value="">Select Dinner</option>
        <option>Githeri</option>
        <option>Sweet Potatoes</option>
        <option>Pilau</option>
        <option>Yogurt & Fruits</option>
      </select>

      {/* Hydration */}
      <label>Hydration</label>
      <input
        type="text"
        placeholder="How much water did you drink today?"
        value={hydration}
        onChange={(e) => setHydration(e.target.value)}
      />

      <button onClick={handleSave} className="body-btn">Save Health Logs</button>
      </div>
    </div>
  );
}
