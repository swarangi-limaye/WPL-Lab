import React, { useState } from "react";

function FarmAdvisor({ farmerName, plotId, cropStage, requiredMoisture, initialMoisture }) {
    // State management for changing UI data
    const [moisture, setMoisture] = useState(initialMoisture);
    const [pumpStatus, setPumpStatus] = useState("OFF");

    // Calculate moisture deficit
    const deficit = (requiredMoisture - moisture).toFixed(1);

    // Dynamic decision rules based on current moisture state
    const getIrrigationStatus = () => {
        if (moisture < 30) {
            return { text: "Irrigation Required Immediately", color: "red" };
        } else if (moisture <= 50) {
            return { text: "Monitor Soil Moisture", color: "darkorange" };
        } else {
            return { text: "Irrigation Not Required", color: "green" };
        }
    };

    const statusInfo = getIrrigationStatus();

    // Event handlers
    const handleIncreaseMoisture = () => {
        if (moisture < 100) setMoisture((prev) => Math.min(100, prev + 5));
    };

    const handleTogglePump = () => {
        setPumpStatus((prev) => (prev === "OFF" ? "ON" : "OFF"));
    };

    return (
        <div className="card">
            <h2>Farm Advisory Card</h2>
            <p><strong>Farmer Name:</strong> {farmerName}</p>
            <p><strong>Plot ID:</strong> {plotId}</p>
            <p><strong>Crop Stage:</strong> {cropStage}</p>
            <p><strong>Current Soil Moisture:</strong> {moisture.toFixed(1)}%</p>
            <p><strong>Required Soil Moisture:</strong> {requiredMoisture}%</p>
            <p><strong>Moisture Deficit:</strong> {deficit}%</p>
            
            <p>
                <strong>Status:</strong>{" "}
                <span style={{ color: statusInfo.color, fontWeight: "bold" }}>
                    {statusInfo.text}
                </span>
            </p>

            <p><strong>Pump Status:</strong> <span className={`pump-${pumpStatus.toLowerCase()}`}>{pumpStatus}</span></p>

            <div className="button-group">
                <button onClick={handleIncreaseMoisture}>Simulate Water (+5%)</button>
                <button onClick={handleTogglePump} className="toggle-btn">
                    Toggle Pump ({pumpStatus === "OFF" ? "Turn ON" : "Turn OFF"})
                </button>
            </div>
        </div>
    );
}

export default FarmAdvisor;