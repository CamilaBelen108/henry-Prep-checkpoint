
// Funciones

function menorMayor(numeros) {
  // Escribi una función llamada menorMayor que tome como entrada un arreglo de números y devuelva un arreglo 
  // que contenga el menor número del arreglo en la posición cero y el mayor número del arreglo en la posición 1.
  // Ej: menorMayor([4, 6, 1, 7, 15]) // retorna [1, 15]
  return numeros.reduce(
    (acc, curr) => {
        return [
            Math.min(curr, acc[0]), 
            Math.max(curr, acc[1])
        ];
    }, [Number.MAX_VALUE, Number.MIN_VALUE]
);
}
function stringMasLarga(strings) {
  // Escribe una función llamada stringMasLarga, que tome un arreglo de strings llamado 'strings'
  // tu función debe retornar el string más largo que hay en el arreglo
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); // returns 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); // returns 'JavaScript'
  var masLargo=strings[i]= ' ';
for (var i=0; i<strings.length;i++){
  if(masLargo.length<strings[i].length){
    masLargo=strings[i]
  }
}return masLargo;
}

function buscarAmigo(amigos, nombre) {
  // Escribe una funcion que reciba un array de amigos (objetos) y un nombre (string).
  // Tu función debe devolver el amigo que coincida con el nombre recibido por argumento.
  // Cada amigo tiene las propiedades nombre y edad.
  // Ej:
  // retorna { nombre: 'toni', edad: 33 };
  return (amigos[nombre]);
}

function sumArray(array, n) {
  // Escribir un algoritmo que, dada un arreglo de números ordenados y un número n, 
  // te devuelva true si alguna combinación de dos números cualesquiera suman n, y devuelva false si ninguna combinación
  // de dos números sumados da como resultado el número n.
  // Ej:
  // sumArray([2,5,7,10,11,15,20], 13)  // retorna true     2+11 suman 13
  // sumArray([2,5,7,10,11,15,20], 14)  // retorna false
  //pista: podes usar bucles anidados;
  return array.some((item, i) => array.slice(i+1).includes(n-item));
}


function pluck(array, propiedad) { 
  // Escribi una función llamada pluck,
  // que recibe un array de objetos (array) y el nombre de una propiedad (propiedad).
  // La función va a devolver un nuevo arreglo con solo los
  // valores dentro de la propiedad recibida, por ejemplo:
  // ['TV LCD', 'Computadora']
  //var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
    array.map=function(propiedad){
    var nuevoArray={};
    nuevoArray[propiedad];
    return nuevoArray;
}

// =======================================================================


function crearClasePersona() {
  // Crear una clase para construir objeto de tipo Persona.
  // el constructor debe recibir:
  // nombre (string) , edad (integer) , hobbies (array de strings) , amigos (array de objetos)
  // Esta funcion debe retonar la clase Persona.
      function Persona(nombre,edad,hobbies,amigos)
      {this.nombre=nombre;
      this.edad=edad;
      this.hobbies=hobbies;
      this.amigos=amigos;
      }return Persona;
    }
    addFriend(nombre, edad) {
      // el metodo addFriend recibe un string nombre y un entero edad y debe agregar un objeto:
      //  al arreglo de amigos de la persona.
      // no debe retornar nada.
      Persona.prototype.arraydeAmigos=function(){
        push ([amigos.nombre=amigos.nombre, 
          amigos.edad=amigos.edad])};
    }
    addHobby (hobby) {
      //este método debe agregar un hobby (hobby) al arreglo de hobbies de la persona.
      //no debe retornar nada.
     Persona.prototype.hobbies.push=function(){
       push('hobby');
     }
    }
    getFriends() {
      // Escribe una función que retorne un arreglo con sólo los nombres del arreglo de amigos
      // de la persona.
      // Ej:
      // persona.getFriends() // retorna ['toni', 'Leo', 'Manu']
     this.amigos.prototype.map=function(element){
       var nuevoArray={};
       nuevoArray[element];
       return nuevoArray;
     }
    }

    getHobbies() {
      // Escribe una función que retorne un arreglo con los hobbies de la persona
      // Ej:
      // persona.getHobbies() // retorna ['correr', 'dormir', 'nadar']
      Array.prototype.slice.call(arguments);
      }

    getPromedioEdad() {
      // Escribe una función que retorne el promedio de edad de los amigos de una persona
      // ej, si la persona tuviera estos amigos:
       //{
       //  amigos: [{
       //    nombre: 'toni',
        //  edad: 33,
        // }, {
       //    nombre: 'Emi',
       //    edad: 25
       //  }]
       //}
      //persona.getPromedioEdad() // retorna 29
      Persona.prototype.edadPromedio=function(){
        var suma=0;
        for(var i=0;i<Persona.amigos.length;i++){
          suma=suma+Persona.amigos[i].edad;
        }return suma/Persona.amigos.length;
    }
    }

/* ====================== EXTRA CREDIT ===================== */
// Este ejercicio no cuenta en el puntaje del checkpoint
// pero si llegas hasta aca y lo haces quiere decir que venis super bien!

  //function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
   //var productos = [{
    // price: 100,
   //  name: 'tv'
   //}, {
    // price: 50,
    // name: 'phone'
   //}, {
    // price: 30,
    // name: 'lamp'
  //}]
  // productos.filtrar(function(p) {
    // return p.price >= 50;
   //}) => [{price: 100, name:'tv'}]
//};
// No modifiques nada debajo de esta linea

module.exports = {
  sumArray,
  menorMayor,
  stringMasLarga,
  buscarAmigo,
  pluck,
  crearClasePersona,
};
