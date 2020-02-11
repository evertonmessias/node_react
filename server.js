// Módulos
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const path = require("path");
require('dotenv/config');
const port = process.env.PORT || 5000;

//Configurações

//Body Parser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//Mongodb
mongoose.connect(process.env.CONNECT)
    .then(() => {
        console.log("*** CONECTADO OK ***");
    })
    .catch(() => {
        console.log("ERRO AO CONECTAR");
    });

//Public
app.use(express.static(path.join(__dirname, "public")));

//Rotas
app.use('/', routes);

//Servidor
app.listen(port, () => {
    console.log("SERVIDOR RODANDO NA PORTA:" + port);
});