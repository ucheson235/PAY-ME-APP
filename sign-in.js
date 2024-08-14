// Select the sign-in button and add an event listener
document.querySelector(".sign-in-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the input values
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    // Select error message elements
    const emailError = document.querySelector("#email-error");
    const passwordError = document.querySelector("#password-error");
    const successMessage = document.querySelector("#success-message");

    // Clear previous messages
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    // Validate the input fields
    if (email === "") {
        emailError.textContent = "Enter your email";
        console.log("Email is required");
        return; // Exit if email is not valid
    }

    if (password === "") {
        passwordError.textContent = "Enter your password";
        console.log("Password is required");
        return; // Exit if password is not valid
    }

    // If both fields are valid
    successMessage.textContent = "Sign-in successful!";
    console.log("Sign-in successful");

    // Delay the form submission for the user to see the success message
    setTimeout(function() {
        // Submit the form
        document.querySelector(".sign-in-form").submit();
    }, 2000); // 2 seconds delay
});
