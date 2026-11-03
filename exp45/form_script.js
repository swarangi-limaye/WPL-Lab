document.addEventListener('DOMContentLoaded', () => {
    const farmerForm = document.getElementById('farmerForm');

    // DOM Elements
    const nameInput = document.getElementById('name');
    const mobileInput = document.getElementById('mobile');
    const emailInput = document.getElementById('email');
    const moistureInput = document.getElementById('soil_moisture');
    const photoInput = document.getElementById('farm_photo');

    // Set default date to today
    const regDateInput = document.getElementById('reg_date');
    if (regDateInput) {
        regDateInput.value = new Date().toISOString().split('T')[0];
    }

    // Form submission validation & handling
    farmerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // 1. Mobile Number Validation (10 Digits)
        const mobileRegex = /^[6-9]\d{9}$/;
        if (!mobileRegex.test(mobileInput.value)) {
            alert('Please enter a valid 10-digit mobile number.');
            mobileInput.focus();
            return;
        }

        // 2. Soil Moisture Validation (0-100%)
        const moistureVal = parseFloat(moistureInput.value);
        if (isNaN(moistureVal) || moistureVal < 0 || moistureVal > 100) {
            alert('Soil Moisture percentage must be between 0 and 100.');
            moistureInput.focus();
            return;
        }

        // 3. File Upload Check
        if (photoInput.files.length === 0) {
            alert('Please upload a farm photo.');
            photoInput.focus();
            return;
        }

        // Collect Form Data Object
        const formData = new FormData(farmerForm);
        const registeredDetails = {};

        formData.forEach((value, key) => {
            if (key === 'farm_photo') {
                registeredDetails[key] = value.name; // Get file name
            } else {
                registeredDetails[key] = value;
            }
        });

        console.log('Farmer Registration Data Submitted Successfully:', registeredDetails);
        alert(`Registration successful for ${nameInput.value}! Data logged to console.`);
        
        // Optional: Reset form after successful submission
        // farmerForm.reset();
    });

    // Reset Event Handling
    farmerForm.addEventListener('reset', () => {
        console.log('Form cleared.');
    });
});