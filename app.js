//tipos de datos
"string" //string
'string tambien xd' //string
1 //int
10.1 //floats
-2.3 //floats
true //boolean
false //boolean
['joe','ryan','marta'] //arrays
[1,2,3] //arrays
[true,false,true,false] //arrays

//objetos
{
    "username": 'ryan',
    "score": 70.4,
    "hours": 14,
    "profesional": true,
    "friends": ['','','']
}

//variables (si se va a editar el dato despues) por ejemplo despues quiere cambiar el username entonces 
//seria:
//var o let
var username = "joe";
let lastname = "carter"
username = "pepe"
console.log(username)

//constantes (si el valor despues no va a cambiar mas)
const PI = 3.1415;

//operadores
//suma
// la suma de 2 strings es concatenacion y solo se puede sumar
let numberOne = 60;
let numberTwo = 100;
let result = numberOne+numberTwo;
console.log(result);
let nombre = "jhon";
let lastname = 'doe';
let completeName = nombre + ' '+ lastname;
//resta
let numberOne = 60;
let numberTwo = 100;
let result = numberOne-numberTwo;
console.log(result)
//multiplicacion
let numberOne = 60;
let numberTwo = 100;
let result = numberOne*numberTwo;
console.log(result)
//division
let numberOne = 60;
let numberTwo = 100;
let result = numberOne/numberTwo;
console.log(result)
//comparaciones 
//mayor o menor devuelve true o false
let numberOne = 60;
let numberTwo = 100;
let result = numberOne>numberTwo;
console.log(result)  
//es numberOne igual a numberTwo devuelve true o false
let numberOne = 60;
let numberTwo = 100;
let result = numberOne==numberTwo;
console.log(result)  
//es numberOne diferente a numberTwo devuelve true o false
let numberOne = 60;
let numberTwo = 100;
let result = numberOne!=numberTwo;
console.log(result)  
//es numberOne menor o igual a numberTwo devuelve true o false
let numberOne = 60;
let numberTwo = 100;
let result = numberOne<=numberTwo;
console.log(result)  

//condicionales
//if, else, elif
//dentro del if si es una comparacion de igual son 3 ===
let passwordDB = '123';
let input = 'asadasdasd';
let result = input == passwordDB;
if (result === true){
    console.log('login correcto');
} else if (result === false){
    console.log('contraseña incorrecta');
} else {
    console.log('nigga wtf?');
}

//switch
let cardType = 'debito';
switch(cardType){
    case 'debito':
        console.log('tarjeta debito');
        break;
    case 'credito':
        console.log('tarjeta credito');
        break;
    default:
        console.log('no tienes tarjeta(no coincide con ningun tipo de caso)');
}

//bucles
//while
let count = 50;
while(count > 0){
    console.log(count);
    count = count-1;
}
//for
let names = ['ryan','joe','jhon'];
console.log(names.length); //para saber la longitud del array
for(let i = 0; i<names.length; i++){
    console.log(names[i]);
}

//funciones
/*se escribe function y luego se le da un nombre ej saludar, luego parentesis que son los datos
que le entrarian a la funcion*/
function saludar(nombre){
    console.log('hello'+' '+nombre);
}
/*luego para ejecutarla una vez definida, se escribe el nombre de la funcion se llama normal*/
let nombre1 = 'markus';
saludar(nombre1);
//o tambien
saludar('markus');
//otro ejemplo
function suma(n1,n2){
    let result = n1+n2;
    console.log(result);
}
suma(1,4);