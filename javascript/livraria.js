
window.onload = function () {
    const objBotao = document.getElementById("botao");  
    //FUNÇÃO CALCULAR
    function calcular() {
        let objPreco = Number (document.getElementById("preco").value);
        let livroNome = document.getElementById("livro").value;
        let clienteTipo = document.getElementById("cliente").value;
        let descontoValor = 0;
        
        //NENHUM DESCONTO
        if (clienteTipo == "Nenhum") {
            descontoValor = 0.00;
            
            //DESCONTO DE 15%
        } else if (clienteTipo == "Cliente A") {
            descontoValor = 0.15;
            
            //DESCONTO DE 10%
        } else if (clienteTipo == "Cliente B") {
            descontoValor = 0.10;
            
            //DESCONTO DE 7%
        } else if (clienteTipo == "Cliente C") {
            descontoValor = 0.07;
        }
        
        let descontoAplicado = descontoValor * objPreco;
        let total = objPreco - descontoAplicado;

        saidas(livroNome,objPreco,clienteTipo,descontoAplicado,total);
    }  
    function saidas(livroNome,objPreco,clienteTipo,descontoAplicado,total) {
        document.getElementById("saidaLivro").innerHTML = `<b>Nome do Livro:</b> ${livroNome}`;
        document.getElementById("saidaPreco").innerHTML = `<b>Preço do Livro:</b> R$ ${objPreco.toFixed(2).replace(".",",")}`;
        document.getElementById("saidaDesconto").innerHTML = `Tipo de desconto: <b>${clienteTipo}</b> - R$ ${descontoAplicado.toFixed(2).replace(".",",")}`;
        document.getElementById("saidaTotal").innerHTML = `<b>Total a pagar:</b> R$ ${total.toFixed(2).replace(".",",")}`;
    }
    //BOTÃO
    objBotao.onclick = function(event){
           event.preventDefault();
        calcular();
    }
}