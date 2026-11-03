function analyzeSensorReadings() {
    // 1. Array of hourly soil moisture readings (%)
    let sensorReadings =[28, 22, 19, 24, 30, 35, 18, 26, 31, 27, 20, 23]; 
    let criticalThreshold = 25; // Critical soil moisture level (%)

    // Minimum Moisture
    let minMoisture = Math.min(...sensorReadings);

    // Maximum Moisture
    let maxMoisture = Math.max(...sensorReadings);

    // 4. Calculate Average Moisture
    let totalMoisture = 0;
    for (let i = 0; i < sensorReadings.length; i++) {
        totalMoisture += sensorReadings[i];
    }
    let averageMoisture = totalMoisture / sensorReadings.length;

    // 5. Count readings below the critical threshold
    let lowMoistureCount = 0;
    for (let i = 0; i < sensorReadings.length; i++) {
        if (sensorReadings[i] < criticalThreshold) {
            lowMoistureCount++;
        }
    }

    // 6. Display 
    alert(
        "[Sensor Array Analysis]\n" +
        "Readings Count: " + sensorReadings.length + " hours\n" +
        "Min Moisture: " + minMoisture + "%\n" +
        "Max Moisture: " + maxMoisture + "%\n" +
        "Average Moisture: " + averageMoisture.toFixed(1) + "%\n" +
        "Critical Warnings (<" + criticalThreshold + "%): " + lowMoistureCount + " times"
    );

    // 7. Render output on webpage using document.write()
    document.write("<h3>Soil Moisture Sensor Array Analysis</h3>");
    document.write("<p><b>All Sensor Readings (%):</b> " + sensorReadings.join(", ") + "</p>");
    document.write("<p><b>Minimum Moisture Level:</b> " + minMoisture + "%</p>");
    document.write("<p><b>Maximum Moisture Level:</b> " + maxMoisture + "%</p>");
    document.write("<p><b>Average Soil Moisture:</b> " + averageMoisture.toFixed(1) + "%</p>");
    document.write("<p><b>Readings Below Critical Value (<" + criticalThreshold + "%):</b> <span>" + lowMoistureCount + " alerts</span></p>");
}


analyzeSensorReadings();
