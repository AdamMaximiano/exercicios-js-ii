const button = document.querySelector(".feedback__button");
const feedbackInput = document.querySelector("feedback__input");

button.addEventListener("click", function (evento){
    evento.preventDefault();

    const message = document.querySelector("#feedbackInputMessage").value;
    const testimonials = document.querySelector(".testimonials");

    const reviewText = document.createElement("p"); 
    reviewText.appendChild( document.createTextNode( message ) );

    testimonials.appendChild(reviewText);
    testimonials.appendChild( document.createElement("hr") );

})