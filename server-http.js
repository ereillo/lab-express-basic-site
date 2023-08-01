const http = require('http');

const server = http.createServer((request, response) => {
  console.log("algun cliente me pide informacion")
  
  console.log(request.url)

  response.write("Hola desde el servidor!")
  response.end()

})

server.listen( 5004 )
console.log(__dirname)
