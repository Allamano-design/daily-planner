import React, { useState, useEffect } from "react";


export default function SalarySection() {
  const [depositType, setDepositType] = useState("");
  const [withdrawalType, setWithdrawalType] = useState("");
  const [savingsGoal, setSavingsGoal] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [savingsAmount, setSavingsAmount] = useState("");
  const [spending, setSpending] = useState("");

  // Load saved data
  useEffect(() => {
    setDepositType(localStorage.getItem("depositType") || "");
    setWithdrawalType(localStorage.getItem("withdrawalType") || "");
    setSavingsGoal(localStorage.getItem("savingsGoal") || "");
    setDepositAmount(localStorage.getItem("depositAmount") || "");
    setWithdrawalAmount(localStorage.getItem("withdrawalAmount") || "");
    setSavingsAmount(localStorage.getItem("savingsAmount") || "");
    setSpending(localStorage.getItem("spending") || "");
  }, []);

  // Save salary info
  const handleSave = () => {
    const depositLog = (depositType ? depositType + " - " : "") + depositAmount;
    const withdrawalLog = (withdrawalType ? withdrawalType + " - " : "") + withdrawalAmount;
    const savingsLog = (savingsGoal ? savingsGoal + " - " : "") + savingsAmount;

    localStorage.setItem("depositType", depositType);
    localStorage.setItem("withdrawalType", withdrawalType);
    localStorage.setItem("savingsGoal", savingsGoal);
    localStorage.setItem("depositAmount", depositAmount);
    localStorage.setItem("withdrawalAmount", withdrawalAmount);
    localStorage.setItem("savingsAmount", savingsAmount);
    localStorage.setItem("spending", spending);

    localStorage.setItem("deposit", depositLog);
    localStorage.setItem("withdrawal", withdrawalLog);
    localStorage.setItem("savings", savingsLog);

    alert("Salary data saved.");
  };

  return (
    <div className="salary-section" id="salary">
    <div className="salary-card" >
      <h2>Salary</h2>

      {/* Deposit */}
      <label>Deposit Source</label>
      <select value={depositType} onChange={(e) => setDepositType(e.target.value)}>
        <option value="">Select deposit source</option>
        <option>Salary</option>
        <option>Bonus</option>
        <option>Mpesa</option>
        <option>Gift</option>
        <option>Other</option>
      </select>
      <input
        type="text"
        placeholder="Enter deposit amount"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
      />

      {/* Withdrawal */}
      <label>Withdrawal Type</label>
      <select value={withdrawalType} onChange={(e) => setWithdrawalType(e.target.value)}>
        <option value="">Select withdrawal type</option>
        <option>Rent</option>
        <option>Food</option>
        <option>Bills</option>
        <option>Loan Repayment</option>
        <option>Other</option>
      </select>
      <input
        type="text"
        placeholder="Enter withdrawal amount"
        value={withdrawalAmount}
        onChange={(e) => setWithdrawalAmount(e.target.value)}
      />

      {/* Savings */}
      <label>Savings Goal</label>
      <select value={savingsGoal} onChange={(e) => setSavingsGoal(e.target.value)}>
        <option value="">Select savings goal</option>
        <option>Emergency Fund</option>
        <option>Investment</option>
        <option>Vacation</option>
        <option>Education</option>
        <option>Other</option>
      </select>
      <input
        type="text"
        placeholder="Enter savings amount"
        value={savingsAmount}
        onChange={(e) => setSavingsAmount(e.target.value)}
      />

      {/* Spending */}
      <label>Spending</label>
      <textarea
        placeholder="Track your spending..."
        value={spending}
        onChange={(e) => setSpending(e.target.value)}
      ></textarea>

      <button onClick={handleSave} className="salary-btn">Save Salary Info</button>
      </div>
    </div>
  );
}
