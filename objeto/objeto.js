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

objeto ={
    a:1,
    b:2
}

function convertirObjetoAArray (obj){
    console.log(Object.entries(obj))
}

convertirObjetoAArray(objeto);

//Facil: 2

