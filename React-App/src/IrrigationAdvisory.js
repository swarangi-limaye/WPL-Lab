import { useState } from "react";

function IrrigationAdvisory({ farmerName, plotId, cropType, initialMoisture }) {
    // Manage changing soil moisture level using useState
    const [moisture, setMoisture] = useState(initialMoisture);

    // Determine advisory status based on moisture level
    const getAdvisoryStatus = () => {
        if (moisture < 30) {
            return { text: "Critical: Immediate Irrigation Required!", color: "#8b0000" };
        } else if (moisture <= 60) {
            return { text: "Optimal: Soil Moisture Adequate", color: "#2D5A27" };
        } else {
            return { text: "High: No Irrigation Needed", color: "#006400" };
        }
    };

    const status = getAdvisoryStatus();

    return (
        <div className="card">
            <h2>Irrigation Advisory Details</h2>
            <p><strong>Farmer Name:</strong> {farmerName}</p>
            <p><strong>Plot ID:</strong> {plotId}</p>
            <p><strong>Crop Variety:</strong> {cropType}</p>
            <p><strong>Current Soil Moisture:</strong> {moisture}%</p>

            <p style={{ color: status.color, fontWeight: "bold", marginTop: "10px" }}>
                Status: {status.text}
            </p>

            <div style={{ marginTop: "15px", display: "flex", gap: "10px", justifyContent: "center" }}>
                <button onClick={() => setMoisture(moisture + 5)}>
                    Increase Moisture (+5%)
                </button>
                <button onClick={() => setMoisture(Math.max(0, moisture - 5))}>
                    Decrease Moisture (-5%)
                </button>
            </div>
        </div>
    );
}

export default IrrigationAdvisory;