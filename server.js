const express = require('express')
const app = express()
const port = 5004

app.get('/', (req, res) => {
  // ruta que enviará al usuario una pagina
  
    // sendFile para enviar archivos
    console.log( __dirname ) // la direccion absoluta de esta ubicación
    res.sendFile(__dirname + "/views/home.html")
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// configuraciones del servidor (app.set)
app.use( express.static("public") ) // identificamos que en la carpeta public estaran todos los elementos estaticos (imagenes, videos, css, audios)


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