const Usuarios = require("../models/Usuario");
const jwt = require('jsonwebtoken')
const crearUsuario = async(req, res = response) => {
    
      try {
        await Usuarios.create(req.body)
        res.json({
          msg:'Usuario creado con exito'
        })
      } catch (error) {
        console.log(error)
      }
 
}
const autenticarUsuario = async(req,res,next)=>{
  const {email, password} = req.body
    const usuario = await Usuarios.findOne({where:{email:email}})
 
    if(!usuario){
      res.status(400).json({
          mensaje:'Ese usuario no existe'
      })
      next()
  }
  if(!usuario.validPassword(password)){
    // si el password es incorrecto
    res.status(400).json({
        msg:'Contraseña incorrecta'
    })
    next()
}
    const token = jwt.sign({
      email:usuario.email,
      nombre:usuario.nombre,
      id:usuario._id
    }, 
      'LLAVESECRETA',{
          expiresIn:"1h"
    }
    )
    res.json({token})
  }
module.exports = {
    crearUsuario,
    autenticarUsuario
}