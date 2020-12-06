// Facil:1
class deportista {
  constructor(nombre, edad, altura, peso) {
    this.nombre = nombre;
    this.edad = edad;
    this.altura = altura;
    this.peso = peso;
  }

  getEdad() {
    console.log(this.nombre, "Edad =", this.edad);
  }
  getAltura() {
    console.log(this.nombre, "es", this.altura, "cm");
  }
  getPeso() {
    console.log(this.nombre, "peso", this.peso, "kg");
  }
}

const dep1 = new deportista("Sergio", 23, 178, 80);

//Facil:2

class persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  //Método
  compararEdad(Other) {
    if (this.edad > Other.edad) {
      console.log(this.nombre, "es mas Viejo que", Other.nombre);
    }
    if (this.edad < Other.edad) {
      console.log(this.nombre, "es mas Joven que", Other.nombre);
    }
    if (this.edad == Other.edad) {
      console.log(this.nombre, "tienen la Misma edad", Other.nombre);
    }
  }
}

const p1 = new persona("Sergio", 23);
const p2 = new persona("Cristina", 22);
const p3 = new persona("Esperanza", 23);
const p4 = new persona("Mario", 20);

//Facil:3

class libro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }

  //Método
  getTitulo() {
    console.log("Titulo:", this.titulo);
  }
  getAutor() {
    console.log("Autor:", this.autor);
  }
}

//Medio:1
class helado {
  constructor(sabor, numVirutas) {
    this.sabor = sabor;
    this.numVirutas = numVirutas;
  }
}

function heladoMasDulce(array) {
  var valorDulce = {
    'Plain': 0,
    'Vainilla': 5,
    'GalletaChocolate': 5,
    'Fresa': 10,
    'Chocolate': 10,
  };
  //guardamos en res la puntuacion conseguida mediante la suma de los elementos 
  //de la clase helado "sabor" extraido de valorDulce. 
  var res = array.map(
    (elemento) => valorDulce[elemento["sabor"]] + elemento['numVirutas']
  );
  console.log(Math.max(...res));
}

//Medio:2

class Circulo{
    constructor(radio){
        this.radio = radio
    }

    getArea(){
        console.log(Math.PI * Math.pow(this.radio,2) );
    }
    getPerimeter(){
        console.log(2* Math.PI * this.radio);
    }
}
