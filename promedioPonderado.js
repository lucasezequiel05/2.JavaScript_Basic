
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

let notesWithCredit = notes.map((noteObject)=>{

    return noteObject.note*noteObject.credit;

});

const sumOfNotesWithCredit = notesWithCredit.reduce((acum=0,element)=>{
        return acum + element;
});

let credits = notes.map((noteObject)=>{
    return noteObject.credit;
});

const sumOfCredits = credits.reduce((acum=0,element)=>{
    return acum + element;
});

const promedioPonderadoNotasConCredito = sumOfNotesWithCredit/sumOfCredits;
