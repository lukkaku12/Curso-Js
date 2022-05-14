

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");
  
function areaCuadrado(lado) {
    return lado * lado;
}

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");
      
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function calcularPerímetro() {
const input = document.getElementById("inputcuadrado");
let value = input.value;
var result = perimetroCuadrado(value);
alert(result);
}

function calcularArea() {
const input = document.getElementById("inputcuadrado");
let value = input.value;
var result = areaCuadrado(value);
alert(result);
}