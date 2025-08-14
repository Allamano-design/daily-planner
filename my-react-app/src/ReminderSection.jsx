import React, { useState, useEffect } from "react";

export default function ReminderSection() {
  // States for calendar
  const [calendarDate, setCalendarDate] = useState("");
  
  // Learning section states
  const [learningType, setLearningType] = useState("");
  const [learningTask, setLearningTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Planning section states
  const [planCategory, setPlanCategory] = useState("");
  const [dailyPlan, setDailyPlan] = useState("");

  // Load saved data on page load
  useEffect(() => {
    setCalendarDate(localStorage.getItem("calendar") || "");
    setLearningType(localStorage.getItem("learning_type") || "");
    setTasks(JSON.parse(localStorage.getItem("learning_tasks")) || []);
    setPlanCategory(localStorage.getItem("plan_category") || "");
    setDailyPlan(localStorage.getItem("daily_plan") || "");
  }, []);

  // Save Calendar date
  const handleCalendarChange = (e) => {
    setCalendarDate(e.target.value);
    localStorage.setItem("calendar", e.target.value);
  };

  // Add a learning task
  const handleAddTask = () => {
    if (learningTask.trim() === "") return;
    const newTask = `${learningType ? learningType + " - " : ""}${learningTask} at ${new Date().toLocaleString()}`;
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("learning_tasks", JSON.stringify(updatedTasks));
    setLearningTask("");
    setLearningType("");
    localStorage.setItem("learning_type", "");
    alert("Task saved!");
  };

  // Save daily plan
  const handleSavePlan = () => {
    const formattedPlan = `${planCategory ? planCategory + " - " : ""}${dailyPlan}`;
    setDailyPlan(formattedPlan);
    localStorage.setItem("daily_plan", formattedPlan);
    localStorage.setItem("plan_category", planCategory);
    alert("Plan saved!");
  };

  return (
    <div className="rem-section" id="reminder">
    <div className="reminder-card">
      <h2>Daily Reminders</h2>

      {/* Calendar */}
      <label>Calendar</label>
      <input
        type="date"
        value={calendarDate}
        onChange={handleCalendarChange}
      />

      {/* Learning Type */}
      <label>Learning Type</label>
      <select
        value={learningType}
        onChange={(e) => {
          setLearningType(e.target.value);
          localStorage.setItem("learning_type", e.target.value);
        }}
      >
        <option value="">Select learning type</option>
        <option>Reading</option>
        <option>Watching Video</option>
        <option>Practicing</option>
        <option>Project Work</option>
        <option>Group Study</option>
        <option>Quiz/Test</option>
      </select>

      {/* Learning Task */}
      <label>Learning Task</label>
      <input
        type="text"
        placeholder="Enter learning task"
        value={learningTask}
        onChange={(e) => setLearningTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>

      {/* Display tasks */}
      {tasks.length > 0 && (
        <div>
          <h4>Saved Tasks</h4>
          <ul>
            {tasks.map((t, idx) => (
              <li key={idx}>{t}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Planning Section */}
      <label>Daily Planning Category</label>
      <select
        value={planCategory}
        onChange={(e) => setPlanCategory(e.target.value)}
      >
        <option value="">Select planning category</option>
        <option>Work</option>
        <option>Health</option>
        <option>Study</option>
        <option>Chores</option>
        <option>Personal</option>
        <option>Social</option>
      </select>

      <label>Daily Planning</label>
      <textarea
        rows="5"
        placeholder="Plan your day..."
        value={dailyPlan}
        onChange={(e) => setDailyPlan(e.target.value)}
      ></textarea>
      <button className="rem-btn" onClick={handleSavePlan}>Save Plan</button>
      </div>
    </div>
  );
}


