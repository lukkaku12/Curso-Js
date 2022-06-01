function calcularCapacidadDeAhorro(ingresosMensuales, gastosMensuales) {


let cuantoTeQuedaAlFinal = ingresosMensuales - gastosMensuales;

return cuantoTeQuedaAlFinal;
}

function functionCapacidadDeAhorro() {
   const inputIngresos = document.getElementById("input1");
   const inputGastos = document.getElementById("input2");
   let valueIngresos = inputIngresos.value;
   let valueGastos = inputGastos.value;

   let result = calcularCapacidadDeAhorro(valueIngresos, valueGastos)
   let mostradorDeResultados = document.getElementById("p");
   mostradorDeResultados.innerText = `Su capacidad de Ahorro es ${result}.`
}