import React from "react";

function Farms() {
    // Array of farm records
    const farmRecords = [
        { 
            id: 1, 
            plotId: "AGR-1234", 
            farmerName: "Ramesh Kumar", 
            crop: "Sugarcane", 
            moisture: 28, 
            status: "Irrigation Required Immediately", 
            color: "red" 
        },
        { 
            id: 2, 
            plotId: "AGR-5678", 
            farmerName: "Suresh Patil", 
            crop: "Sugarcane", 
            moisture: 42, 
            status: "Monitor Soil Moisture", 
            color: "darkorange" 
        },
        { 
            id: 3, 
            plotId: "AGR-9012", 
            farmerName: "Anil Deshmukh", 
            crop: "Wheat", 
            moisture: 65, 
            status: "Irrigation Not Required", 
            color: "green" 
        }
    ];

    return (
        <div className="page-container">
            <h1>Registered Farms & Soil Status</h1>
            <p>Below are the current soil moisture readings and advisory status for registered plots:</p>
            
            <div className="card-grid">
                {/* Dynamically generating UI elements using map() and unique key */}
                {farmRecords.map((farm) => (
                    <div key={farm.id} className="farm-card">
                        <h3>Plot: {farm.plotId}</h3>
                        <p><strong>Farmer Name:</strong> {farm.farmerName}</p>
                        <p><strong>Crop Variety:</strong> {farm.crop}</p>
                        <p><strong>Current Soil Moisture:</strong> {farm.moisture}%</p>
                        <p>
                            <strong>Advisory Status:</strong>{" "}
                            <span style={{ color: farm.color, fontWeight: "bold" }}>
                                {farm.status}
                            </span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Farms;