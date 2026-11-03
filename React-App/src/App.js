import IrrigationAdvisory from "./IrrigationAdvisory";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <h1>AI-BASED SMART IRRIGATION ADVISORY SYSTEM</h1>
      </header>

      <main className="content">
        <h1>Farmer Irrigation Advisory Dashboard</h1>
        <p className="subtitle">Real-time Soil Moisture & Decision Support System</p>

        {/* Rendering reusable functional component with props */}
        <IrrigationAdvisory
          farmerName="Ramesh Patil"
          plotId="AGR-1001"
          cropType="Sugarcane Co 86032"
          initialMoisture={25}
        />
      </main>

      <footer className="main-footer">
        <p>&copy; 2026 AI-Based Smart Irrigation Advisory System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;