// 03 - ESTRUCTURAS DE DATOS
// Santiago Camacho Camino
// 2025/04/24


/**
 *  Muestra ejemplos de creación de todas las estructuras soportadas por defecto
 *  en tu lenguaje.
 *  Utiliza operaciones de inserción, borrado, actualización y ordenación.
 */

//Arrays

let frutas=["Manzanas", "Peras", "Uvas", "Mangos", "Bananas"];
console.log(frutas);
/*Inserción*/
frutas.push("Sandías"); //Agrega al final del array
frutas.unshift("Melones"); //Agrega al comienzo
frutas.splice(2, 0, "Naranjas"); //Agregar elementos entre indices
console.log(frutas);
//Borradso 
frutas.pop(); //elimina el último elemento
frutas.shift(); //elimina el primer eleneto
frutas.splice(0, 1); //Eliminar elementos atraves de los indices
console.log(frutas);
//Actualización
frutas[0]="Manzanaz Rojas";
console.log(frutas);
//Ordenación
frutas.sort();
console.log(frutas);

//Objetos

let tren = {
    marca: "Toshiba",
    anyoFabricación: 1956,
}
//Inserción 
tren.pasajeros = 50;
//Borrado 
delete tren.marca;
//Actualización
tren.anyoFabricación=2000;

// Crea una agenda de contactos por terminal.
//   Debes implementar funcionalidades de búsqueda, inserción, actualización
//   y eliminación de contactos.
//   Cada contacto debe tener un nombre y un número de teléfono.
//   El programa solicita en primer lugar cuál es la operación que se quiere realizar,
//   y a continuación los datos necesarios para llevarla a cabo.
//   El programa no puede dejar introducir números de teléfono no numéricos y con más
//   de 11 dígitos (o el número de dígitos que quieras).
//   También se debe proponer una operación de finalización del programa.


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});

let listaContactos=[];

function menu(){
    console.log(
        `-------------Selecciona una Opción-----------
        1. Agregar Contacto
        2. Buscar un Contacto
        3. Actualizar un Contacto
        4. Eliminar un Contacto
        5. Salir 
        `
    )
    rl.question('Selecionna una opción \t', opciones)
}


function opciones(opcion){
    switch(opcion){
        case '1':
           agregar();
           break;
        case '2':
            buscar();
            break;
        case '3':
            actualizar();
            break;
        case '4':
            eliminar();
            break
        case '5':
            rl.close();
            break;
        default:
            rl.question('Seleccione una opción ', opciones);
            
    }
}

menu();
function agregar(){
    rl.question('Introduce el nombre del contacto: \t', (nombre) => {
        rl.question('Introduce su número de telefono: \t', (numero) =>{
            if(/^\d{1,11}$/.test(numero)){
            // / / - Delimitadores que encierran la expresión regular

            // ^ - Indica el inicio de la cadena

            // \d - Coincide con cualquier dígito (equivalente a [0-9])

            // {1,11} - Especifica que debe haber entre 1 y 11 dígitos

            // $ - Indica el final de la cadena
                listaContactos.push({ nombre:nombre, numero:numero});
                console.log("Se ha agregado el numero correctamente")
                menu();
            }else{
                console.log("El número debe tener 11 caracteres y solo numeros");
                agregar();
            }
        })
    })
}

function eliminar(){
    rl.question('¿Qué contacto deseas eliminar? \t', (nombre) =>{
        const contactoActualizado=listaContactos.filter(contacto => !contacto.nombre.includes(nombre));
        if(contactoActualizado.length == 0){
            console.log("No se ha encontrado ningún contacto con tus especificaciones")
        }else{
            listaContactos=contactoActualizado;
            console.log("Contacto eliminado correctamente")
            console.log("Lista de contactos: ", listaContactos);
        }
        menu();
    })

}

function buscar(){
    rl.question('¿Que contacto deseas buscar? \t', (nombre) =>{
        const contactoBuscado=listaContactos.filter(contacto => contacto.nombre.includes(nombre));
        if(contactoBuscado.length == 0){
            console.log("No se ha encontrado ningún contacto con tus especificaciones")
        }else{
            console.log('Aquí tienes el contacto buscado: ', contactoBuscado);
        }
        menu();
    })

}

function actualizar(){
    rl.question('¿Qué contacto deseas actualizar? \t', (nombre) =>{
        nombre=nombre.toLowerCase();
       for(let indice in listaContactos){
        let nombreLowerCase=listaContactos[indice].nombre.toLowerCase();
        if(nombreLowerCase.includes(nombre)){
            console.log(listaContactos[indice]);
            actualizarContacto(indice);
           
        }else{
            console.log("No se ha encontrado ningúna concidencia")
        }
       }
    
    });
    menu();
}

function actualizarContacto(indice){
    rl.question('Nuevo nombre: \t', (nombreNuevo) =>{
        rl.question('Nuevo número: \t', (numeroNuevo) =>{
            if(/^\d{1,11}$/.test(numeroNuevo)){
                listaContactos[indice].nombre=nombreNuevo;
                listaContactos[indice].numero=numeroNuevo;
                console.log("Contacto actualizado");
            }else{
                console.log("El número debe tener 11 caracteres y solo numeros");
                agregar();
            }
          
        })
    } )
}