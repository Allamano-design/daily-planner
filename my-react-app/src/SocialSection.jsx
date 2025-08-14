import React, { useState, useEffect } from "react";


export default function SocialSection() {
  const [connectionType, setConnectionType] = useState("");
  const [kindnessType, setKindnessType] = useState("");
  const [connectionText, setConnectionText] = useState("");
  const [kindnessText, setKindnessText] = useState("");

  // Load saved data
  useEffect(() => {
    setConnectionType(localStorage.getItem("connectionType") || "");
    setKindnessType(localStorage.getItem("kindnessType") || "");
    setConnectionText(localStorage.getItem("connectionText") || "");
    setKindnessText(localStorage.getItem("kindnessText") || "");
  }, []);

  // Save logs
  const handleSave = () => {
    const connectionLog = (connectionType ? connectionType + " - " : "") + connectionText;
    const kindnessLog = (kindnessType ? kindnessType + " - " : "") + kindnessText;

    localStorage.setItem("connectionType", connectionType);
    localStorage.setItem("kindnessType", kindnessType);
    localStorage.setItem("connectionText", connectionText);
    localStorage.setItem("kindnessText", kindnessText);

    localStorage.setItem("connect", connectionLog);
    localStorage.setItem("kindness", kindnessLog);

    alert("Social & Emotion saved.");
  };

  return (
    <div className="social-section" id="social">
    <div className="social-card" >
      <h2>Social & Emotion</h2>

      {/* Connection */}
      <label>Connection Type</label>
      <select
        value={connectionType}
        onChange={(e) => setConnectionType(e.target.value)}
      >
        <option value="">Select connection type</option>
        <option>Friend</option>
        <option>Family</option>
        <option>Colleague</option>
        <option>Stranger</option>
        <option>Online Chat</option>
      </select>

      <input
        type="text"
        placeholder="Write about the connection..."
        value={connectionText}
        onChange={(e) => setConnectionText(e.target.value)}
      />

      {/* Kindness */}
      <label>Kindness Type</label>
      <select
        value={kindnessType}
        onChange={(e) => setKindnessType(e.target.value)}
      >
        <option value="">Select kindness type</option>
        <option>Gave help</option>
        <option>Encouraged someone</option>
        <option>Shared a meal</option>
        <option>Gave a compliment</option>
        <option>Other</option>
      </select>

      <input
        type="text"
        placeholder="Write about the kind act..."
        value={kindnessText}
        onChange={(e) => setKindnessText(e.target.value)}
      />

      <button onClick={handleSave} className="social-btn">Save Social & Emotion Logs</button>
      </div>
    </div>
  );
}
