botao.addEventListener("click", function () {
    
    var nomeCliente = nome.value;
    var quantiaSorvete = quantidade.value;
    var saborSorvete = sabores.value;
    
    
   /* alert( "Nome:" + nomecliente + 
   "Qnt:" + quantidadeSorvete + 
   "Sabor:" + saborSorvete); */
     

pedidoNome.innerHTML = nomeCliente;
pedidoQuantia.innerHTML = quantiaSorvete; 
pedidoSabor.innerHTML = saborSorvete;

});