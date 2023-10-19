/*Este archivo va a importar las librerias. Es el punto de entrada, este llamará a todos los ddemás archivos para funcionar
Importar libreria de express
require es una palabra reservada para importar archivos
*/
const express = require('express');
const app = express();
// req es la petición y la información se almacena ahí
//res respuesta que nosotros vamos a dar 
app.get("/",(req, res, netx) =>{
    res.status(200);
    res.send("Bienvenido");
});
/*Uso del puerto 3000
=> Función flecha es una funcion anónima
Creación del servidor que escucha peticiones*/ 
app.listen(3000, () =>{
    console.log("Server is running...");

});

/*
Uso de verbos HTTP para realizar peticiones al revidor
GET, POST, PATCH */