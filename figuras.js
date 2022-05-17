

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");
  
function areaCuadrado(lado) {
    return lado * lado;
}

function perimetroTriangulo(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base);
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");
      
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2; 
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio); 
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
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

function calcularPerímetroTriangulo() {
    const input1 = document.getElementById("inputtriangulo");
    const input2 = document.getElementById("inputtriangulo2");
    const input3 = document.getElementById("inputtriangulo3");
    let value1 = input1.value;
    let value2 = input2.value;
    let value3 = input3.value;

    var result = perimetroTriangulo(value1, value2, value3);
    alert(result);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("inputtriangulo");
    const input3 = document.getElementById("inputtriangulo3");
    let value1 = input1.value;
    let value3 = input3.value;

    var result = areaTriangulo(value1, value3);
    alert(result);
}

function calcularPerímetroCirculo() {
    const input = document.getElementById("inputcirculo");
    const value = input.value;
    const result = perimetroCirculo(value);
    alert(result)
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputcirculo");
    const value = input.value;
    const result = areaCirculo(value);
    alert(result);
}