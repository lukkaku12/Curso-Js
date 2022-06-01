arrayPepe = [
    {vehiculo: "Toyota", modelo: "Corolla", annio: "2020"},
    {hogar: "apartamento", barrio: "Los colores", annio:"2013"},
    {hogar:"hacienda", lugar: "Llanogrande", annio: "2018"}
    ]
    /*
    .filter filtra el array, buscando meramente el termino que buscas, no te da toda la 
     */
    var informaciónNecesariaPepe = arrayPepe.filter(function(pepito){
        return pepito.annio < 2021
    });
    /*mapeara en un array lo que le pidas de otro array, en este caso pedí mappear
    del array pepe la cantidad de los los hogares que tiene pepito en pepeNoPp*/
    var pepeNoPp = arrayPepe.map(function(propiedadPepito) {
        return propiedadPepito.hogar
    })
    //sirve para buscar algo dentro de un array, si no es exactamente como lo planteas o como lo buscas, no mostrará nada. y si lo es
    // te entregará toda la linea de información en este caso aparecerá "{hogar:"hacienda", lugar: "Llanogrande", annio: "2018"}"
    var ppppp = arrayPepe.find(function(objeto) {
        return objeto.annio === "2018"
    })
//te imprimirá todos los resultados, por separado que hay existentes relacionados con hogar
//osea "apartamento" y "hacienda".
    var justSomeWeirdVar = arrayPepe.forEach(hogares => {
        console.log(hogares.hogar)
    });
//es como un true o false si se cumple la instrucción que digas te soltará un true o false en este caso será un true.
    var truthyFalsy = arrayPepe.some(function(pepe) {
        return pepe.annio === "2020"
    })

// hay otros ocmo .push, .pop y .shift. shift elimina el primer elemento del array mientras que pop o push eliminan y/o agregan el elemento
//al final del array.

//.unshift agrega al principio
//Resumen:
/*
Agregar al final: .push()
Eliminar al final: .pop()

Agregar al inicio: .unshift()
Eliminar al inicio: .shift()
*/
    //si algo volver a ver clase de Js básico "recorriendo arrays con .find(), forEach() y .some()"