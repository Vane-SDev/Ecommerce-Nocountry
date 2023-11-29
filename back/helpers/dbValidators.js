const Role = require("../models/Role");
const Usuarios = require("../models/Usuario");

const esRoleValido = async(rol= '')=>{
    const existeRole = await Role.findOne({where:{role:rol}})
 
    if(!existeRole){
        throw new Error(`El role ${rol} no esta registrado en la base de datos`)
    }
}
const esEmailValido = async(correo = '') =>{
    const existeEmail = await Usuarios.findOne({correo})

    if (existeEmail){
        
         throw new Error("El correo ya esta registrado")
        
    }
}


module.exports = {
    esEmailValido,
    esRoleValido
}