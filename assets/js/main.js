//Ejercicios extra JS ES6

//Crear un loop "for" que imprima 100 primeros numeros naturales
/*
for (i=1; i<=100; i++) {
  console.log(i)
  document.write(`<br> Numero natural ${i}º es: ${i}</br>`);
};
*/

/*como el loop repite ciclos, el document.write tiene que estar dentro de él
sino solo imprime el resultado final de i que es 100*/
//Crear un loop que recorra e imprima los elementos de un "Array"
/*
var autos = ["mazda", "volvo", "chevrolet", "ferrari","changuan"];

let marca = "";

for (let i = 0; i < autos.length; i++){
    marca = autos[i];
    //document.write(`auto es: ${i}`);
    document.write(`<br>${marca}</br>`);
}
*/

//Crear un loop For que haga lo mismo anterior pero con un Array de objetos. ("Objects Array").
//Atravesar el array para encontrar elementos de objetos
/*
var autos = [{"marca":"mazda", 
            "color":"rojo",
            "dueño":"Juan"},

            {"marca":"volvo",
            "color":"azul",
            "dueño":"maria"}, 

            {"marca":"chevrolet",
            "color":"verde",
            "dueño":"Pedro"}, 

            {"marca":"ferrari",
            "color":"rojo",
            "dueño":"Pepe"},

            {"marca":"changuan", 
            "color":"caca",
            "dueño":"Sakayama"}];


//i es la abreviacion de "index". Importante.
for (i = 0; i < autos.length; i++){

    var marcas = autos[i].marca;

    var color = autos[i].color;

    var dueno = autos[i].dueño;

    document.write(`<br>El auto es marca ${marcas} y el color es ${color}</br>`);

    document.write(`<br>Este auto es de ${dueno}</br>`);
}

*/


//Crear un loop "while" que haga lo mismo que el for de 100 numeros anterior
/*
let texto = "";
let i = 0;

while (i < 100) {
  texto += "numero es " + i;
  i++;
  document.write(`<br>${i}</br>`);
};
*/

//Eloquent JS. Program structure.
//Hacer un programa imprima un triangulo de gatos. 5 ciclos.
/*
var gato = "";

for (i = 0; i < 7; i++){
    gato = gato + "#";
    document.write(`<h3>${gato}</h3>`);
};
*/
//Ejercicio Fizz-Buzz
/*
for (i=1; i<=100; i++) {

    if (i%15 == 0){
        document.write(`<br>FizzBuzz</br>`);
    } else if (i%3 == 0){
        document.write(`<br>Fizz</br>`);
    } else if (i%5 == 0){
        document.write(`<br>Buzz</br>`);
    } else {
        document.write(`<br>${i}</br>`);
    }
  };
*/
//Cheessboard
/*
var gato = "";

var gato2 = "";

for (i = 0; i < 9; i++){
    gato = " " + "#" + " " + "#" + " " + "#" + " " + "#" ;
    gato2 = "#" + " " + "#" + " " + "#" + " " + "#" + " ";
    document.write(`<p>${gato}</p>`);
    document.write(`<p>${gato2}</p>`);
};
*/
/*

var gato = ["# #"]
var gato2 = [" "]

for (i = 0; i < 2; i++){
    
    document.write("<p>" + " " + gato + "</p>");
   
    document.write("<p>" + gato + " " + "</p>");
 
};

*/

//Loop While. Programa que calcula tablas pero basado en loop While.
/*
let numero = "0";
let numero_base = parseInt(prompt("ingresa el numero y te dare la tabla de multiplicar de ese numero"));

while (numero <=10){
    document.write(`<p>Tabla del ${numero_base} x ${numero} es = ${numero * numero_base}</p>`);
    numero++;
}
*/

//Arrays y Objetos. + Loops For y While.
/*
let perros = ["Luty", "Dianita", "Milo", "Mancha", "Princesita", "Luka", "Costilla"]

document.write(`<p>${perros[0]}</p>`);
document.write(`<p>${perros}</p>`);
document.write(`<p>${perros.length}</p>`);

*/

/*
//Multiplicar arrays
let numeros = [1,2,3,4,5,6,7,8,9,10];

let numero = [2];

for (let i = 0; i < numeros.length; i++) {
    //multiplica
    numeros[i] = numeros[i] * numero;  
};

document.write(`<p>${numeros}</p>`); 
*/

//Journal array de objetos. Obtenido de weresquirrel.
//
/*
let journal = [];

function addEntry(evento, objetivo) {

   journal.push({evento, objetivo});
   //const myJSON = JSON.stringify(journal);
   //document.write(`<p>${journal[0].evento[0]}</p>`)//de esta primera manera imprimimos propiedades evento
   console.log(journal);
   document.getElementById("ejercicio01").innerHTML = `<p>${journal[0].evento[0]}</p>`//de esta segunda manera tb imprimimos propiedades 
   document.getElementById("ejercicio02").innerHTML = `<p>${journal[0].evento[1]}</p>`

   document.getElementById("ejercicio03").innerHTML = `<p>${journal[1].objetivo[0]}</p>`
   
};

addEntry(["correr", "30min", "nublado", "mañana", "poca gente"], true);

addEntry(["caminar", "25min", "sol", "media-mañana", "mucha gente"], false);
*/
//addEntry(["correr", "30min", "despejado", "tarde", "mucha gente"], false);


//Clases. Son una clase especial de funciones, permiten heredar caracterisiticas.
//Clases no son "hoisted". primero declarar luego accesar. Esta es la primera forma de definir
//Declaracion de clase. ES5 habia que declararlas con prototype, que es el ancestro de funciones, objetos y metodos.
//1. Definimos la clase
/*
class Rectangle {
    constructor(height, width){//Constructor crea e inicializa un objeto creado con la clase
        this.height = height;
        this.width = width;
    }

    //2.Getter. Falta un metodo Setter para modificar la funcion.
    get area() {
        return this.calcArea();
    }
    //3.Method
    calcArea() {
        return this.height * this.width;
    }
}

const cuadrado = new Rectangle(10, 10);//Instanciamos la clase y esta es hija

console.log(cuadrado.area);

//Expresion de clase. Segunda forma de definirlas es dentro de una variable.
//Pueden ser anonimas o nombradas

//Anonima
let rectangulo = class {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
};

//Nombrada
let Rectangulo = class Rectangulo2{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
};

*/
//Callbacks

//const getName = callback => callback('jhon doe')
//getName(name => console.log(name))

//Promesa basica
/*
let quince = Promise.resolve(15);
quince.then(value => console.log(`Obtuve ${value}`));
*/

//Promesa

function storage(nest, name) {
   return new Promise(resolve => {
     nest.readStorage(name, result => resolve(result));
   });
}
storage(bigOak, "enemies")
.then(value => console.log("Got", value));

//Ejercicio 

console.log("ejercicios 01");
