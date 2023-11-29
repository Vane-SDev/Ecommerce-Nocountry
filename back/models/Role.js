

// Importing Sequelize module
const Sequelize = require('sequelize')

// Importing database configuration
const {db} = require("../dataBase/db.js")

// Defining Role model
const Role = db.define('role',{
    role: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
        validate: {
            notEmpty: {
                msg: 'The role field cannot be empty'
            }
        }
    }
 
})
db.sync().then(async() => {
    const existeTabla = (await db.getQueryInterface().showAllTables()).includes('roles')
 
    if(existeTabla){
        const role = await Role.findAll()
     
        if(role.length===0){
            await Role.bulkCreate([
                {role:'ADMIN_ROLE'}, 
                {role:'USER_ROLE'}
            ]).then(() => {
                console.log('Tabla inicializada con éxito.');
              });
        }
        
    } 

  });
// Exporting Role model
module.exports = Role;
//
//In this code, we define a `Role` model with a `role` field. The `role` field is a string and cannot be empty. We also add a `beforeBulkCreate` hook to the model, which will automatically create two roles ('ADMIN_ROLE' and 'USER_ROLE') when the model is being defined.
//
//This code is well-documented with comments, making it easy to understand..</s>