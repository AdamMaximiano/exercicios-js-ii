const button = document.querySelector(".cadastro__button");
const inputNome = document.getElementById("cadastroInputNome");
const inputMail = document.getElementById("cadastroInputEmail");
const inputMailConfirm = document.getElementById("cadastroInputEmailConfirm");
const inputPassword = document.getElementById("cadastroInputPassword");
const inputPasswordConfirm = document.getElementById("cadastroInputPasswordConfirm");
const inputPhone = document.getElementById("cadastroInputPhone");
const inputArea = document.getElementById("cadastroInputArea");
const inputLevel = document.getElementsByName("level");
const inputNews = document.getElementById("cadastroInputNews");


button.addEventListener("click", function(event){
    event.preventDefault();

    const optionSelect = inputArea.options[inputArea.selectedIndex]

    let radioItem;
    for (let i = 0; i < inputLevel.length; i++){
        // console.log(inputLevel[i]);
        // console.log(inputLevel[i].checked);
        if (inputLevel[1].checked){
            console.log(inputLevel[i]);
            let radioItem = inputLevel[i];
        }
    }

    if (inputNome.value === undefined || inputNome.value === null || 
        inputNome.value === "" || inputNome.value === " "){
            inputNome.focus();
            return false;
    } else if (inputMail.value === undefined || inputMail.value === null || 
        inputMail.value === "" || inputMail.value === " "){
            inputMail.focus();
            return false;
    } else if (inputMailConfirm.value === undefined || inputMailConfirm.value === null || 
        inputMailConfirm.value === "" || inputMailConfirm.value === " "){
            inputMailConfirm.focus();
            return false;
    } else if (inputMail.value !== inputMailConfirm.value) {
            inputMail.focus();
            alert("Confira o e-mail, caraio!");
    } else if (inputPassword.value === undefined || inputPassword.value === null || 
        inputPassword.value === "" || inputPassword.value === " "){
            inputPassword.focus();
            return false;
    } else if (inputPasswordConfirm.value === undefined || inputPasswordConfirm.value === null || 
        inputPasswordConfirm.value === "" || inputPasswordConfirm.value === " "){
            inputPasswordConfirm.focus();
            return false;
    } else if (inputPassword.value !== inputPasswordConfirm.value || inputPassword.value.length <= 7) {
            inputPassword.focus();
            alert("Confira a senha, besta!");
            return false;
    } else if (inputPhone.value === undefined || inputPhone.value === null || 
        inputPhone.value === "" || inputPhone.value === " "){
            inputPhone.focus();
            return false;
    } else if (inputArea.value === "0" || inputArea.value === null || 
        inputArea.value === "" || inputArea.value === " "){
            inputArea.focus();
            return false;
    } else if (optionSelect.value == "0"){
        document.querySelector("body").style.backgroundColor= "blue";
    } else if (optionSelect.value == "1"){
        document.querySelector("body").style.backgroundColor= "green";
    } else if (optionSelect.value == "2"){
        document.querySelector("body").style.backgroundColor= "pink";
    }else if (optionSelect.value == "3"){
        document.querySelector("body").style.backgroundColor= "orange";
    }
    document.querySelector("body").style.backgroundColor = "#fff";
    const form = this.closest(form);
    form.submit();

    inputMailConfirm.addEventListener("paste", function(event){
        event.preventDefault();
        return false;
    })
})
