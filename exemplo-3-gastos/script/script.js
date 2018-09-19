const botao = document.querySelector(".transacao__button");
const transacaoInputName = document.getElementById("transacaoInputName");
const transacaoInputMoney = document.getElementById("transacaoInputMoney");
const transacaoInputDate = document.getElementById("transacaoInputDate");


botao.addEventListener("click", function (evento){
    evento.preventDefault();
    const tabela = document.querySelector(".extrato__table");

    //criar linha
    const linha = document.createElement("tr");

    //criar coluna
    const colunaNome = document.createElement("td");
    const colunaValor = document.createElement("td");
    const colunaData = document.createElement("td");

    const colunaNomeTexto = document.createTextNode(transacaoInputName.value);
    const colunaValorTexto = document.createTextNode(transacaoInputMoney.value);
    const colunaDataTexto = document.createTextNode(transacaoInputDate.value);

    colunaNome.appendChild(colunaNomeTexto);
    colunaValor.appendChild(colunaValorTexto);
    colunaData.appendChild(colunaDataTexto);


    //inserir colunas na linha
    linha.appendChild(colunaNome);
    linha.appendChild(colunaValor);
    linha.appendChild(colunaData);

    //adicionar linha a tabela - inserir por último, quando as colunas ja estiverem inseridas na linha
    tabela.appendChild(linha);
    // console.log(tabela);


    // linha.insertBefore()

})