//Se declara un array de objetos:
const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas Personales",
        note: 7,
        credit: 5,
    },
];

//Con map() itera y crea un nuevo array, accediendo a las propiedades de cada objeto y retornando la multiplicación de estos en un nuevo array.
let notesWithCredit = notes.map((noteObject)=>{

    return noteObject.note*noteObject.credit;

});

//Con reduce() declara un acumulador y suma el valor de cada elemento.
//Retorna el valor acumulado.
const sumOfNotesWithCredit = notesWithCredit.reduce((acum=0,element)=>{
        return acum + element;
});

let credits = notes.map((noteObject)=>{
    return noteObject.credit;
});

const sumOfCredits = credits.reduce((acum=0,element)=>{
    return acum + element;
});

//Cálculo del promedio ponderado.
const promedioPonderadoNotasConCredito = sumOfNotesWithCredit/sumOfCredits;
