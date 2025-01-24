
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

const movimientos = [
    {
        nCuenta: 1,
        movimientos: []
    },
    {
        nCuenta: 2,
        movimientos: []
    }
]

// const movimientos = [

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

    // let jsonObj = JSON.stringify(usuarios, 4)
    // let jsonMovimientos = JSON.stringify(movimientos, 4)
    
    switch(opc){
        case 1:
            console.log("(1). Crear una cuenta bancaria")
            crearCuenta()

            // jsonObj = JSON.stringify(usuarios, 4)
            // jsonMovimientos = JSON.stringify(movimientos, 4)
            // console.log(jsonObj, jsonMovimientos)
            break
        case 2:
            console.log("(2). Consignar dinero a una cuenta")
            consignarDinero()

            // jsonObj = JSON.stringify(usuarios, 4)
            // jsonMovimientos = JSON.stringify(movimientos, 4)
            // console.log(jsonObj, jsonMovimientos)

            break
        case 3:
            console.log("(3). Retirar dinero")
            retirarDinero()

            // jsonObj = JSON.stringify(usuarios, 4)
            // jsonMovimientos = JSON.stringify(movimientos, 4)
            // console.log(jsonObj, jsonMovimientos)
            break
        case 4:
            console.log("(4). Pagar servicios")
            pagoServicios()

            // jsonObj = JSON.stringify(usuarios, 4)
            // jsonMovimientos = JSON.stringify(movimientos, 4)
            // console.log(jsonObj, jsonMovimientos)
            break
        case 5:
            console.log("(5). Mostrar movimientos bancarios")
            mostrarMovimientos()

            // jsonObj = JSON.stringify(usuarios, 4)
            // jsonMovimientos = JSON.stringify(movimientos, 4)
            // console.log(jsonObj, jsonMovimientos)
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
        
        movimientos.push({
            nCuenta: nCuenta,
            movimientos: [],
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

    let confirmacion = ``

    let opcConsignar = Number(prompt(menuConsignar))

    let usuario = 0
    let movimientosUsuario = 0
    let dineroIngresar = 0

    let tipoMovimiento = "Consignar dinero"
    let descripcionMovimiento = "Consignacion de dinero a la cuenta de un usuario"

    switch(opcConsignar){
        case 1:
            console.log("(1). Consignar usando numero de Documento")

            const cedulaBuscada = Number(prompt("Digite la cedula de la cuenta a la que desea consignar: "))

            usuario = usuarios.find(
                elemento => elemento.cedula == cedulaBuscada)

            movimientosUsuario = movimientos.find(
                elemento => elemento.nCuenta == usuario.nCuenta).movimientos
            
            dineroIngresar = Number(prompt("Digite la cantidad de dinero a consignar: "))
            
            confirmacion = `
                Confirma los datos ingresados?

                Dinero a ingresar: ${dineroIngresar}
                Numero de cuenta: ${usuario.nCuenta}
                Documento de propietario de la cuenta:  ${usuario.cedula}
                `

            if (window.confirm(confirmacion)) {

                transaccion(usuario, dineroIngresar, retiro=false)
                escrituraMovimientos(movimientosUsuario, tipoMovimiento, descripcionMovimiento, dineroIngresar)
                

            }
            
            break
        case 2:
            console.log("(2). Consignar usando numero de Cuenta")

            const nCuentaBuscado = Number(prompt("Digite el numero de la cuenta a la que desea consignar: "))

            usuario = usuarios.find(
                elemento => elemento.nCuenta == nCuentaBuscado)

            movimientosUsuario = movimientos.find(
                elemento => elemento.nCuenta == usuario.nCuenta).movimientos
            
            dineroIngresar = Number(prompt("Digite la cantidad de dinero a consignar: "))

            confirmacion = `
                Confirma los datos ingresados?

                Dinero a ingresar: ${dineroIngresar}
                Numero de cuenta: ${usuario.nCuenta}
                Documento de propietario de la cuenta:  ${usuario.cedula}
                `
            

            if (window.confirm(confirmacion)) {

                transaccion(usuario, dineroIngresar, retiro=false)
                escrituraMovimientos(movimientosUsuario, tipoMovimiento, descripcionMovimiento, dineroIngresar)

            }

            
            break
        case 0:
            break
        default:
            window.alert("la opcion ingresada no es valida, ingrese un numero entre 0 y 2")        
        }
}


function retirarDinero() {

    let confirmacion = ``

    let usuario = 0
    let movimientosUsuario = 0
    let dineroRetirar = 0

    let tipoMovimiento = "Retiro dinero"
    let descripcionMovimiento = "Retiro de dinero de la cuenta del usuario"

    const nCuentaBuscado = Number(prompt("Digite el numero de la cuenta: "))
    const claveBuscada = prompt("Digite la clave de la cuenta: ")

    usuario = autenticacion(nCuentaBuscado, claveBuscada)

    movimientosUsuario = movimientos.find(
        elemento => elemento.nCuenta == usuario.nCuenta).movimientos

    dineroRetirar = Number(prompt("Digite la cantidad de dinero a retirar: "))

    confirmacion = `
                Confirma los datos ingresados?

                Dinero a retirar: ${dineroRetirar}
                Numero de cuenta: ${usuario.nCuenta}
                Documento de propietario de la cuenta:  ${usuario.cedula}
                `
            

    if (window.confirm(confirmacion)) {

        transaccion(usuario, dineroRetirar)
        escrituraMovimientos(movimientosUsuario, tipoMovimiento, descripcionMovimiento, dineroRetirar)

    }


}


function pagoServicios() {

    const menuServicios= `
--------------------------------------------
-------------MENU SERVICIOS-----------------
--------------------------------------------
(1). Pagar recibos de Energia
(2). Pagar recibos de Agua
(3). Pagar recibos de Gas
(0). Volver a menu principal

Elija una opcion a realizar: 
`

    let confirmacion = ``

    let opcServicios = Number(prompt(menuServicios))

    let usuario = 0
    let dineroPago = 0
    let numeroReferencia = 0
    let servicio = ""
    
    let movimientosUsuario = 0
    let tipoMovimiento = "Pago servicios"
    let descripcionMovimiento = "Pago de servicios desde la cuenta del usuario"

    const nCuentaBuscado = Number(prompt("Digite el numero de la cuenta: "))
    const claveBuscada = prompt("Digite la clave de la cuenta: ")

    usuario = autenticacion(nCuentaBuscado, claveBuscada)

    movimientosUsuario = movimientos.find(
        elemento => elemento.nCuenta == usuario.nCuenta).movimientos

    switch(opcServicios){
        case 1:
            console.log("(1). Pago recibo de Energia")

            servicio = "Energia"
            tipoMovimiento = "Pago factura Energia"
            dineroPago = Number(prompt("Digite la cantidad de dinero a pagar: "))
            numeroReferencia = Number(prompt("Digite el numero de referencia del servicio: "))


            confirmacion = `
                        Confirma los datos ingresados?

                        Dinero a pagar: ${dineroPago}
                        Servicio a pagar: ${servicio}
                        Numero de referencia del servicio:  ${numeroReferencia}
                        `            

            if (window.confirm(confirmacion)) {

                transaccion(usuario, dineroPago)
                escrituraMovimientos(movimientosUsuario, tipoMovimiento, descripcionMovimiento, dineroPago, numeroReferencia)

            }
            
            break
        case 2:
            console.log("(2). Pago recibo de Agua")

            servicio = "Agua"
            tipoMovimiento = "Pago factura Agua"

            dineroPago = Number(prompt("Digite la cantidad de dinero a pagar: "))
            numeroReferencia = Number(prompt("Digite el numero de referencia del servicio: "))


            confirmacion = `
                        Confirma los datos ingresados?

                        Dinero a pagar: ${dineroPago}
                        Servicio a pagar: ${servicio}
                        Numero de referencia del servicio:  ${numeroReferencia}
                        `           

            if (window.confirm(confirmacion)) {

                transaccion(usuario, dineroPago)
                escrituraMovimientos(movimientosUsuario, tipoMovimiento, descripcionMovimiento, dineroPago, numeroReferencia)

            }
            
            break
        
        case 3:
            console.log("(3). Pago recibo de Gas")

            servicio = "Gas"
            tipoMovimiento = "Pago factura Gas"

            dineroPago = Number(prompt("Digite la cantidad de dinero a pagar: "))
            numeroReferencia = Number(prompt("Digite el numero de referencia del servicio: "))


            confirmacion = `
                        Confirma los datos ingresados?

                        Dinero a pagar: ${dineroPago}
                        Servicio a pagar: ${servicio}
                        Numero de referencia del servicio:  ${numeroReferencia}
                        `
                    
            if (window.confirm(confirmacion)) {

                transaccion(usuario, dineroPago)
                escrituraMovimientos(movimientosUsuario, tipoMovimiento, descripcionMovimiento, dineroPago, numeroReferencia)

            }
            
            break
        case 0:
            break
        default:
            window.alert("la opcion ingresada no es valida, ingrese un numero entre 0 y 3")        
        }
}

// agregar las validaciones de numeros y negativos aqui
function transaccion(usuario, dinero, retiro = true) {

    if (retiro) {
        usuario.dinero -= dinero
    } else {
        usuario.dinero += dinero
    }
}


function escrituraMovimientos(movimientosUsuario, tipoMovimiento, descripcionMovimiento, valor, referencia = null) {

    if (referencia === null) {
        referencia = Object.keys(movimientosUsuario).length + 1
    }

    movimientosUsuario.push(
        {
            tipoMovimiento: tipoMovimiento,
            referencia: referencia,
            descripcion: descripcionMovimiento,
            valor: valor
        }
    )
}



function autenticacion(nCuenta, clave) {

    let usuario = usuarios.find(
        elemento => (elemento.nCuenta == nCuenta) && (elemento.clave == clave))

    return usuario

}

function mostrarMovimientos() {

    let usuario = 0
    let movimientosUsuario = 0

    const nCuentaBuscado = Number(prompt("Digite el numero de la cuenta: "))
    const claveBuscada = prompt("Digite la clave de la cuenta: ")

    usuario = autenticacion(nCuentaBuscado, claveBuscada)

    movimientosUsuario = movimientos.find(
        elemento => elemento.nCuenta == usuario.nCuenta).movimientos

    movimientosUsuario.forEach(function(movimiento) {
        console.log(`
Tipo: ${movimiento.tipoMovimiento}; Referencia: ${movimiento.referencia};
descripcion: ${movimiento.descripcion};
valor: ${movimiento.valor};
---------------------------
            `);
        });

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