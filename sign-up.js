// document.querySelector("#signUpBtn").addEventListener("click", function() {
//     const signUpFirstName = document.querySelector("#signUpFirstName").value;
//     const signUpLastName = document.querySelector("#signUpLastName").value;
//     const signUpEmail = document.querySelector("#signUpEmail").value;
//     const signUpPhone = document.querySelector("#signUpPhone").value;
//     const signUpCountry = document.querySelector("#signUpCountry").value;
//     const signUpState = document.querySelector("#signUpState").value;
//     const signUpPassword = document.querySelector("#signUpPassword").value;
//     const signUpConfirmPassword = document.querySelector("#signUpConfirmPassword").value;
//     let signUpMessage = "";

//     switch (true) {
//         case signUpFirstName === "":
//             signUpMessage = "First Name is required";
//             break;
//         case signUpLastName === "":
//             signUpMessage = "Last Name is required";
//             break;
//         case signUpEmail === "":
//             signUpMessage = "Email is required";
//             break;
//         case signUpPhone === "":
//             signUpMessage = "Phone number is required";
//             break;
//         case signUpCountry === "":
//             signUpMessage = "Country is required";
//             break;
//         case signUpState === "":
//             signUpMessage = "State is required";
//             break;
//         case signUpPassword === "":
//             signUpMessage = "Password is required";
//             break;
//         case signUpConfirmPassword === "":
//             signUpMessage = "Confirm Password is required";
//             break;
//         default:
//             signUpMessage = 'Form submitted successfully!';
//             document.querySelector('#signUpForm')
//             break;
//     }

//     document.querySelector('#signUpMessage').textContent = signUpMessage;
//     console.log(signUpMessage);
// });

document.querySelector("#signUpBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form from submitting

    const signUpFirstName = document.querySelector("#signUpFirstName").value;
    const signUpLastName = document.querySelector("#signUpLastName").value;
    const signUpEmail = document.querySelector("#signUpEmail").value;
    const signUpPhone = document.querySelector("#signUpPhone").value;
    const signUpCountry = document.querySelector("#signUpCountry").value;
    const signUpState = document.querySelector("#signUpState").value;
    const signUpPassword = document.querySelector("#signUpPassword").value;
    const signUpConfirmPassword = document.querySelector("#signUpConfirmPassword").value;
    const uploadId = document.querySelector("#upload-id").value; // Assuming you want to save file name
    let signUpMessage = "";

    switch (true) {
        case signUpFirstName === "":
            signUpMessage = "First Name is required";
            break;
        case signUpLastName === "":
            signUpMessage = "Last Name is required";
            break;
        case signUpEmail === "":
            signUpMessage = "Email is required";
            break;
        case signUpPhone === "":
            signUpMessage = "Phone number is required";
            break;
        case signUpCountry === "":
            signUpMessage = "Country is required";
            break;
        case signUpState === "":
            signUpMessage = "State is required";
            break;
        case signUpPassword === "":
            signUpMessage = "Password is required";
            break;
        case signUpConfirmPassword === "":
            signUpMessage = "Confirm Password is required";
            break;
        default:
            signUpMessage = "Form submitted successfully!";

            // Save data to localStorage
            localStorage.setItem("signUpFirstName", signUpFirstName);
            localStorage.setItem("signUpLastName", signUpLastName);
            localStorage.setItem("signUpEmail", signUpEmail);
            localStorage.setItem("signUpPhone", signUpPhone);
            localStorage.setItem("signUpCountry", signUpCountry);
            localStorage.setItem("signUpState", signUpState);
            localStorage.setItem("signUpPassword", signUpPassword);
            localStorage.setItem("signUpConfirmPassword", signUpConfirmPassword);
            localStorage.setItem("uploadId", uploadId);

            document.querySelector("#signUpForm").submit();
            break;
    }

    document.querySelector("#signUpMessage").textContent = signUpMessage;
    console.log(signUpMessage);
});

