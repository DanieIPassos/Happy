// importar dependencia
const express = require("express");
const path = require("path");
const pages = require('./pages.js');

//iniciando o express
const server = express();
server
.use(express.urlencoded({extended: true}))
    // utilizando os arquivos estáticos
    .use(express.static("public"))

    //configurar template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')
    //criando uma rota
    .get("/", pages.index)
    .get("/orphanages", pages.orphanages)
    .get("/orphanage", pages.orphanage)
    .get("/create-orphanage", pages.createOrphanage)
    .post("/save-orphanage", pages.saveOrphanage)

//ligar servidor
server.listen(5500)
