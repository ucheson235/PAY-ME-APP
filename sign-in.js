// Select the sign-in button and add an event listener
document.querySelector(".sign-in-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the input values
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    // Select error message elements
    const emailError = document.querySelector("#email-error");
    const passwordError = document.querySelector("#password-error");
    const successMessage = document.querySelector("#success-message");

    // Clear previous messages
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    // Validate the input fields
    let isValid = true;

    if (email === "") {
        emailError.textContent = "Please enter your email";
        console.log("Email is required");
        isValid = false;
    }

    if (password === "") {
        passwordError.textContent = "Please enter your password";
        console.log("Password is required");
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = "Sign-in successful!";
        console.log("Sign-in successful");

        // Delay the form submission for the user to see the success message
        setTimeout(function() {
            // Submit the form
            document.querySelector(".sign-in-form").submit();
        }, 2000); // 2 seconds delay
    }
});
