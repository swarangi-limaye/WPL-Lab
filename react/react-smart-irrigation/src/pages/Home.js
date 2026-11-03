import React from "react";

function Home() {
    return (
        <div className="page-container">
            <h1>Welcome to Smart Irrigation Advisory System</h1>
            <p className="intro-text">
                An AI-powered portal designed to monitor soil moisture levels, calculate water deficits, 
                and provide real-time irrigation recommendations for optimal crop yield.
            </p>
            <div className="info-box">
                <h3>Quick System Highlights</h3>
                <ul>
                    <li>Real-time hourly sensor data monitoring</li>
                    <li>Automated moisture deficit analysis</li>
                    <li>Rainfall forecast integration</li>
                    <li>Custom sugarcane & field crop advisory</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;