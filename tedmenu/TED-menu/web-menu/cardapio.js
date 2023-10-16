function mostrarPedido() {
    const entrada = document.getElementById("entradaSelect").value;
    const pratoPrincipal = document.getElementById("pratoPrincipalSelect").value;
    const sobremesa = document.getElementById("sobremesaSelect").value;

    const pedidoList = document.getElementById("pedidoList");
    pedidoList.innerHTML = `
        <li>${entrada}</li> 
        <li>${pratoPrincipal}</li>
        <li>${sobremesa}</li>
    `;

    const pedidoDiv = document.getElementById("pedido");
    pedidoDiv.class
}