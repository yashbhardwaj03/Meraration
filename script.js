document.addEventListener('DOMContentLoaded', () => {
    // Your code here
    let checkDetails = document.querySelector(".check-details");
    let reset = document.querySelector(".reset");
    let cards = document.querySelector(".cards");
    let results = document.querySelector(".results");
    let input = document.querySelector(".rc-number");

    checkDetails.addEventListener("click", () => {
        cards.style.display = "flex";
        results.style.display = "flex";
    });
    reset.addEventListener("click", () => {
        cards.style.display = "none";
        results.style.display = "none";
        input.value = ""; // Clear the input field
    });
});



