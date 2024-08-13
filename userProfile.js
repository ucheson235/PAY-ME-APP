// Function to handle form validation
function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Form input fields
    const formFields = [
        { id: "fname", name: "First Name" },
        { id: "lname", name: "Last Name" },
        { id: "phone", name: "Phone Number" },
        { id: "email", name: "Email Address" },
        { id: "state", name: "State" },
        { id: "address", name: "Home Address" },
        { id: "region", name: "Region" },
        { id: "country", name: "Country" },
    ];

    let formIsValid = true;

    // Loop through each field to validate
    for (let field of formFields) {
        const inputElement = document.getElementById(field.id);
        const errorElement = document.getElementById(field.id + "Error");

        if (inputElement.value.trim() === "") {
            errorElement.textContent = `${field.name} is required.`;
            errorElement.style.display = "block";
            formIsValid = false;
            break; // Stop further validation as soon as a field is found invalid
        } else {
            errorElement.style.display = "none";
        }
    }

    // If the form is valid, show a success message and then redirect
    if (formIsValid) {
        const successMessage = document.getElementById("successMessage");
        successMessage.textContent = "Form submitted successfully!";
        successMessage.style.display = "block";

        // Wait for 2 seconds before redirecting or performing other actions
        setTimeout(() => {
            successMessage.style.display = "none";
            // Redirect or perform other actions here
            window.location.href = "your-next-page.html";
        }, 2000);
    }
}

// Event listener for the form submit button
document.querySelector(".user-button").addEventListener("click", validateForm);
