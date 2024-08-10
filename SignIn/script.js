document.addEventListener("DOMContentLoaded", () => {
    const formFields = document.querySelectorAll(".sign-in-form input");
    const submitButton = document.querySelector(".sign-in-button");
    const form = document.querySelector(".sign-in-form");
    const messageDiv = document.createElement("div");

    // Style the messageDiv
    messageDiv.style.color = "red";
    messageDiv.style.fontSize = "14px";
    messageDiv.style.marginTop = "10px";
    form.appendChild(messageDiv);

    // Event listener for form inputs
    formFields.forEach((field) => {
        field.addEventListener("input", () => {
            validateFormFields();
        });
    });

    // Function to validate form fields
    function validateFormFields() {
        let allFieldsFilled = true;
        let missingFields = [];

        // Check each field for empty value
        formFields.forEach((field) => {
            if (field.value.trim() === "") {
                allFieldsFilled = false;
                missingFields.push(field.getAttribute("id"));
            }
        });

        switch (allFieldsFilled) {
            case true:
                submitButton.style.backgroundColor = "#162a71";
                submitButton.style.color = "#f8f8f8";
                submitButton.style.cursor = "pointer";
                submitButton.style.pointerEvents = "auto";
                messageDiv.textContent = "";
                break;
            case false:
                submitButton.style.backgroundColor = "#888";
                submitButton.style.color = "#fff";
                submitButton.style.cursor = "not-allowed";
                submitButton.style.pointerEvents = "none";
                messageDiv.textContent = generateErrorMessage(missingFields);
                break;
        }
    }

    // Function to generate error message based on missing fields
    function generateErrorMessage(missingFields) {
        if (missingFields.length === 1) {
            return `Please fill in the ${missingFields[0]} field.`;
        } else {
            return `Please fill in the following fields: ${missingFields.join(", ")}.`;
        }
    }

    // Initial validation
    validateFormFields();
});
