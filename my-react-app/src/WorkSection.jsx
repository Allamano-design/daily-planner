import React, { useState, useEffect } from "react";

export default function WorkSection() {
  const [focusDropdown, setFocusDropdown] = useState("");
  const [progressDropdown, setProgressDropdown] = useState("");
  const [focusNotes, setFocusNotes] = useState("");
  const [progressNotes, setProgressNotes] = useState("");

  // Load saved data
  useEffect(() => {
    setFocusDropdown(localStorage.getItem("focusDropdown") || "");
    setProgressDropdown(localStorage.getItem("progressDropdown") || "");
    setFocusNotes(localStorage.getItem("focusNotes") || "");
    setProgressNotes(localStorage.getItem("progressNotes") || "");
  }, []);

  // Save work logs
  const handleSave = () => {
    const focusText = (focusDropdown ? focusDropdown + " - " : "") + focusNotes;
    const progressText = (progressDropdown ? progressDropdown + " - " : "") + progressNotes;

    localStorage.setItem("focusDropdown", focusDropdown);
    localStorage.setItem("progressDropdown", progressDropdown);
    localStorage.setItem("focusNotes", focusNotes);
    localStorage.setItem("progressNotes", progressNotes);

    localStorage.setItem("focus", focusText);
    localStorage.setItem("progress", progressText);

    alert("Work & Progress saved.");
  };

  return (
    <div className="work-section" id="work">
    <div className="work-card" >
      <h2>Work & Progress</h2>

      {/* Focus Area */}
      <label>Focus Area</label>
      <select
        value={focusDropdown}
        onChange={(e) => setFocusDropdown(e.target.value)}
      >
        <option value="">Select focus area</option>
        <option>Coding</option>
        <option>Studying</option>
        <option>Reading</option>
        <option>Planning</option>
        <option>Meetings</option>
        <option>Writing</option>
      </select>

      <textarea
        placeholder="Add focus notes..."
        value={focusNotes}
        onChange={(e) => setFocusNotes(e.target.value)}
      ></textarea>

      {/* Progress Status */}
      <label>Progress Status</label>
      <select
        value={progressDropdown}
        onChange={(e) => setProgressDropdown(e.target.value)}
      >
        <option value="">Select progress status</option>
        <option>Completed Task</option>
        <option>Partial Progress</option>
        <option>Stuck</option>
        <option>Need Help</option>
        <option>In Progress</option>
      </select>

      <textarea
        placeholder="Add progress notes..."
        value={progressNotes}
        onChange={(e) => setProgressNotes(e.target.value)}
      ></textarea>

      <button onClick={handleSave} className="work-btn">Save Work Logs</button>
      </div>
    </div>
  );
}
