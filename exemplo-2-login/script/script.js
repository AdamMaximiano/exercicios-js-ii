const input = document.getElementById("loginInputEmail");
const senha = document.getElementById("loginInputPassword");
const botao = document.querySelector(".login__button");

botao.addEventListener("click", function(evento){
    evento.preventDefault();
    const email = input.value;

    const loginForm = document.querySelector(".login__form");
    loginForm.innerHTML = `Login ${email} efetuado com sucesso!`; //apaga o formulario e escreve a mensagem dentro dele - substitui o valor dele
    // alert(`Login ${email} efetuado com sucesso!`);

})