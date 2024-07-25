document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("rating");
    const sliderValue = document.getElementById("slider-value");

    slider.addEventListener("input", function() {
        sliderValue.textContent = slider.value;
    });

    const form = document.getElementById("survey-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const feedback = document.getElementById("feedback").value;
        const rating = document.getElementById("rating").value;

        console.log("Username:", username);
        console.log("Feedback:", feedback);
        console.log("Rating:", rating);

        // Here you would typically send the data to the server using AJAX or a similar method
    });
});
