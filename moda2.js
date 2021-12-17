/*
- Primero: declaro el arreglo de elementos a recorrer y un diccionario como lista de objetos clave:valor vacía para contadores.
    El elemento será la llave de acceso a su contador, 
    y este último se modifica sólo llamando al índice correspondiente.

- Segundo: recorro el array con .map( function(elemento){})

- Tercero: Hay dos casos: 1) Que el elemento no exista en el diccionario y se debe crear su contador. 
2) Ya existe y hay que modificar el contador en +1.

Condición: Cuando llamo por índice a un elemento del diccionario y este no existe retorna undefined, lo que como dato booleano equivale a false.

para calcular la moda:
- Cuarto: Convierto el diccionario en un array mediante Object.entries(). A su vez ordeno el nuevo arreglo mediante
sort() pasando una funciòn de comparación que compare los contadores de cada elemento almacenado.

- Quinto: Una vez obtenido el valor de moda mediante la última posición del arreglo, paso a buscar el resto de elementos que compartan el mismo número de repeticiones.
 Declaro una variable de texto para concatenar los valores encontrados. Vuelvo a iterar con .map().
 Al final envío la variable de texto a la etiqueta correspondiente.
*/

const arreglo = [1,"kiwi",2,2,1,4,"apple",6,6,7,"kiwi",9,10,1,"kiwi"];

// let dicc = {};

// arreglo.map((elemento)=>{

//     if(dicc[elemento]) {
//         dicc[elemento] +=1;
//     } else{
//         dicc[elemento] = 1;
//     }
// });

// let nuevoArray = Object.entries(dicc).sort((elemA,elemB)=>{
//     return elemA[1]-elemB[1];
// });

// const moda = nuevoArray[nuevoArray.length-1];

function calcularModa(lista){
    
    let dicc = {};
    
    arreglo.map((elemento)=>{

        if(dicc[elemento]) {
            dicc[elemento] +=1;
        } else{
            dicc[elemento] = 1;
        }
    });

    let nuevoArray = Object.entries(dicc).sort((elemA,elemB)=>{  
        return elemA[1]-elemB[1];
    });

    const moda = nuevoArray[nuevoArray.length-1];

    //En caso de existir múltiples valores con el máximo número de repeticiones:
    //Itero el arreglo buscando el resto de elementos que coincide el número de repeticiones con el caso más alto.
    // Para mostrar los datos por pantalla declaro una variable que almacenara texto. En cada validación, concateno el elemento a la cadena de texto.
    // Al final capturo la etiqueta el contenido de la etiqueta y lo modifico con el contenido de texto almacenado.

    let texto ="Los elementos que se repiten "+moda[1]+" veces son:\n \n";

    nuevoArray.map((elemento)=>{
        if(elemento[1] === moda[1]){
            texto = texto + `${elemento[0]} \n \n`;           
        }
    });

    const mostrarResultado = document.getElementById("MostrarResultado");
    mostrarResultado.innerText = texto;
}
