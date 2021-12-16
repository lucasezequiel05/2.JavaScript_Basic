// const lista2 = [
//     1,
//     2,
//     3,
//     4,
//     5,
// ];

// const mitadArrayImpar = parseInt( lista2.length / 2 );
// console.log(lista2[mitadArrayImpar]);

// const lista3 = [
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
// ];

// const mitadArrayPar = parseInt( lista3.length / 2 );
// const elemento1 = lista3[mitadArrayPar-1];
// const elemento2 = lista3[mitadArrayPar];
// const mediana = (elemento1 + elemento2)/2;

// console.log(`${elemento1} y ${elemento2} = mediana: ${mediana}.`);

// Funciones

function arrayEsPar(lista){
    if(lista.length % 2 === 0){
        return true;
    }
    if(!lista.length % 2 === 0){
        return false;
    }
}

function arrayNoEstaVacio(lista){
    if(lista.length != 0){
        return true;
    }else{
        return false;
    }

}

function ordenarArray(lista){

    function comparar(a,b){
        return a - b;
    }
    lista.sort(comparar);

}

function calcularMediana (lista){

    if(arrayNoEstaVacio(lista)){
        
        if( arrayEsPar(lista)){    
            
            ordenarArray(lista);

            const posMedio = parseInt( lista.length / 2 );
            const elemento1 = lista[posMedio-1];
            const elemento2 = lista[posMedio];
            const mediana = (elemento1 + elemento2)/2;
            return mediana;        
        } else{      
            
            if(lista.length > 1 ){
                ordenarArray(lista);
            }

            const posMedio = parseInt( lista.length / 2 );
            const mediana = lista[posMedio];
            return mediana;
        }

    }else{
        return "No hay elementos dentro de la lista";
    }
}