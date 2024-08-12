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
      let isValid = true;
  
      // Validate buyer terms
      if (buyerTerms.value.trim() === "") {
        buyerTermsError.textContent = "Buyer Terms/Conditions cannot be empty.";
        buyerTermsError.style.display = "block";
        isValid = false;
      } else {
        buyerTermsError.style.display = "none";
      }
  
      // Validate transaction code
      if (transactionCode.value.trim() === "") {
        transactionCodeError.textContent = "Transaction Code cannot be empty.";
        transactionCodeError.style.display = "block";
        isValid = false;
      } else {
        transactionCodeError.style.display = "none";
      }
  
      // Validate seller terms
      if (sellerTerms.value.trim() === "") {
        sellerTermsError.textContent = "Seller Terms/Conditions cannot be empty.";
        sellerTermsError.style.display = "block";
        isValid = false;
      } else {
        sellerTermsError.style.display = "none";
      }
  
      // Show success message if all fields are valid
      if (isValid) {
        successMessage.textContent = "Submission successful!";
        successMessage.style.display = "block";
  
        // Redirect after a short delay
        setTimeout(() => {
          window.location.href = proceedButton.parentElement.getAttribute("href");
        }, 2000); // 2-second delay
      }
    });
  });
  