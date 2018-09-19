const input = document.getElementById("newsInputEmail");
const botao = document.querySelector(".news__button");

botao.addEventListener("click", function(event){
    event.preventDefault();

    const resposta = document.createElement("h2");
    const respostaMensagem = document.createTextNode("Email cadastrado com sucesso!");

    resposta.appendChild(respostaMensagem);

    const newsForm = document.querySelector(".news__form");

    newsForm.insertBefore(resposta, newsForm.childNodes[0]);

})