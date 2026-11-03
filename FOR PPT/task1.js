function calculateMoistureDeficit() {
     let farmerName = "Ramesh Patil"; 
     let plotID = "P001"; 
     let currentMoisture = 24; // percentage 
     let requiredMoisture = 55; // percentage 
     let moistureDeficit = requiredMoisture - currentMoisture; 
     
     let statusMessage = ""; 
     if (moistureDeficit> 0) { 
        statusMessage = "Irrigation required"; 
    } 
    else { 
        statusMessage = "Moisture adequate"; 
    } 
    // Display alert box 
    alert("Alert for plot " + plotID + ": Moisture is deficit by " + moistureDeficit + "%"); 
    // Display output on the webpage using document.write() 
    
    document.write("<h3>Smart Irrigation Advisory — Moisture Deficit Report</h3>"); 
    document.write("<p><b>Farmer Name:</b> " + farmerName + "</p>"); 
    document.write("<p><b>Plot ID:</b> " + plotID + "</p>"); 
    document.write("<p><b>Current Soil Moisture:</b> " + currentMoisture + "%</p>"); 
    document.write("<p><b>Required Soil Moisture:</b> " + requiredMoisture + "%</p>"); 
    document.write("<p><b>Soil Moisture Deficit:</b> " + moistureDeficit.toFixed(1) + "%</p>"); 
    document.write("<p><b>Status:</b> " + statusMessage + "</p>"); 
}
calculateMoistureDeficit();