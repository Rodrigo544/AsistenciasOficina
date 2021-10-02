const express = require('express');
const router = express.Router();

const usuarios = require('../app/vista/vistas.usuarios');

// Rutas del proceso de usuarios

router.post('/usuario', usuarios.crearNuevoUsuario)
router.post('/usuario/find', usuarios.buscarUnUsuario)

router.get('/login', usuarios.vistaLogin)

module.exports = router