document.addEventListener("DOMContentLoaded", function() {
  const buyerTerms = document.getElementById("buyer-terms");
  const transactionCode = document.getElementById("transaction-code");
  const sellerTerms = document.getElementById("seller-terms");
  const proceedButton = document.getElementById("proceed-button");
  const successMessage = document.getElementById("success-message");

  const buyerTermsError = document.getElementById("buyer-terms-error");
  const transactionCodeError = document.getElementById("transaction-code-error");
  const sellerTermsError = document.getElementById("seller-terms-error");

  proceedButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default form submission behavior
      validateForm();
  });

  function validateForm() {
      // Validate buyer terms
      if (buyerTerms.value.trim() === "") {
          buyerTermsError.textContent = "Buyer Terms/Conditions cannot be empty.";
          buyerTermsError.style.display = "block";
          return; // Exit the function as soon as an error is found
      } else {
          buyerTermsError.style.display = "none";
      }

      // Validate transaction code
      if (transactionCode.value.trim() === "") {
          transactionCodeError.textContent = "Transaction Code cannot be empty.";
          transactionCodeError.style.display = "block";
          return; // Exit the function as soon as an error is found
      } else {
          transactionCodeError.style.display = "none";
      }

      // Validate seller terms
      if (sellerTerms.value.trim() === "") {
          sellerTermsError.textContent = "Seller Terms/Conditions cannot be empty.";
          sellerTermsError.style.display = "block";
          return; // Exit the function as soon as an error is found
      } else {
          sellerTermsError.style.display = "none";
      }

      // If all fields are valid
      successMessage.textContent = "Submission successful!";
      successMessage.style.display = "block";

      // Redirect after a short delay
      setTimeout(() => {
          window.location.href = proceedButton.parentElement.getAttribute("href");
      }, 2000); // 2-second delay
  }
});
