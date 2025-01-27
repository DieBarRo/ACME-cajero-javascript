
// inicio base de datos

var db;
var dbName = "cajeroDB";

// Abrir la conexión con la base de datos (o crearla si no existe)
const request = window.indexedDB.open("UsuariosDB", 1);

// Configurar la estructura de la base de datos
request.onupgradeneeded = (event) => {
  const db = event.target.result;

  // Crear un almacén de objetos llamado 'usuarios'
  const usuariosStore = db.createObjectStore("usuarios", { keyPath: "nCuenta", autoIncrement: true });

  // Crear índice para buscar por correo electrónico
  usuariosStore.createIndex("cedula", "cedula", { unique: true });
};

// Manejar el éxito al abrir la conexión
request.onsuccess = (event) => {
  const db = event.target.result;

  // Función para agregar un usuario a la base de datos
  function agregarUsuario(cedula, nombre, clave, dinero) {
    const transaction = db.transaction(["usuarios"], "readwrite");
    const usuariosStore = transaction.objectStore("usuarios");

    // Agregar un nuevo usuario
    const nuevoUsuario = { cedula: cedula, nombre: nombre, clave: clave, dinero: dinero };
    const agregarRequest = usuariosStore.add(nuevoUsuario);

    agregarRequest.onsuccess = () => {
      console.log("Usuario agregado correctamente");
    };
  }

  // Función para obtener todos los usuarios de la base de datos
  function obtenerTodosLosUsuarios() {
    const transaction = db.transaction(["usuarios"], "readonly");
    const usuariosStore = transaction.objectStore("usuarios");

    // Obtener todos los usuarios
    const obtenerRequest = usuariosStore.getAll();

    obtenerRequest.onsuccess = () => {
      console.log("Todos los usuarios:",JSON.stringify(obtenerRequest.result, 4) );
    };
  }

  // Ejemplos de uso
  agregarUsuario("Juan Pérez", "juan@example.com");
  agregarUsuario("María Gómez", "maria@example.com");
  obtenerTodosLosUsuarios();

};

function iniciarBaseDatos(){
    const request = indexedDB.open(dbName, 1);

    request.onerror = (event) => {
        console.error(`Database error: ${event.target.error?.message}`);
    };

    request.onsuccess = (event) => {
        db = event.target.result;
    };

    request.onupgradeneeded = (event) => {
    const db = event.target.result;

    // Crear un almacén de objetos llamado 'usuarios'
    const usuariosStore = db.createObjectStore("usuarios", { keyPath: "nCuenta", autoIncrement: true });

    // Crear índice para buscar por numero de Documento
    usuariosStore.createIndex("cedula", "cedula", { unique: true });

    };
}


function agregarABaseDatos(){
    const transaction = db.transaction(["usuarios"], "readwrite");
    const usuariosStore = transaction.objectStore("usuarios");

    // Do something when all the data is added to the database.
    transaction.oncomplete = (event) => {
        console.log("All done!");
    };
  
    transaction.onerror = (event) => {
        console.error(`Database error: ${event.target.error?.message}`);
    };
  
    // Agregar un nuevo usuario
    const nuevoUsuario = { cedula: cedula, nombre: nombre, clave: clave, dinero: dinero };
    const agregarRequest = usuariosStore.add(nuevoUsuario);

    agregarRequest.onsuccess = () => {
      console.log("Usuario agregado correctamente");
    };
}





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

// Iniciando la base de datos
iniciarBaseDatos()

// menu de inicio
function menuInicio() {
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
            
    };
              
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
  