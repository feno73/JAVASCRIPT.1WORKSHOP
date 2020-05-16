const express = require("express")

const server = express()

const docs = express.static("docs") //nombre de carpeta con backend


server.use( docs )

//rutas para acceder
server.get("/index.html", function(request, response){
    response.end("index.html")
})





server.listen(3000)
