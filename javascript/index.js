
// declaracion de objetos json para el manejo de usuarios y movimientos

const usuarios = [
    {   
        cedula: "1010",
        nombre: "diego",
        clave: "123",
        nCuenta: 1,
        dinero: 0,
    },
    {   
        cedula: "2020",
        nombre: "felipe",
        clave: "456",
        nCuenta: 2,
        dinero: 0,
    },
]

// const usuarios = [

// ]


// menu de inicio
do {
    const menu = `
--------------------------------------------
-------------MENU PRINCIPAL-----------------
--------------------------------------------
(1). Crear una cuenta bancaria
(2). Consignar dinero a una cuenta
(3). Retirar dinero
(4). Pagar servicios
(5). Mostrar movimientos bancarios
(0). Cerrar programa

Elija una opcion a realizar: 
`

    var opc = Number(prompt(menu))

    switch(opc){
        case 1:
            console.log("(1). Crear una cuenta bancaria")
            crearCuenta()

            const jsonObj = JSON.stringify(usuarios, 4)
            console.log(jsonObj)
            break
        case 2:
            console.log("(2). Consignar dinero a una cuenta")
            consignarDinero()

            break
        case 3:
            console.log("(3). Retirar dinero")
            break
        case 4:
            console.log("(4). Pagar servicios")
            break
        case 5:
            console.log("(5). Mostrar movimientos bancarios")
            break
        case 0:
            window.alert("Cerrando programa")
            break
        default:
            window.alert("la opcion ingresada no es valida, ingrese un numero entre 0 y 5")
                
        }
            
    } while (opc !=0);
              
function crearCuenta() {
    const nombre = prompt("ingrese su nombre: ")
    const cedula = prompt("ingrese su cédula: ")
    const clave = prompt("ingrese su clave: ")
    const nCuenta = Object.keys(usuarios).length + 1

    const confirmacion = `
        Confirma que los datos ingresados son correctos?

        Nombre: ${nombre}
        Cédula: ${cedula}
        Clave:  ${clave}
        `

    if (window.confirm(confirmacion)) {

        usuarios.push({
            cedula: cedula,
            nombre: nombre,
            clave: clave,
            nCuenta: nCuenta,
            dinero: 0,
        }) 
    }

}

function consignarDinero() {

    const menuConsignar = `
--------------------------------------------
-------------MENU CONSIGNAR-----------------
--------------------------------------------
(1). Consignar usando numero de Documento
(2). Consignar usando numero de Cuenta
(0). Volver a menu principal

Elija una opcion a realizar: 
`

    let opcConsignar = Number(prompt(menuConsignar))

    switch(opcConsignar){
        case 1:
            console.log("(1). Consignar usando numero de Documento")

            
            break
        case 2:
            console.log("(2). Consignar usando numero de Cuenta")

            const nCuentaBuscado = Number(prompt("Digite el numero de la cuenta a la que desea consignar: "))

            const usuario = usuarios.find(
                elemento => elemento.nCuenta == nCuentaBuscado)
            
            const dineroIngresar = Number(prompt("Digite la cantidad de dinero a consignar: "))
            
            const confirmacion = `
                Confirma los datos ingresados?

                Dinero a ingresar: ${dineroIngresar}
                Numero de cuenta: ${usuario.nCuenta}
                Documento de propietario de la cuenta:  ${usuario.cedula}
                `

            if (window.confirm(confirmacion)) {

                usuarios.dinero += dineroIngresar

            }
            
            break
        case 0:
            break
        default:
            window.alert("la opcion ingresada no es valida, ingrese un numero entre 0 y 2")        
        }
}

// // Funciones requeridas para leer y buscar usuario en un archivo json

// const username = prompt("Ingrese nombre de usuario a buscar: ")

// const archivo = fetch("usuarios.json");

// archivo.then( async response => {
//     const data = await response.json()
//     const usuario = data.find(
//         elemento => elemento.nombre == username
//     );
//     console.log(usuario)
// })

// async function cargarData() {
//     const archivo = await fetch("usuarios.json");
//     const data = await archivo.json()
//     const usuario = data.find(
//         elemento => elemento.nombre == username
//     );
//     console.log(usuario)
// }