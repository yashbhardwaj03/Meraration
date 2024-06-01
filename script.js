document.addEventListener('DOMContentLoaded', () => {
    // Your code here
    let checkDetails = document.querySelector(".check-details");
    let reset = document.querySelector(".reset");
    let cards = document.querySelector(".cards");
    let results = document.querySelector(".results");
    let input = document.querySelector(".rc-number");


    checkDetails.addEventListener("click", () => {
        console.log('Adding event listeners after 5 seconds');
        setTimeout(() => {
            console.log('Check details clicked');
            cards.style.display = "flex";
            results.style.display = "flex";
        }, 1000);
    });

    reset.addEventListener("click", () => {
        cards.style.display = "none";
        results.style.display = "none";
        input.value = ""; // Clear the input field
    });



});



