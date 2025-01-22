
// // declaracion de objetos json para el manejo de usuarios y movimientos

// const usuarios = {
//     1010: {
//         nombre: "diego",
//         clave: "123",
//         nCuenta: 1,
//         dinero: 0,
//     },
//     2020: {
//         nombre: "felipe",
//         clave: "456",
//         nCuenta: 2,
//         dinero: 0,
//     },
// }

// // const usuarios = {

// // }


// // menu de inicio
// do {
//     let menu = `
// --------------------------------------------
// -------------MENU PRINCIPAL-----------------
// --------------------------------------------
// (1). Crear una cuenta bancaria
// (2). Consignar dinero a una cuenta
// (3). Retirar dinero
// (4). Pagar servicios
// (5). Mostrar movimientos bancarios
// (0). Cerrar programa

// Elija una opcion a realizar: 
// `

//     opc = Number(prompt(menu))

//     switch(opc){
//         case 1:
//             console.log("(1). Crear una cuenta bancaria")
//             crearCuenta()

//             const jsonObj = JSON.stringify(usuarios, 4)
//             console.log(jsonObj)
//             break
//         case 2:
//             console.log("(2). Consignar dinero a una cuenta")
//             break
//         case 3:
//             console.log("(3). Retirar dinero")
//             break
//         case 4:
//             console.log("(4). Pagar servicios")
//             break
//         case 5:
//             console.log("(5). Mostrar movimientos bancarios")
//             break
//         case 0:
//             window.alert("Cerrando programa")
//             break
//         default:
//             window.alert("la opcion ingresada no es valida, ingrese un numero entre 0 y 5")
                
//         }
            
//     } while (opc !=0);
              
// function crearCuenta() {
//     const cedula = prompt("ingrese su cedula: ")
//     const nombre = prompt("ingrese su nombre: ")
//     const clave = prompt("ingrese su clave: ")
//     const nCuenta = Object.keys(usuarios).length + 1

//     usuarios[cedula] = {
//             nombre: nombre,
//             clave: clave,
//             nCuenta: nCuenta,
//             dinero: 0,
//         }
// }

const username = prompt("Ingrese nombre de usuario a buscar: ")

const archivo = fetch("usuarios.json");

archivo.then( async response => {
    const data = await response.json()
    const usuario = data.find(
        elemento => elemento.nombre == username
    );
    console.log(usuario)
})

async function cargarData() {
    const archivo = await fetch("usuarios.json");
    const data = await archivo.json()
    const usuario = data.find(
        elemento => elemento.nombre == username
    );
    console.log(usuario)
}