const button = document.querySelector(".contato__button");
const formName = document.getElementById("contatoInputNome");
const formMail = document.getElementById("contatoInputEmail");
const formPhone = document.getElementById("contatoInputPhone");
const formMessage = document.getElementById("contatoInputMessage");

button.addEventListener("click", function (event){
    event.preventDefault()
    // formas de verificar se o campo esta nulo ou vazio:
    // formName.value === undefined
    // formName.value === null
    // formName.value === ""
    // formName.value === " "
    if (formName.value === undefined || formName.value === null || 
        formName.value === "" || formName.value === " "){
        formName.focus(); // foca no ponto em questao, bordinha azul
        return false;
    } else if (formMail.value === undefined || formMail.value === null || 
        formMail.value === "" || formMail.value === " "){
            formMail.focus();
        return false;
    } else if (formPhone.value === undefined || formPhone.value === null || 
        formPhone.value === "" || formPhone.value === " "){
        formPhone.focus();
        return false;
    } else if (formMessage.value === undefined || formMessage.value === null || 
        formMessage.value === "" || formMessage.value === " "){
        formMessage.focus();
        return false;
    }
    alert("rolou sim");
    return true;
})