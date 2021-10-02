const Usuarios = require('../../db/usuarios.model')
const sequelize = require("../../db/db.conexion");
const { Op} = require('sequelize')

const crearUsuario = async (usuario) => {
  try {
    const nuevoUsuario = await Usuarios.create(usuario)
    return nuevoUsuario
  } catch (err) {
    console.log(err)
    throw new Error('Error en la creación de usuarios')
  }
}

const buscarUsuario = async (usuario) => {
  try {
    console.log('buscado',usuario)

    
    const buscado = await Usuarios.findOne({ where: { email: { [Op.eq]: usuario.email}, password:  { [Op.eq]: usuario.password}} })
    // const SELECT_ALL = `SELECT * FROM users where email = :email AND password = :password`;
    //   const result = await sequelize.query(SELECT_ALL, {
    //     type: sequelize.QueryTypes.SELECT,
    //     replacements: {
    //       email: usuario.email,
    //       password: usuario.password
    //     },
    //   });
      console.log(buscado)
      return buscado;
  } catch (err) {
    console.log(err)
    throw new Error('Error buscando al usuario')
  }
}

module.exports = {
  crearUsuario,
  buscarUsuario
}