document.getElementById("submit").addEventListener("submit", function (event) {
  event.preventDefault();
  const fullName = document.querySelector("#full_name").value;
  const email = document.querySelector("#email").value;
  const phoneNumber = document.querySelector("#phone_number").value;

  if (fullName && email && phoneNumber) {
    screenMessage("Submission Successful!");
  } else {
    screenMessage("Submission Not Successful!");
  }
});

const messageP = document.querySelector(".message");
function screenMessage(message) {
  messageP.textContent = message;
}
