

function calcularDescuento(precioProducto, descuento) {
    return (precioProducto * (100 - descuento)) / 100;
}

function calcularDescuentosHtml() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    let value1 = input1.value;
    let value2 = input2.value;
    let result = calcularDescuento(value1, value2);
    let resultado = document.getElementById("resultados")
    resultado.innerText = `el precio del producto con descuento es $${result}`;
}