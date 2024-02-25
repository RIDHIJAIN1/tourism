document.addEventListener('DOMContentLoaded', function () {
    var today = new Date().toISOString().split('T')[0];
    var startDateInput = document.getElementById('startDate');
    var endDateInput = document.getElementById('endDate');

    // Set the minimum start date to today
    startDateInput.setAttribute('min', today);

    // Ensure the end date cannot be before the start date
    startDateInput.addEventListener('change', function () {
        var startDate = this.value;
        // Set the minimum end date to the selected start date or next day
        var nextDay = new Date(startDate);
        nextDay.setDate(nextDay.getDate() + 1); // Ensure endDate is at least one day after startDate
        endDateInput.setAttribute('min', nextDay.toISOString().split('T')[0]);
    });

    document.getElementById('bookingForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get the values from the form
        var startDate = startDateInput.value;
        var endDate = endDateInput.value;
        var description = document.getElementById('description').value;

        // Validation for start and end date
        if (new Date(startDate) >= new Date(endDate)) {
            alert('End date must be greater than start date.');
            return false;
        }

        // Check description length
        if(description.length < 50 || description.length > 500) {
            alert('Description must be between 50 and 500 characters.');
            return false;
        }

        // After passing validation
        alert('Booking successful!');
    });
});

function submitForm(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Reset all form fields
  document.getElementById("whereTo").selectedIndex = 0; // Reset dropdown to the default option
  document.getElementById("startDate").value = ""; // Clear the start date
  document.getElementById("endDate").value = ""; // Clear the end date
  document.getElementById("description").value = ""; // Clear the description
  document.querySelector("#bookingForm input[type='number']").value = ""; // Clear the number input
  
  // Optionally, if you have other input types like text, you can clear them similarly

  // Focus on the first input field after reset (optional)
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
