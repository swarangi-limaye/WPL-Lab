function generateIrrigationRecommendation(){
    let farmerName= "Ramesh Patil";
    let plotID= "P001";
    let cropStage= "Germination";
    let soilMoisture= 24; //percent
    let rainExpected= false;

    let recommendation="";

    if (rainExpected){
        recommendation= "Postpone Irrigation";
    }
    else if (soilMoisture <30){
        recommendation="Irrigate immediately";
    }
    else if (soilMoisture >=30 && soilMoisture <=50){
        recommendation= "Monitor moisturelevel frequently";
    }
    else{
        recommendation= "Irrigation not required";
    }

    //display alert
    alert( "Plot ID: " + plotID + " Recommendation: " + recommendation);

    // Display output using document.write() 
    document.write("<h3>AI Smart Irrigation Advisory — Decision Support</h3>"); 
    document.write("<p><b>Farmer Name:</b> " + farmerName + "</p>"); document.write("<p><b>Plot ID:</b> " + plotID + "</p>"); 
    document.write("<p><b>Crop Stage:</b> " + cropStage + "</p>"); 
    document.write("<p><b>Soil Moisture Level:</b> " + soilMoisture + "%</p>"); 
    document.write("<p><b>Rain Expected:</b> " + (rainExpected ? "Yes" : "No") + "</p>"); 
    document.write("<p><b>Advisory Recommendation:</b> <mark>" + recommendation + "</mark></p>"
    ); 
}
generateIrrigationRecommendation();