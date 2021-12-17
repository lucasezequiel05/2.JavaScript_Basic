const numeros = [1,10,20,30,40,50,60,70,1,20,30,55,100,20,70,90,15,300,9,25,10,10,55,36,363,55,55,22,12,15,7,50,100,80,90,70];
let arrayModa = [[10,1],[55,1],[1,1]];

// iterar el array

// cada vez que un objeto aparezca lo guardo en la lista de moda si es que no existe.
    // la forma de guardarlo va a ser dentro de un array con dos elementos: detalle del elemento y cantidad de veces que se conto.

function elementoExiste(numero){

    function criterioDeBusqueda(elemento){
        return elemento[0] === numero;
    }
    const pos = arrayModa.findIndex(criterioDeBusqueda);
    return pos >= 0 ? true : false ;
}

function modificarContador(numero){
    function criterioDeBusqueda(elemento){
        return elemento[0] === numero;
    }

    const pos = arrayModa.findIndex(criterioDeBusqueda);  
    arrayModa[pos][1] += 1;
}

function ordenarModa(arrayModa) {

    function cmpElementos (elemA, elemB){
        return elemA[1] - elemB[1];
    }

    arrayModa.sort(cmpElementos);

}



function recorrer(){
    for(let i=0; i<numeros.length; i++){

        let contador = 0;
        
        console.log(numeros[i]);
        if (!elementoExiste(numeros[i])) {
            
                let tupla = [numeros[i],contador+1];
                console.log(tupla);
                arrayModa.push(tupla);
        } else{
            modificarContador(numeros[i]);          
        }
        
    }
}
// for(let i=0; i<numeros.length; i++){

//     let contador = 0;

//     if (!elementoExiste(numeros[i])) {
//         let tupla = [numeros[i],contador+1];
//         arrayModa.pop(tupla);
//     } else {
//         modificarContador(numeros[i]);
//     }
// }

//ordenarModa(arrayModa);
// console.log(arrayModa);