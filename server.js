const express = require('express')
const app = express()
const port = 3000

// configuraciones del servidor (app.set)
app.use( express.static("public") ) // identificamos que en la carpeta public estaran todos los elementos estaticos (imagenes, videos, css, audios)

app.get("/home", (req, res, next) => {
    // ruta que enviará al usuario una pagina
  
    // sendFile para enviar archivos
    console.log( __dirname ) // la direccion absoluta de esta ubicación
    res.sendFile(__dirname + "/views/home.html")
  })

app.get("/about", (req, res, next) => {
    // ruta que enviará al usuario una pagina
  
    // sendFile para enviar archivos
    console.log( __dirname ) // la direccion absoluta de esta ubicación
    res.sendFile(__dirname + "/views/about.html")
  })

app.get("/teams", (req, res, next) => {
    // ruta que enviará al usuario una pagina
  
    // sendFile para enviar archivos
    console.log( __dirname ) // la direccion absoluta de esta ubicación
    res.sendFile(__dirname + "/views/teams.html")
  })