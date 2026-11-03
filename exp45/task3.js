document.addEventListener('DOMContentLoaded', () => {
    const farmerForm = document.getElementById('farmerForm');

    // Input Elements
    const nameInput = document.getElementById('name');
    const villageInput = document.getElementById('village');
    const plotInput = document.getElementById('plot');
    const mobileInput = document.getElementById('mobile');
    const emailInput = document.getElementById('email');

    // Error Message Elements
    const nameError = document.getElementById('nameError');
    const villageError = document.getElementById('villageError');
    const plotError = document.getElementById('plotError');
    const mobileError = document.getElementById('mobileError');
    const emailError = document.getElementById('emailError');

    // Task 2 Validations
    function validateName() {
        if (!nameInput) return true;
        const nameValue = nameInput.value.trim();
        const alphaSpaceRegex = /^[A-Za-z\s]+$/;

        if (nameValue === '') {
            nameError.textContent = 'Farmer Name is required.';
            return false;
        } else if (!alphaSpaceRegex.test(nameValue)) {
            nameError.textContent = 'Farmer Name must contain alphabetic characters and spaces only.';
            return false;
        } else {
            nameError.textContent = '';
            return true;
        }
    }

    function validateVillage() {
        if (!villageInput) return true;
        const villageValue = villageInput.value.trim();
        if (villageValue === '') {
            villageError.textContent = 'Village is required.';
            return false;
        } else {
            villageError.textContent = '';
            return true;
        }
    }

    function validatePlot() {
        if (!plotInput) return true;
        const plotValue = plotInput.value.trim();
        if (plotValue === '') {
            plotError.textContent = 'Plot ID is required.';
            return false;
        } else {
            plotError.textContent = '';
            return true;
        }
    }

    // Task 3: Mobile Number Validation (10 Digits starting with 6-9)
    function validateMobile() {
        const mobileValue = mobileInput.value.trim();
        const mobileRegex = /^[6-9]\d{9}$/;

        if (mobileValue === '') {
            mobileError.textContent = 'Mobile number is required.';
            return false;
        } else if (!mobileRegex.test(mobileValue)) {
            mobileError.textContent = 'Enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.';
            return false;
        } else {
            mobileError.textContent = '';
            return true;
        }
    }

    // Task 3: Email Validation
    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (emailValue === '') {
            emailError.textContent = 'Email address is required.';
            return false;
        } else if (!emailRegex.test(emailValue)) {
            emailError.textContent = 'Please enter a valid email address (e.g., farmer@example.com).';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }

    // Real-Time Validation Listeners
    if (nameInput) nameInput.addEventListener('input', validateName);
    if (villageInput) villageInput.addEventListener('input', validateVillage);
    if (plotInput) plotInput.addEventListener('input', validatePlot);
    mobileInput.addEventListener('input', validateMobile);
    emailInput.addEventListener('input', validateEmail);

    // Submit Event Listener
    farmerForm.addEventListener('submit', (event) => {
        const isNameValid = validateName();
        const isVillageValid = validateVillage();
        const isPlotValid = validatePlot();
        const isMobileValid = validateMobile();
        const isEmailValid = validateEmail();

        // Block form submission if any validation check fails
        if (!isNameValid || !isVillageValid || !isPlotValid || !isMobileValid || !isEmailValid) {
            event.preventDefault();
        }
    });

    // Reset Form Listener
    farmerForm.addEventListener('reset', () => {
        if (nameError) nameError.textContent = '';
        if (villageError) villageError.textContent = '';
        if (plotError) plotError.textContent = '';
        mobileError.textContent = '';
        emailError.textContent = '';
    });
});