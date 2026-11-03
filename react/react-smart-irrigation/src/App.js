import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Farms from "./pages/Farms";
import About from "./pages/About";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                {/* Header Banner */}
                <header className="header">
                    <h1>AI-Based Smart Irrigation Advisory System</h1>
                   { /* <h2>Single Page Web Application (SPA)</h2> */ }          </header>

                {/* Client-Side Navigation Bar */}
                <nav className="navbar">
                    <Link to="/" className="nav-link">Home</Link>
                    <span className="divider">|</span>
                    <Link to="/farms" className="nav-link">Registered Farms</Link>
                    <span className="divider">|</span>
                    <Link to="/about" className="nav-link">About Portal</Link>
                </nav>

                {/* Dynamic Route Switching */}
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/farms" element={<Farms />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>

                {/* Footer */}
                <footer>
                    <p>&copy; 2026 AI-Based Smart Irrigation Advisory System</p>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;