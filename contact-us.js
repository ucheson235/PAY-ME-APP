// document.querySelector("#contactUsBtn").addEventListener("click", function(){
    
//     const contactUsFullName = document.querySelector("#contactUsFullName").value;
//     const contactUsEmail = document.querySelector("#contactUsEmail").value;
//     const contactUsPhone = document.querySelector("#contactUsPhone").value;
//     const contactUsMessage = document.querySelector("#contactUsMessage").value;
//     let contactUsFormMessage = "";

//     switch(true){
//         case contactUsFullName ==="":
//              contactUsFormMessage = "Please enter your full name";
//              break;
//         case contactUsEmail ==="":
//             contactUsFormMessage = "Please enter your email";
//             break;
//         case contactUsPhone ==="":
//             contactUsFormMessage = "Please enter your phone number";
//             break;
//         case contactUsMessage ==="":
//             contactUsFormMessage = "Please enter your message";
//             break;
//         default:
//             contactUsFormMessage = "message sent successfully";
//             document.querySelector("#contactUsForm");
//             break;
//     }

//     document.querySelector('#contactUsFormMessage').textContent = contactUsFormMessage;
//     console.log(signUpMessage);







// });

document.querySelector("#contactUsBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form from submitting

    const contactUsFullName = document.querySelector("#contactUsFullName").value;
    const contactUsEmail = document.querySelector("#contactUsEmail").value;
    const contactUsPhone = document.querySelector("#contactUsPhone").value;
    const contactUsMessage = document.querySelector("#contactUsMessage").value;
    let contactUsFormMessage = "";

    switch (true) {
        case contactUsFullName === "":
            contactUsFormMessage = "Please enter your full name";
            break;
        case contactUsEmail === "":
            contactUsFormMessage = "Please enter your email";
            break;
        case contactUsPhone === "":
            contactUsFormMessage = "Please enter your phone number";
            break;
        case contactUsMessage === "":
            contactUsFormMessage = "Please enter your message";
            break;
        default:
            contactUsFormMessage = "Message sent successfully!";

            // Save data to localStorage
            localStorage.setItem("contactUsFullName", contactUsFullName);
            localStorage.setItem("contactUsEmail", contactUsEmail);
            localStorage.setItem("contactUsPhone", contactUsPhone);
            localStorage.setItem("contactUsMessage", contactUsMessage);

            document.querySelector("#contactUsForm").submit();
            break;
    }

    document.querySelector('#contactUsFormMessage').textContent = contactUsFormMessage;
    console.log(contactUsFormMessage);
});