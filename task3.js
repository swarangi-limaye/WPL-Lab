// 1. Define the Sugarcane Farm Object 
let sugarcaneFarm = { 
 
    farmerName: "Ramesh Patil", 
    plotID: "AGR-1234", 
    cropStage: "Vegetative Stage", 
    soilMoisture: 35.5, // Percentage (%) 
    area: 4.5,          // Acres 
    pumpStatus: "OFF",  //  

    // 2. Required Method to Display Farm Information 
    displayFarmInfo: function() { 
        // Output alert() 
        alert( 
            "[Sugarcane Farm Object Details]\n" + 
            "Farmer Name: " + this.farmerName + "\n" + 
            "Plot ID: " + this.plotID + "\n" + 
            "Crop Stage: " + this.cropStage + "\n" + 
            "Soil Moisture: " + this.soilMoisture + "%\n" + 
            "Farm Area: " + this.area + " Acres\n" + 
            "Pump Status: " + this.pumpStatus 
        ); 

        // Output document.write() 
        document.write("<h3>Sugarcane Farm Information (Object & Method)</h3>"); 
        document.write("<p><b>Farmer Name:</b> " + this.farmerName + "</p>"); 
        document.write("<p><b>Plot ID:</b> " + this.plotID + "</p>"); 
        document.write("<p><b>Crop Stage:</b> " + this.cropStage + "</p>"); 
        document.write("<p><b>Soil Moisture:</b> " + this.soilMoisture + "%</p>"); 
        document.write("<p><b>Farm Area:</b> " + this.area + " Acres</p>"); 
        document.write("<p><b>Pump Status:</b> " + this.pumpStatus + "</p>"); 
    } 
};

sugarcaneFarm.displayFarmInfo();
