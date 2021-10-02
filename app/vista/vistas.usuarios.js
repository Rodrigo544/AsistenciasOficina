const ControladorUsuarios = require('../controlador/UserController')

const crearNuevoUsuario = async (req, res) => {
  const usuario = req.body
  console.log(req)
  try {
    console.log(usuario)
    const nuevoUsuario = await ControladorUsuarios.crearUsuario(usuario)
    res.status(200).json({ message: "Usuario creado con exito", nuevoUsuario})
  } catch(err) {
    console.log(err)
    res.status(400).json({ message: "Hubo un problema en la creaciòn de usuario", error: err})
  }
}

const buscarUnUsuario = async (req, res) => {
  const usuario = req.body
  try {
    const usuarioEncontrado = await ControladorUsuarios.buscarUsuario(usuario)
    res.status(200).json({ success: true, message: "Usuario encontrado con exito", usuarioEncontrado})
  } catch(err) {
    res.status(400).json({ success: false, message: "Usuario no encontrado", error: err})
  }
}

const vistaLogin = async (req, res) => {
  try {
    console.log("Estás en el logiiiin!!!! yeiii")
    res.render('login')
  } catch(err) {
    res.status(400).json({ message: "Tu login falló, asi como todo lo demás en tu vida"})
  }
}

module.exports = {
  crearNuevoUsuario,
  buscarUnUsuario,
  vistaLogin
}