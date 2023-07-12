// document.getElementById('cardForm').addEventListener('submit', function (event) {
//     event.preventDefault();
//     document.getElementById('cardForm').classList.add('hidden');
//     document.getElementById('otpContainer').classList.remove('hidden');
//     generateOTP();
// });
// var cardNumberInput = document.getElementById('cardNumber');

// cardNumberInput.addEventListener('input', function() {
//   var cardNumber = cardNumberInput.value.trim();

//   if (cardNumber.length !== 12 || isNaN(cardNumber)) {
//     cardNumberInput.setCustomValidity('Invalid card number. Please enter a 12-digit number.');
//   } else {
//     cardNumberInput.setCustomValidity('');
//   }
// });
// // Add this code inside the <script> tag or your external JavaScript file

// var expiryDateInput = document.getElementById('expiryDate');

// // Initialize the date picker
// var expiryDatePicker = flatpickr(expiryDateInput, {
//   dateFormat: 'm/Y', // Set the desired date format
//   minDate: 'today', // Set the minimum selectable date to today
// });





// document.getElementById('verifyOTP').addEventListener('click', verifyOTP);

// function generateOTP() {
//     var otp = Math.floor(100000 + Math.random() * 900000);
//     alert('Generated OTP: ' + otp);
// }

// function verifyOTP() {
//     var otpValue = document.getElementById('otp').value;
//     if (otpValue === '123456') {
//         document.getElementById('otpContainer').classList.add('hidden');
//         document.getElementById('successMessage').classList.remove('hidden');
//     } else {
//         alert('Invalid OTP. Please try again.');
//     }
// }
document.getElementById('cardForm').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('cardForm').classList.add('hidden');
    document.getElementById('otpContainer').classList.remove('hidden');
    generateAndStoreOTP();
  });
  
  var cardNumberInput = document.getElementById('cardNumber');
  
  cardNumberInput.addEventListener('input', function () {
    var cardNumber = cardNumberInput.value.trim();
  
    if (cardNumber.length !== 12 || isNaN(cardNumber)) {
      cardNumberInput.setCustomValidity('Invalid card number. Please enter a 12-digit number.');
    } else {
      cardNumberInput.setCustomValidity('');
    }
  });
  
  var expiryDateInput = document.getElementById('expiryDate');
  
  // Initialize the date picker
  var expiryDatePicker = flatpickr(expiryDateInput, {
    dateFormat: 'm/Y', // Set the desired date format
    minDate: 'today', // Set the minimum selectable date to today
  });
  
  document.getElementById('verifyOTP').addEventListener('click', verifyOTP);
  
  function generateAndStoreOTP() {
    var otp = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem('generatedOTP', otp);
    alert('Generated OTP: ' + otp);
  }
  
  function verifyOTP() {
    var otpValue = document.getElementById('otp').value;
    var generatedOTP = localStorage.getItem('generatedOTP');
  
    if (otpValue === generatedOTP) {
      document.getElementById('otpContainer').classList.add('hidden');
      document.getElementById('successMessage').classList.remove('hidden');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  }
  
