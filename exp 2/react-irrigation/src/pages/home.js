
import PageHeading from "./pageheadding";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <header className="main-header">
                <img
                    src="/logo.png"
                    alt="Smart Irrigation Logo"
                    style={{ height: "100px", width: "250px" }}
                />

                <h1>SMART IRRIGATION ADVISORY SYSTEM</h1>
            </header>

            <nav className="main-nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/farmer-registration">Farmer Registration</Link>
            </nav>

            <main>
                <PageHeading
                    title="SMART IRRIGATION ADVISORY SYSTEM"
                    description="AI-powered Smart Irrigation Advisory System for Sugarcane Farmers"
                />

                <section className="content-card">
                    <h2>WELCOME</h2>
                    <p>
                        Welcome to the Smart Irrigation Advisory System.
                        This system helps sugarcane farmers make informed
                        irrigation decisions using soil moisture, weather
                        information and AI-powered recommendations.
                    </p>
                </section>

                <section className="content-card">
                    <h2>OUR PURPOSE</h2>
                    <p>
                        To improve irrigation efficiency, conserve water
                        and support sustainable sugarcane farming.
                    </p>
                </section>
            </main>

            <footer className="main-footer">
                <p>Smart Irrigation Advisory System</p>
            </footer>
        </>
    );
}

export default Home;
