
function calcularPromedio(lista) {
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0,siguienteElemento) {
            return valorAcumulado + siguienteElemento; }
    )

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const lista = [3,5,6,8,9,1,5,7];

lista.sort((a,b) => a - b);


const mitadLista = parseInt(lista.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;
if (esPar(lista.length)) {
const elemento1 = lista[mitadLista - 1];
const elemento2 = lista[mitadLista];

const promedioElemento1y2 = calcularPromedio([elemento1, elemento2]);
mediana = promedioElemento1y2;
} else {
mediana = lista[mitadLista];
}
    
//moda 

const listaModa = [
1,2,3,4,2,1,2,4,6,4,2,3,4,5,6,1,2
];

let listaObjeto = {};

listaModa.map(function (elemento) {
    if (listaObjeto[elemento] ) {//if it exists then sum one more on its identification
    listaObjeto[elemento] += 1;
    } else { //if not then create it with the value of one
    listaObjeto[elemento] = 1;
    }
  }
)

const listaConModa = Object.entries(listaObjeto).sort(function (elementoA, elementoB) {
   return elementoA[1] - elementoB[1];

    }
)