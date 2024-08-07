// document.querySelector("#forgotPasswordBtn").addEventListener("click", function(){
//      const forgotPasswordPhone = document.querySelector("#forgotPasswordPhone").value;
//      const  forgotPasswordEmail = document.querySelector("#forgotPasswordEmail").value;
//      const  forgotPassword = document.querySelector("#forgotPassword").value;
//      const  confirmPassword = document.querySelector("#confirmPassword").value;
//      let  forgotPasswordMessage = "";

//      switch(true){
//         case forgotPasswordPhone ==="":
//             forgotPasswordMessage = "Please enter your phone number";
//             break;
//         case forgotPasswordEmail ==="":
//             forgotPasswordMessage = "Please enter your email address";
//             break;
//         case forgotPassword ==="":
//             forgotPasswordMessage = "Please enter your new password";
//             break;
//         case confirmPassword ==="":
//             forgotPasswordMessage = "Please confirm your password";
//             break;
//         default:
//             forgotPasswordMessage = "password changed successfully ";
//             document.querySelector("#forgotPasswordForm")
//             break;

//      }

//      document.querySelector('#forgotPasswordMessage').textContent = forgotPasswordMessage;
//     console.log(forgotPasswordMessage);







// })

document.querySelector("#forgotPasswordBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form from submitting

    const forgotPasswordPhone = document.querySelector("#forgotPasswordPhone").value;
    const forgotPasswordEmail = document.querySelector("#forgotPasswordEmail").value;
    const forgotPassword = document.querySelector("#forgotPassword").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;
    let forgotPasswordMessage = "";

    switch (true) {
        case forgotPasswordPhone === "":
            forgotPasswordMessage = "Phone number is required";
            break;
        case forgotPasswordEmail === "":
            forgotPasswordMessage = "E-Mail is required";
            break;
        case forgotPassword === "":
            forgotPasswordMessage = "New Password is required";
            break;
        case confirmPassword === "":
            forgotPasswordMessage = "Confirm Password is required";
            break;
        case forgotPassword !== confirmPassword:
            forgotPasswordMessage = "Passwords do not match";
            break;
        default:
            forgotPasswordMessage = "Form submitted successfully!";

            // Save data to localStorage
            localStorage.setItem("forgotPasswordPhone", forgotPasswordPhone);
            localStorage.setItem("forgotPasswordEmail", forgotPasswordEmail);
            localStorage.setItem("forgotPassword", forgotPassword);
            localStorage.setItem("confirmPassword", confirmPassword);

            document.querySelector("#forgotPasswordForm").submit();
            break;
    }

    document.querySelector('#forgotPasswordMessage').textContent = forgotPasswordMessage;
    console.log(forgotPasswordMessage);
});