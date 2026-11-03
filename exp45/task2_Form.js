document.addEventListener('DOMContentLoaded', () => {
    const farmerForm = document.getElementById('farmerForm');
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');

    // Confirm form element exists before continuing
    if (!farmerForm) {
        console.error("Error: Could not find <form id='farmerForm'> in HTML.");
        return;
    }

    // Single responsibility function to validate Farmer Name
    function validateName() {
        if (!nameInput || !nameError) return false;

        const nameValue = nameInput.value.trim();
        // Regex strictly allows only letters (a-z, A-Z) and spaces
        const alphaSpaceRegex = /^[A-Za-z\s]+$/;

        if (nameValue === '') {
            nameError.textContent = 'Farmer Name is required.';
            return false;
        } else if (!alphaSpaceRegex.test(nameValue)) {
            nameError.textContent = 'Farmer Name must contain alphabetic characters and spaces only.';
            return false;
        } else {
            nameError.textContent = ''; // Clear error if valid
            return true;
        }
    }

    // Trigger validation while typing
    if (nameInput) {
        nameInput.addEventListener('input', validateName);
        nameInput.addEventListener('blur', validateName);
    }

    // Prevent submission if validation fails
    farmerForm.addEventListener('submit', (event) => {
        const isNameValid = validateName();

        if (!isNameValid) {
            event.preventDefault(); // Blocks form submission
            console.log('Submission blocked: Invalid Farmer Name');
        }
    });
});