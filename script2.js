$(document).ready(function () {


    $("#registrationForm").on("submit", function (e) {
        // Prevent default form submission to validate inputs using jQuery
        e.preventDefault();


        // Clear all previous errors and red highlights
        clearErrors();


        let isValid = true;


        // 1. Validate Farmer Name (Alphabetic & spaces only)
        const nameVal = $.trim($("#name").val());
        if (nameVal === "") {
            showError("#name", "#nameError", "Farmer Name is required.");
            isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(nameVal)) {
            showError("#name", "#nameError", "Name should contain alphabets and spaces only.");
            isValid = false;
        }


        // 2. Validate Mobile Number (10 digits starting with 6-9)
        const mobileVal = $.trim($("#mobile").val());
        const mobileRegex = /^[6-9]\d{9}$/;
        if (mobileVal === "") {
            showError("#mobile", "#mobileError", "Mobile number is required.");
            isValid = false;
        } else if (!mobileRegex.test(mobileVal)) {
            showError("#mobile", "#mobileError", "Enter a valid 10-digit Indian mobile number.");
            isValid = false;
        }


        // 3. Validate Email Address
        const emailVal = $.trim($("#email").val());
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailVal === "") {
            showError("#email", "#emailError", "Email address is required.");
            isValid = false;
        } else if (!emailRegex.test(emailVal)) {
            showError("#email", "#emailError", "Enter a valid email address.");
            isValid = false;
        }


        // 4. Validate Village
        const villageVal = $.trim($("#village").val());
        if (villageVal === "") {
            showError("#village", "#villageError", "Village name is required.");
            isValid = false;
        }


        // 5. Validate Plot ID (Format: AGR-1234)
        const plotVal = $.trim($("#plot").val());
        const plotRegex = /^AGR-\d{4}$/;
        if (plotVal === "") {
            showError("#plot", "#plotError", "Plot ID is required.");
            isValid = false;
        } else if (!plotRegex.test(plotVal)) {
            showError("#plot", "#plotError", "Plot ID must be in format AGR-1234.");
            isValid = false;
        }


        // 6. Validate Crop Stage Selection
        if ($("#crop_stage").val() === "") {
            showError("#crop_stage", "#cropStageError", "Please select a crop stage.");
            isValid = false;
        }


        // 7. Validate Soil Type Selection
        if ($("#soil_type").val() === "") {
            showError("#soil_type", "#soilTypeError", "Please select a soil type.");
            isValid = false;
        }


        // 8. Validate Soil Moisture (0% to 100%)
        const moistureRaw = $.trim($("#soil_moisture").val());
        const moistureVal = parseFloat(moistureRaw);
        if (moistureRaw === "") {
            showError("#soil_moisture", "#moistureError", "Soil moisture percentage is required.");
            isValid = false;
        } else if (isNaN(moistureVal) || moistureVal < 0 || moistureVal > 100) {
            showError("#soil_moisture", "#moistureError", "Moisture percentage must be between 0 and 100.");
            isValid = false;
        }


        // 9. Validate Irrigation Method Selection
        if ($("#irrigation").val() === "") {
            showError("#irrigation", "#irrigationError", "Please select an irrigation method.");
            isValid = false;
        }


        // 10. Validate Registration Date
        if ($("#reg_date").val() === "") {
            showError("#reg_date", "#dateError", "Registration date is required.");
            isValid = false;
        }


        // Display outcome alert
        if (isValid) {
            alert("jQuery Form Validation Successful! Farmer Registration Submitted.");
            this.reset();
            clearErrors();
        } else {
            alert("Form Submission Failed! Please correct the errors highlighted in red.");
        }
    });


    // Reset button handler to clear errors via jQuery
    $("#registrationForm").on("reset", function () {
        clearErrors();
    });


    // Helper Function to display errors and highlight input fields in red
    function showError(inputSelector, errorSpanSelector, message) {
        $(inputSelector).addClass("invalid-field");
        $(errorSpanSelector).text(message);
    }


    // Helper Function to clear previous error messages and red highlights
    function clearErrors() {
        $(".invalid-field").removeClass("invalid-field");
        $(".error-msg").text("");
    }
});
