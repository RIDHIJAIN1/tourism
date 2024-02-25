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
