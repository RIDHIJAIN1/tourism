document.addEventListener('DOMContentLoaded', function () {
    var today = new Date().toISOString().split('T')[0];
    var startDateInput = document.getElementById('startDate');
    var endDateInput = document.getElementById('endDate');

    startDateInput.setAttribute('min', today);

   
    startDateInput.addEventListener('change', function () {
        var startDate = this.value;
        
        var nextDay = new Date(startDate);
        nextDay.setDate(nextDay.getDate() + 1); 
        endDateInput.setAttribute('min', nextDay.toISOString().split('T')[0]);
    });

    document.getElementById('bookingForm').addEventListener('submit', function (e) {
        e.preventDefault(); 

        
        var startDate = startDateInput.value;
        var endDate = endDateInput.value;
        var description = document.getElementById('description').value;

        if (new Date(startDate) >= new Date(endDate)) {
            alert('End date must be greater than start date.');
            return false;
        }

     
        if(description.length < 50 || description.length > 500) {
            alert('Description must be between 50 and 500 characters.');
            return false;
        }

     
        alert('Booking successful!');
    });
});

function submitForm(event) {
  event.preventDefault();

  document.getElementById("whereTo").selectedIndex = 0; 
  document.getElementById("startDate").value = ""; 
  document.getElementById("endDate").value = ""; 
  document.getElementById("description").value = ""; 
  document.querySelector("#bookingForm input[type='number']").value = ""; 
  
 
  document.getElementById("whereTo").focus();
}
document.addEventListener("scroll", function() {
  var cards = document.querySelectorAll(".card");

  cards.forEach(function(card) {
    var cardPosition = card.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (cardPosition < screenHeight) {
      card.classList.add("fade-in");
    }
  });
});

function validationForm(){
    var email = document.getElementById("email2").value;
    var password = document.getElementById("password2").value;

    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var errors = [];

    console.log("its working")
    console.log("its working")


    if(!regexEmail.test(email)){
        errors.push("Enter a valid email address")
    }

    if(password.length<6){
        errors.push("Password must be at least 6 characters long")
    }

    if (errors.length > 0) {
        var errorList = "<ul>";
        errors.forEach(function(error) {
            errorList += "<li style ='color:red;list-style:none;'> "+  error + "</li>";
        });
        errorList += "</ul>";
  
        document.getElementById("validationError").innerHTML = errorList;
    } else {
        
      var myModal = document.getElementById('exampleModal');
      var modalInstance = bootstrap.Modal.getInstance(myModal);
      modalInstance.hide();
      resetForms();
    }
}


function validateForm() {
  var fullname = document.getElementById("fullname").value;
  var contact = document.getElementById("contact").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var dob = document.getElementById("dob").value;
  var gender = document.getElementById("gender").value;

  var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var errors = [];

  if (fullname.trim() == "") {
      errors.push("Please enter your full name.");
  }

  if (contact === ""|| isNaN(contact)) {
      errors.push("Please enter a valid contact number.");
  }

  if (!regexEmail.test(email)) {
      errors.push("Please enter a valid email address");
  }

  if (password.length< 6 ){
      errors.push("Password must be at least 6 characters long");
  }

  if (dob === "") {
      errors.push("Please enter your date of birth.");
  }

  if (gender === "") {
      errors.push("Please select your gender.");
  }

  if (errors.length > 0) {
      var errorList = "<ul>";
      errors.forEach(function(error) {
          errorList += "<li style ='color:red;list-style:none;'> "+  error + "</li>";
      });
      errorList += "</ul>";

      document.getElementById("validationErrors").innerHTML = errorList;
  } else {
      
    var myModal = document.getElementById('exampleModal1');
    var modalInstance = bootstrap.Modal.getInstance(myModal);
    modalInstance.hide();
    resetForm();
  }
}

function resetForm(){
    document.getElementById("registrationForm").reset();
    document.getElementById("validationErrors").innerHTML = "";
}
function resetForms(){
    document.getElementById("loginForm").reset();
    document.getElementById("validationError").innerHTML = "";
}
