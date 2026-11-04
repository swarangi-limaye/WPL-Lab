
import PageHeading from "./pageheadding";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <header className="main-header">
                <img
                    src="/logo.png"
                    alt="Smart Irrigation Logo"
                    style={{ height: "100px", width: "250px" }}
                />

                <h1>ABOUT THE SYSTEM</h1>
            </header>

            <nav className="main-nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/farmer-registration">Farmer Registration</Link>
            </nav>

            <main>
                <PageHeading
                    title="ABOUT THE SYSTEM"
                    description="Smart Irrigation Advisory System"
                />

                <section className="content-card">
                    <h2>OBJECTIVES</h2>
                    <ul>
                        <li>Develop an AI-enabled irrigation system.</li>
                        <li>Monitor soil moisture, weather and crop status.</li>
                        <li>Provide real-time irrigation and fertigation recommendations.</li>
                        <li>Provide farmers with a web and mobile platform.</li>
                        <li>Improve water efficiency and sustainability.</li>
                    </ul>
                </section>

                <section className="content-card">
                    <h2>SYSTEM FEATURES</h2>
                    <ul>
                        <li>IoT-based data acquisition.</li>
                        <li>AI-enabled irrigation advisory.</li>
                        <li>Farmer dashboard.</li>
                        <li>Integrated data repository.</li>
                        <li>Real-time recommendations.</li>
                        <li>Forecasting and alerts.</li>
                        <li>Multilingual LLM module.</li>
                    </ul>
                </section>

                <section className="content-card">
                    <h2>BENEFITS</h2>
                    <ul>
                        <li>Prediction of next irrigation date.</li>
                        <li>Prediction of irrigation duration.</li>
                        <li>Water stress probability.</li>
                        <li>Rainfall-adjusted recommendations.</li>
                        <li>Yield loss estimation due to delayed irrigation.</li>
                        <li>Pump scheduling optimization.</li>
                        <li>Disease and water stress forecasting.</li>
                        <li>Yield prediction.</li>
                        <li>Farmer-friendly advisory.</li>
                    </ul>
                </section>
            </main>

            <footer className="main-footer">
                <p>Smart Irrigation Advisory System</p>
            </footer>
        </>
    );
}

export default About;
