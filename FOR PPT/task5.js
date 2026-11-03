document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        // Prevent default form submission to execute JS validation
        e.preventDefault();

        // Clear previous error messages and highlighting
        clearErrors();

        let isValid = true;

        // 1. Validate Farmer Name
        const nameInput = document.getElementById("name");
        if (nameInput) {
            if (nameInput.value.trim() === "") {
                showError(nameInput, "nameError", "Farmer Name is required.");
                isValid = false;
            } else if (!/^[a-zA-Z\s]+$/.test(nameInput.value.trim())) {
                showError(nameInput, "nameError", "Name should only contain alphabets and spaces.");
                isValid = false;
            }
        }

        // 2. Validate Mobile Number (10 digits starting with 6-9)
        const mobileInput = document.getElementById("mobile");
        if (mobileInput) {
            const mobileRegex = /^[6-9]\d{9}$/;
            if (mobileInput.value.trim() === "") {
                showError(mobileInput, "mobileError", "Mobile number is required.");
                isValid = false;
            } else if (!mobileRegex.test(mobileInput.value.trim())) {
                showError(mobileInput, "mobileError", "Enter a valid 10-digit Indian mobile number.");
                isValid = false;
            }
        }

        // 3. Validate Email Address
        const emailInput = document.getElementById("email");
        if (emailInput) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === "") {
                showError(emailInput, "emailError", "Email address is required.");
                isValid = false;
            } else if (!emailRegex.test(emailInput.value.trim())) {
                showError(emailInput, "emailError", "Enter a valid email address.");
                isValid = false;
            }
        }

        // 4. Validate Village
        const villageInput = document.getElementById("village");
        if (villageInput) {
            if (villageInput.value.trim() === "") {
                showError(villageInput, "villageError", "Village name is required.");
                isValid = false;
            }
        }

        // 5. Validate Plot ID (Format: AGR-1234)
        const plotInput = document.getElementById("plot");
        if (plotInput) {
            const plotRegex = /^AGR-\d{4}$/;
            if (plotInput.value.trim() === "") {
                showError(plotInput, "plotError", "Plot ID is required.");
                isValid = false;
            } else if (!plotRegex.test(plotInput.value.trim())) {
                showError(plotInput, "plotError", "Plot ID must be in format AGR-1234.");
                isValid = false;
            }
        }

        // 6. Validate Crop Variety
        const cropInput = document.getElementById("crop");
        if (cropInput) {
            if (cropInput.value.trim() === "") {
                showError(cropInput, "cropError", "Crop variety is required.");
                isValid = false;
            }
        }

        // 7. Validate Farm Area (Acres)
        const areaInput = document.getElementById("area");
        if (areaInput) {
            const areaVal = parseFloat(areaInput.value);
            if (areaInput.value.trim() === "") {
                showError(areaInput, "areaError", "Farm area is required.");
                isValid = false;
            } else if (isNaN(areaVal) || areaVal <= 0) {
                showError(areaInput, "areaError", "Farm area must be a positive number.");
                isValid = false;
            }
        }

        // 8. Validate Irrigation Method Selection
        const irrigationInput = document.getElementById("irrigation");
        if (irrigationInput) {
            if (irrigationInput.value === "") {
                showError(irrigationInput, "irrigationError", "Please select an irrigation method.");
                isValid = false;
            }
        }

        // 9. Validate Radio Button Selection (Preferred Language)
        const languageSelected = document.querySelector('input[name="language"]:checked');
        if (!languageSelected) {
            const langError = document.getElementById("languageError");
            if (langError) {
                langError.textContent = "Please select a preferred language.";
            }
            isValid = false;
        }

        // Alert message based on form status
        if (isValid) {
            alert("Registration Submitted Successfully!");
            form.reset(); // Clear form fields upon successful submission
        } else {
            alert("Submission Failed! Please check the errors highlighted in red.");
        }
    });

    // Handle Reset Button to clear red error messages
    form.addEventListener("reset", function () {
        clearErrors();
    });

    // Helper Function to display red errors and highlight input fields
    function showError(inputElement, errorElementId, message) {
        inputElement.classList.add("invalid-field");
        const errorSpan = document.getElementById(errorElementId);
        if (errorSpan) {
            errorSpan.textContent = message;
        }
    }

    // Helper Function to clear previous error messages and red highlights
    function clearErrors() {
        const invalidFields = document.querySelectorAll(".invalid-field");
        invalidFields.forEach(function (field) {
            field.classList.remove("invalid-field");
        });

        const errorSpans = document.querySelectorAll(".error-msg");
        errorSpans.forEach(function (span) {
            span.textContent = "";
        });
    }
});