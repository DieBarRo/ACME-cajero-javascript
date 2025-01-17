
// menu de inicio
do {
    let menu = `
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

    opc = Number(prompt(menu))

    switch(opc){
        case 1:
            console.log("(1). Crear una cuenta bancaria")
            break
        case 2:
            console.log("(2). Consignar dinero a una cuenta")
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
              
       
       
// console.log(window.confirm("algo"))


function nombre(){

}


fs = require('fs')


// #Modulo para abrir, modificar y todos los json y txt

// import json


// #abrir el json de productos y retorna los productos que son una lista de diccionarios
// #si no existe el archivo crea la estructura basica y la retorna
// def leerProductos():
//     try:
//         with open("productos.json", "r") as file:
//             productos = json.load(file)
//             return productos
//     except FileNotFoundError:
//         productos = [

//         ]
//         jsonProductos = json.dumps(productos, indent=4)
//         with open("productos.json", "w") as file:
//             file.write(jsonProductos)
//             return productos


// #abrir el json de inventario y retorna el inventario que es un diccionario de diccionarios 
// #si no existe el archivo crea la estructura basica y la retorna
// def leerinventario():
//     try:
//         with open("inventario.json", "r") as file:
//             inventario = json.load(file)
//             return inventario
//     except FileNotFoundError:
//         inventario = {
//             "norte": {
//             },
//             "centro": {
//             },
//             "oriente": {
//             }
//         }
//         jsonInventario = json.dumps(inventario, indent=4)
//         with open("inventario.json", "w") as file:
//             file.write(jsonInventario)
//             return inventario
        

// #abrir el json de movimientos y retorna los movimientos que son un diccionario de diccionarios 
// #si no existe el archivo crea la estructura basica y la retorna
// def leerMovimientos():
//     try:
//         with open("movimientos.json", "r") as file:
//             movimientos = json.load(file)
//             return movimientos
//     except FileNotFoundError:
//         movimientos = {
//             "norte": {
//             },
//             "centro": {
//             },
//             "oriente": {
//             }
//         }
//         jsonMovimientos = json.dumps(movimientos, indent=4)
//         with open("movimientos.json", "w") as file:
//             file.write(jsonMovimientos)
//             return movimientos


// #Recibe la lista de diccionarios: productos, la convierte a un Json indentado para mayor legibilidad
// #Y la guarda en el archivo productos.json
// def actualizarProductos(productos):
//     jsonProductos = json.dumps(productos, indent=4)
//     with open("productos.json", "w") as file:
//         file.write(jsonProductos)


// #Recibe el diccionario de diccionarios: inventario, lo convierte a un Json indentado para mayor legibilidad
// #Y lo guarda en el archivo inventario.json
// def actualizarInventario(inventario):
//     jsonInventario = json.dumps(inventario, indent=4)
//     with open("inventario.json", "w") as file:
//         file.write(jsonInventario)


// #Recibe el diccionario de diccionarios: movimientos, lo convierte a un Json indentado para mayor legibilidad
// #Y lo guarda en el archivo movimientos.json
// def actualizarMovimientos(movimientos):
//     jsonMovimientos = json.dumps(movimientos, indent=4)
//     with open("movimientos.json", "w") as file:
//         file.write(jsonMovimientos)


// #guarda el reporte como un archivo .txt, 
// # recibe un String con lo que registrar y el nombre del archivo en la segunda posicion
// def guardarReporte(reporte, nombreArchivo):
//     with open(fr"{nombreArchivo}.txt", "w") as archivo:
// 	    archivo.write(reporte)