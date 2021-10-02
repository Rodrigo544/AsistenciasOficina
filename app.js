const db = require("./db/db.conexion");
require('dotenv').config({ path: './.env' });
const express = require("express");
const cors = require("cors");

const Users = require('./db/usuarios.model')

const router = require('./routes/router')

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};
//Middleware globales
app.use(express.json())

// Configuraciones globales
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')



app.use(cors(corsOptions));
app.use(router)

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hola mundo" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function sincronizarBaseDeDatos() {
  Users.sync({ force: true})
}

// sincronizarBaseDeDatos()