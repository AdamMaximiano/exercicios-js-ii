// const loginModal = document.getElementById(".login-modal");
const button = document.querySelector(".login__button");
const buttonClose = document.querySelector(".login-modal__button-close");

button.addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(".login-modal").style.display = "flex";
})

buttonClose.addEventListener("click", function(eventTwo){
    eventTwo.preventDefault();
    document.querySelector(".login-modal").style.display = "none";
})
