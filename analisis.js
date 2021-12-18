//Utils

//Para obtener la mediana: Conocer si la lista es de cant. de elementos pa o impar. 
function esPar(numero){
    return numero % 2 === 0 ? true : false;
}

//Calcular mediana de salarios
function medianaSalarios(lista){

    const mitad = lista.length/2;

    if(esPar){
        const elemento1 = lista[mitad-1];
        const elemento2 = lista[mitad];
        const mediana = (elemento1+elemento2)/2;
        return mediana;
    }else{
        const mediana = lista[mitad];
        return mediana; 
    }
}

//Calcular promedio
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce((valorAcumulado=0, nextValue)=>{
        return valorAcumulado += nextValue; 
    });  
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}

//-------------

//Lista de objetos para trabajar
console.log(colombia);

// Obtener toda la lista solo de salarios
const salarios = colombia.map((persona)=>{
    return persona.salary;
});

//Ordenar la lista
const salariosSorted = salarios.sort((salarioA, salarioB)=>{
    return salarioA - salarioB;    
});

//Mediana General
const medianaGeneral = medianaSalarios(salariosSorted);

//Mediana del top 10%
// splice( , ) 
//Primero recibe la posición donde se indica extraer (excluyendo esta),
// y cuantas posiciones quitar). 

//Obtener los salarios top 10%
//Indico el 90% de la lista para solo quitar el 10.
// Del total de la longitud solo quito la diferencia.
const spliceStart = (salariosSorted.length*90)/100;
const spliceEnd = salariosSorted.length - spliceStart;
const salariosTop10 = salariosSorted.splice(spliceStart,spliceEnd);

const medianaTop10 = medianaSalarios(salariosTop10);

console.log(
    medianaGeneral +"\n" + medianaTop10
);