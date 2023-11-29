// nombre, apellido, password , correo, pais, estado, ciudad, codigoPostal,
const Sequelize = require('sequelize')
const {db} = require("../dataBase/db.js")
const bcrypt = require('bcrypt-nodejs')
 
const Usuarios = db.define('usuarios',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    nombre:{
        type: Sequelize.STRING(50),
        allowNull:false,
        validate:{
            notEmpty:{
                msg:'El nombre no puede estar vacio'
            }
        }

    },
    apellido:{
        type: Sequelize.STRING(50),
        allowNull:false,
        validate:{
            notEmpty:{
                msg:'El nombre no puede estar vacio'
            }
        }

    },
    imagen:Sequelize.STRING(60),
    email:{
        type:Sequelize.STRING(60),
        allowNull:false,
        validate:{
            isEmail:{
                msg:'Agrega un correo valido'
            }
        },
        unique:{
            args:true,
            msg:'Usuario ya registrado'
        }
    },
    password:{
        type:Sequelize.STRING(60),
        allowNull:false,
        validate:{
            notEmpty:{
                msg:'La contraseña no puede estar vacia'
            }
        }
    },
    activo:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
    },role:{
        type:Sequelize.STRING,
        required:true,
        enum:['ADMIN_ROLE', 'USER_ROLE']
    },
    pais:{
        type:Sequelize.STRING,
        defaultValue:0,
        validate:{
            notEmpty:{
                msg:'El pais no puede estar vacio'
            }
        }
    },
    estado:{
        type:Sequelize.STRING,
        defaultValue:0,
        validate:{
            notEmpty:{
                msg:'El estado no puede estar vacio'
            }
        }
    },
    ciudad:{
        type:Sequelize.STRING,
        defaultValue:0,
        validate:{
            notEmpty:{
                msg:'El ciudad no puede estar vacio'
            }
        }
    }
},{
    hooks:{
        beforeCreate:(user)=>{
            user.password = Usuarios.prototype.hashPassword(user.password)
        }
    }
})
// metodo para comparar las contraseña
Usuarios.prototype.validPassword=function (password){
    return bcrypt.compareSync(password,this.password);
}
Usuarios.prototype.hashPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null );
}
module.exports = Usuarios;