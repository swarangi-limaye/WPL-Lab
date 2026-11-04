
import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function FarmerRegistration() {
    const today = new Date().toISOString().split("T")[0];

    const [formData, setFormData] = useState({
        farmerName: "",
        mobile: "",
        email: "",
        village: "",
        plotId: "",
        cropStage: "",
        soilType: "",
        irrigationMethod: "",
        soilMoisture: "",
        registrationDate: today,
        irrigationDate: ""
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const [requiredMoisture, setRequiredMoisture] = useState("");
    const [rainfall, setRainfall] = useState("");

    const [task1Result, setTask1Result] = useState(null);
    const [task2Result, setTask2Result] = useState(null);
    const [task3Result, setTask3Result] = useState(false);
    const [task4Result, setTask4Result] = useState(null);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: name === "plotId" ? value.toUpperCase() : value
        });

        setErrors({
            ...errors,
            [name]: ""
        });

        setSuccess(false);
    }

    function validateForm() {
        let newErrors = {};

        if (!formData.farmerName.trim()) {
            newErrors.farmerName = "Farmer name is required.";
        } else if (!/^[A-Za-z ]+$/.test(formData.farmerName.trim())) {
            newErrors.farmerName =
                "Name should contain only letters and spaces.";
        }

        if (!/^[0-9]{10}$/.test(formData.mobile)) {
            newErrors.mobile =
                "Mobile number must contain exactly 10 digits.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            newErrors.email = "Enter a valid email address.";
        }

        if (!formData.village.trim()) {
            newErrors.village = "Village is required.";
        }

        if (!/^AGR-[0-9]{4}$/.test(formData.plotId)) {
            newErrors.plotId =
                "Plot ID must be in the format AGR-1234.";
        }

        if (!formData.cropStage) {
            newErrors.cropStage = "Select crop stage.";
        }

        if (!formData.soilType) {
            newErrors.soilType = "Select soil type.";
        }

        if (!formData.irrigationMethod) {
            newErrors.irrigationMethod = "Select irrigation method.";
        }

        if (
            formData.soilMoisture === "" ||
            Number(formData.soilMoisture) < 0 ||
            Number(formData.soilMoisture) > 100
        ) {
            newErrors.soilMoisture =
                "Soil moisture must be between 0 and 100.";
        }

        if (!formData.registrationDate) {
            newErrors.registrationDate =
                "Registration date is required.";
        } else if (formData.registrationDate > today) {
            newErrors.registrationDate =
                "Date cannot be in the future.";
        }

        if (!formData.irrigationDate) {
            newErrors.irrigationDate =
                "Irrigation date is required.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (validateForm()) {
            setSuccess(true);
        }
    }

    function handleReset() {
        setFormData({
            farmerName: "",
            mobile: "",
            email: "",
            village: "",
            plotId: "",
            cropStage: "",
            soilType: "",
            irrigationMethod: "",
            soilMoisture: "",
            registrationDate: today,
            irrigationDate: ""
        });

        setErrors({});
        setSuccess(false);
    }

    function calculateWater() {
        let current = Number(formData.soilMoisture);
        let required = Number(requiredMoisture);
        let deficit = required - current;

        let status = deficit > 0
            ? "Irrigation Required"
            : "Irrigation Not Required";

        setTask1Result({
            farmer: formData.farmerName,
            plot: formData.plotId,
            current,
            required,
            deficit,
            status
        });
    }

    function recommendIrrigation() {
        let moisture = Number(formData.soilMoisture);
        let result;

        if (rainfall === "yes") {
            result = "Postpone Irrigation";
        } else if (moisture < 30) {
            result = "Irrigation Required Immediately";
        } else if (moisture <= 50) {
            result = "Monitor Soil Moisture";
        } else {
            result = "Irrigation Not Required";
        }

        setTask2Result({
            stage: formData.cropStage,
            recommendation: result
        });
    }

    const farm = {
        farmerName: "Ramesh",
        plotId: "AGR-1234",
        cropStage: "Vegetative",
        soilMoisture: 42,
        area: 2.5,
        pumpStatus: "ON"
    };

    function analyzeReadings() {
        let readings = [42, 38, 35, 29, 31, 45, 52];

        let minimum = Math.min(...readings);
        let maximum = Math.max(...readings);
        let total = 0;
        let belowCritical = 0;

        for (let reading of readings) {
            total += reading;

            if (reading < 30) {
                belowCritical++;
            }
        }

        let average = total / readings.length;

        setTask4Result({
            readings,
            minimum,
            maximum,
            average: average.toFixed(2),
            belowCritical
        });
    }

    return (
        <>
            <header className="main-header">
                <Link to="/">
                    <img
                        src="/logo.png"
                        alt="Smart Irrigation Advisory System Logo"
                        style={{ height: "100px", width: "250px" }}
                    />
                </Link>

                <h1>FARMER REGISTRATION</h1>
                <p>Smart Irrigation Advisory System</p>
            </header>

            <nav className="main-nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/farmer-registration">Farmer Registration</Link>
            </nav>

            <main>
                <div className="registration-container">
                    <h2>Farmer Registration Form</h2>

                    <form
                        id="registrationForm"
                        onSubmit={handleSubmit}
                        onReset={handleReset}
                    >
                        <fieldset>
                            <legend>Farmer Information</legend>

                            <div className="form-row">
                                <label htmlFor="farmerName">Farmer Name</label>
                                <input
                                    id="farmerName"
                                    name="farmerName"
                                    value={formData.farmerName}
                                    onChange={handleChange}
                                    className={errors.farmerName ? "invalid" : ""}
                                />
                                <span className="error">{errors.farmerName}</span>
                            </div>

                            <div className="form-row">
                                <label htmlFor="mobile">Mobile Number</label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    maxLength="10"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className={errors.mobile ? "invalid" : ""}
                                />
                                <span className="error">{errors.mobile}</span>
                            </div>

                            <div className="form-row">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? "invalid" : ""}
                                />
                                <span className="error">{errors.email}</span>
                            </div>

                            <div className="form-row">
                                <label htmlFor="village">Village</label>
                                <input
                                    id="village"
                                    name="village"
                                    value={formData.village}
                                    onChange={handleChange}
                                    className={errors.village ? "invalid" : ""}
                                />
                                <span className="error">{errors.village}</span>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Farm Information</legend>

                            <div className="form-row">
                                <label htmlFor="plotId">Plot ID</label>
                                <input
                                    id="plotId"
                                    name="plotId"
                                    placeholder="AGR-1234"
                                    value={formData.plotId}
                                    onChange={handleChange}
                                    className={errors.plotId ? "invalid" : ""}
                                />
                                <span className="error">{errors.plotId}</span>
                            </div>

                            <div className="form-row">
                                <label htmlFor="cropStage">Crop Stage</label>
                                <select
                                    id="cropStage"
                                    name="cropStage"
                                    value={formData.cropStage}
                                    onChange={handleChange}
                                    className={errors.cropStage ? "invalid" : ""}
                                >
                                    <option value="">Select Crop Stage</option>
                                    <option>Germination</option>
                                    <option>Tillering</option>
                                    <option>Vegetative</option>
                                    <option>Grand Growth</option>
                                    <option>Maturity</option>
                                </select>
                                <span className="error">{errors.cropStage}</span>
                            </div>

                            <div className="form-row">
                                <label htmlFor="soilType">Soil Type</label>
                                <select
                                    id="soilType"
                                    name="soilType"
                                    value={formData.soilType}
                                    onChange={handleChange}
                                    className={errors.soilType ? "invalid" : ""}
                                >
                                    <option value="">Select Soil Type</option>
                                    <option>Sandy</option>
                                    <option>Loamy</option>
                                    <option>Clay</option>
                                    <option>Black Soil</option>
                                    <option>Red Soil</option>
                                </select>
                                <span className="error">{errors.soilType}</span>
                            </div>

                            <div className="form-row">
                                <label>Irrigation Method</label>

                                <div className="radio-group">
                                    {[
                                        "Drip Irrigation",
                                        "Surface Irrigation",
                                        "Sprinkler Irrigation",
                                        "Subsurface Irrigation"
                                    ].map((method) => (
                                        <label key={method} className="radio-option">
                                            <input
                                                type="radio"
                                                name="irrigationMethod"
                                                value={method}
                                                checked={
                                                    formData.irrigationMethod === method
                                                }
                                                onChange={handleChange}
                                            />
                                            {method}
                                        </label>
                                    ))}
                                </div>

                                <span className="error">
                                    {errors.irrigationMethod}
                                </span>
                            </div>

                            <div className="form-row">
                                <label htmlFor="soilMoisture">
                                    Soil Moisture (%)
                                </label>
                                <input
                                    type="number"
                                    id="soilMoisture"
                                    name="soilMoisture"
                                    min="0"
                                    max="100"
                                    value={formData.soilMoisture}
                                    onChange={handleChange}
                                    className={errors.soilMoisture ? "invalid" : ""}
                                />
                                <span className="error">{errors.soilMoisture}</span>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Registration Details</legend>

                            <div className="form-row">
                                <label htmlFor="registrationDate">
                                    Registration Date
                                </label>
                                <input
                                    type="date"
                                    id="registrationDate"
                                    name="registrationDate"
                                    max={today}
                                    value={formData.registrationDate}
                                    onChange={handleChange}
                                    className={
                                        errors.registrationDate ? "invalid" : ""
                                    }
                                />
                                <span className="error">
                                    {errors.registrationDate}
                                </span>
                            </div>

                            <div className="form-row">
                                <label htmlFor="irrigationDate">Irrigation Date</label>
                                <input
                                    type="date"
                                    id="irrigationDate"
                                    name="irrigationDate"
                                    value={formData.irrigationDate}
                                    onChange={handleChange}
                                    className={errors.irrigationDate ? "invalid" : ""}
                                />
                                <span className="error">{errors.irrigationDate}</span>
                            </div>

                            <div className="form-row">
                                <label htmlFor="farmPhoto">Farm Photo</label>
                                <input
                                    type="file"
                                    id="farmPhoto"
                                    name="farmPhoto"
                                    accept="image/*"
                                />
                            </div>
                        </fieldset>

                        <div className="button-area">
                            <input
                                type="submit"
                                value="Submit"
                                className="submit-button"
                            />
                            <input
                                type="reset"
                                value="Reset"
                                className="reset-button"
                            />
                        </div>

                        {success && (
                            <div className="success-message">
                                Registration submitted successfully.
                            </div>
                        )}
                    </form>
                </div>

                <div className="task-box">
                    <h2>JavaScript Tasks</h2>

            <div className="task">
                <h3>Task 1: Soil Moisture and Water Requirement</h3>

                <label htmlFor="requiredMoisture">
                    Required Soil Moisture (%)
                </label>
                <input
                    type="number"
                    id="requiredMoisture"
                    min="0"
                    max="100"
                    value={requiredMoisture}
                    onChange={(e) => setRequiredMoisture(e.target.value)}
                />

                <button
                    type="button"
                    className="task-button"
                    onClick={calculateWater}
                >
                    Calculate
                </button>

                {task1Result && (
                    <div className="result">
                        Farmer: {task1Result.farmer}<br />
                        Plot ID: {task1Result.plot}<br />
                        Current Moisture: {task1Result.current}%<br />
                        Required Moisture: {task1Result.required}%<br />
                        Moisture Deficit: {task1Result.deficit}%<br />
                        Status: {task1Result.status}
                    </div>
                )}
            </div>

            <div className="task">
                <h3>Task 2: Irrigation Recommendation</h3>

                <label htmlFor="rainfall">Rainfall Forecast</label>
                <select
                    id="rainfall"
                    value={rainfall}
                    onChange={(e) => setRainfall(e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="yes">Rain Expected</option>
                    <option value="no">No Rain Expected</option>
                </select>

                <button
                    type="button"
                    className="task-button"
                    onClick={recommendIrrigation}
                >
                    Recommend
                </button>

                {task2Result && (
                    <div className="result">
                        Crop Stage: {task2Result.stage}<br />
                        Recommendation: {task2Result.recommendation}
                    </div>
                )}
            </div>

            <div className="task">
                <h3>Task 3: Sugarcane Farm Object</h3>

                <button
                    type="button"
                    className="task-button"
                    onClick={() => setTask3Result(true)}
                >
                    Display Farm
                </button>

                {task3Result && (
                    <div className="result">
                        Farmer Name: {farm.farmerName}<br />
                        Plot ID: {farm.plotId}<br />
                        Crop Stage: {farm.cropStage}<br />
                        Soil Moisture: {farm.soilMoisture}%<br />
                        Area: {farm.area} acres<br />
                        Pump Status: {farm.pumpStatus}
                    </div>
                )}
            </div>

            <div className="task">
                <h3>Task 4: Sensor Readings</h3>

                <button
                    type="button"
                    className="task-button"
                    onClick={analyzeReadings}
                >
                    Analyze
                </button>

                {task4Result && (
                    <div className="result">
                        Readings: {task4Result.readings.join(", ")}<br />
                        Minimum: {task4Result.minimum}%<br />
                        Maximum: {task4Result.maximum}%<br />
                        Average: {task4Result.average}%<br />
                        Below Critical Value: {task4Result.belowCritical}
                    </div>
                )}
            </div>
        </div>
    </main>

    <footer className="main-footer">
        <p>© 2026 Smart Irrigation Advisory System</p>
    </footer>
</>
);
}

export default FarmerRegistration;
