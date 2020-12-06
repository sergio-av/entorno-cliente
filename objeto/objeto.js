//Basicos:1
const votos = {
    votos_positivos: 14,
    votos_negativos: 16
}
//Funcion que recibe un objeto y realiza una resta de sus elementos

function restaVotos (obj){
    let resta = obj.votos_positivos - obj.votos_negativos;
    console.log(resta);
}


//Basicos: 2
const cubo = {
    ancho: 2,
    largo: 5,
    alto: 1
}

function calcularVolumen(obj){
    let volumen = obj.ancho * obj.alto * obj.largo;
    console.log(volumen);
}

//Basicos: 3
const cuboResto = {
    ancho: 2,
    largo: 5,
    alto: 1
}

const rest = ({ancho, largo, alto}= cuboResto).toString();

//Facil: 1

objeto1 ={
    a:1,
    b:2
}

function convertirObjetoAArray (obj){
    console.log(Object.entries(obj))
}



//Facil: 2

objeto2 = {
    a:1,
    b:2,
    c:3
}

function objeto2Array (obj){
    let array = [Object.keys(obj), Object.values(obj)];
    console.log(array);
}

//Medio: 1
objeto3 = {
    z:"q",
    w:"f"
}

function invertirClaveAValor(obj){
    let invertido = Object.fromEntries(Object.entries(obj).map(x => x.reverse()))
    console.log(invertido);
  
}


//Medio: 2 

const arrayObjetos = [{name:'Jhon', notes:[3,4,5]}]

function notaMasAlta(arrayObj){
    const expediente = arrayObj.map(function(alumno){
        alumnoMaxNote ={
            name:alumno.name,
            topNote: Math.max(...alumno.notes,0)
        }
        return alumnoMaxNote;
    })
    
    console.log(expediente)
}
 
