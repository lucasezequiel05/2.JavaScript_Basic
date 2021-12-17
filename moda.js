const numeros = [10,20,5,30,5,10,50,100];
//let arrayModa = [[10,1],[55,1],[1,1]];
let arrayModa = [];
// iterar el array

// cada vez que un objeto aparezca lo guardo en la lista de moda si es que no existe.
    // la forma de guardarlo va a ser dentro de un array con dos elementos: detalle del elemento y cantidad de veces que se conto.

/*
Antes de empezar tengo una lista y una lista vacia donde almacenare los valores y su contador
- Primero: Mientras recorro el array
- Compruebo si ese elemento ya esta almacenado en el array de moda,
- Si no es asì, declaro una tupla con el elemento, contador. La agrego al array moda con push.
- Si ya existe busco su posición con findIndex y modifico el acumulador a +=1
- Ordeno el array de contadores con una función de comparación que compare el segundo índice de los elementos.

*/

function elementoExiste(numero){

    function criterioDeBusqueda(elemento){
        return elemento[0] === numero;
    }
    const pos = arrayModa.findIndex(criterioDeBusqueda);
    return pos >= 0 ? true : false ;
}

// La función de búsqueda es desarrollada dependiendo de que se busca y como esta armada la estructura.
function modificarContador(numero){
    function criterioDeBusqueda(elemento){
        return elemento[0] === numero;
    }

    const pos = arrayModa.findIndex(criterioDeBusqueda);  
    arrayModa[pos][1] += 1;
}

// La función de comparación se desarrolla dependiendo de la estructura u objetos que se manejan.
function ordenarModa(arrayModa) {

    function cmpElementos (elemA, elemB){
        return elemB[1] - elemA[1];
    }

    arrayModa.sort(cmpElementos);
}

function recorrer(numeros){
    for(let i=0; i<numeros.length; i++){

        let contador = 0;
        
        if (!elementoExiste(numeros[i])) {          
                let tupla = [numeros[i],contador+1];
                arrayModa.push(tupla);
        } else{
            modificarContador(numeros[i]);          
        }
    }
}

// -------PROGRAMA PRINCIPAL------

recorrer(numeros);
ordenarModa(arrayModa);
console.log(arrayModa);