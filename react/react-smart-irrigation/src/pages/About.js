import React from "react";

function About() {
    return (
        <div className="page-container">
            <h1>About the System</h1>
            <p>
                The <strong>AI-Based Smart Irrigation Advisory System</strong> has a React js and React Router based 
                frontend application which provides information about the AI- based agricultural system we have built.
            </p>
            <div className="info-box">
                <h3>Technical Website Details</h3>
                <p><strong>Framework:</strong> React JS (Functional Components, JSX, React Router v6)</p>
                <p><strong>Architecture:</strong> Single Page Application (Client-side Routing)</p>
                <p><strong>Theme:</strong> Agricultural Green (`#95d95d`)[cite: 5]</p>
                <p><strong>Goal:</strong> Sustainable water management and precision farming optimization.</p>
            </div>
        </div>
    );
}

export default About;