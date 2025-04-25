// 02 - FUNCIONES Y ALCANCE
// Sant iago Camacho Camino
// 15/05/2023   

/** 
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
*/

/**
 * Crea ejemplos de funciones básicas que representen las diferentes
 * posibilidades del lenguaje:
 * Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 */
//Se las conoce como Función Nombrada -> Named Function
function suma(){
    console.log('sumando')
}
suma();
//Este tipo de funciones, sin nombre se las conocen como Funciones Anónimas -> Anonymous Function
let resta = function(){
    console.log('restando')
}
resta();
//Las funciones Named Function Expression, son funciones expresadas no declaradas
//y que se guardan en una variable
let multiplicacion = function multiplicacion(){
    console.log('multiplicando')
}
multiplicacion();
//La funciones flecha -> Fat Arrow Function, son una versión reducida de las funciones
//normales o de las anonimas, por lo general se usan para realizar calculos
let division = () => {
    console.log('dividiendo')
}
division();

//
//Además este tipo de funciones pueden recibir parámetros
let sumaConParametros = (a,b) => {
    console.log(a+b);
}
sumaConParametros(10,20);

//También pueden devolver un valor
let multiplicacionConParametros = (a,b) => {
    return a*b;
}
console.log(multiplicacionConParametros(10,20));


/**
 * Comprueba si puedes crear funciones dentro de funciones.
 */
function funcion1(){
    let nombre= "Santiago";
    function funcion2(){
        console.log("Esta es mi función 2 dentro de otra función, mi nombre es " + nombre);
    }
    funcion2();
    console.log("Esta es mi función 1, mi nombre es ", nombre);
}
funcion1();



/**
 * Pon a prueba el concepto de variable LOCAL y GLOBAL.
 */

//Esta sería mi variable global
let variableGlobal = "Santiago estoy fuera de la función";
function alcanceVariables(){
  variableGlobal = "Santiago estoy dentro de la función";
  console.log(variableGlobal);
  let variableLocal = "Santiago estoy fuera de la función";
  //Es una variable local dentro de la función, sin embargo si dada la casualidada
  //de olvidarnos de asignarle a una variable, Javascript automaticamente la eleva al ámbito global
  //y por lo tanto se podrá acceder desde cualquier lado
  console.log(variableLocal);
}
console.log("Esta es mi variable global antes de pasar por la función:",variableGlobal);
alcanceVariables();
console.log("Esta es mi variable global pasada por la función:",variableGlobal);
//console.log("Esta es mi variable local fuera de la función:",variableLocal); //Nos dara error


/**
 * Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 */

let lista = [6, 56, 565, 12, 8, 899, 2];

let numeroAleatorio = (lista) =>{
    console.log("Este es un número aleatorio de la lista: ", lista[Math.floor(Math.random() * lista.length)]);
}

numeroAleatorio(lista);


/**
 * * DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 */

let extra=(cadena1, cadena2) =>{
    let contador = 0;
    for(let i=1; i<=100; i++){
        if( i%3==0 && i%5==0){
            console.log(cadena1+cadena2);           
        }else if(i%5==0){
            console.log(cadena2);
        }else if(i%3==0){
           console.log(cadena1);
        }else{
            console.log(i);
            contador++;
        }
        
    }
    return contador;

}
console.log("Numeroos devueltos: ",extra("Hola", "Mundo"));



