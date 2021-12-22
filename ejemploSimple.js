//Ejemplo simple para Recibir datos, guardarlos y mostrarlos.

//Donde se guardan los datos
let arreglo = [];

// Recibir los datos y guardarlos en el formato de objeto
function onclickEjecutar(){
    console.log("Inicia función");
    
    //Recibo datos
    let input = document.getElementById("inputDato");
    let inputDato = input.value;

    //Organizo la estructura del objeto
    let dato = {"valor" : inputDato};
    
    //Guardo el objeto
    arreglo.push(dato);
    console.log("Proceso ejecutado. Dato Ingresado: "+dato["valor"]);
}

//Mostrar lo almacenado
function onclickMostrar(){
    
    let texto = "";
    
    arreglo.map((elemento)=>{
        console.log(`${elemento["valor"]}`);
        
        texto += `${elemento["valor"]} \n `
        
    });

    let mensaje = document.getElementById("mensaje");
    mensaje.innerText = texto;
}
   
