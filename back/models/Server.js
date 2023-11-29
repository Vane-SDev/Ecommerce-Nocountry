const express = require('express')
const { dbConnection } = require('../config/config.js')
const bodyParser = require('body-parser')

require('dotenv').config({path:'variables.env'})
 
class Server{
    constructor(){
        this.app = express()
        this.PORT = process.env.PORT || 5000
        this.host = process.env.HOST || '0.0.0.0'
        this.paths = {
            appRoutes:"/",
        }
        //conectar a base de datos

        // this.conectarDB()
        //Midlewares : no son mas que funciones que van a añadirle otras funcionalidades al web server
        // en otras palabras es una funcion que se ejecuta antes de llamar un controlador o seguir con la ejecucion
        //de las peticiones
        //rutas de mi applicacion

        this.middlewares()
        
        this.routes()
        this.conectarDB()
        //sockets
 
    }


    middlewares(){
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended:true}))
 
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Credentials", "true");
            res.header(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token"
            );
            res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
            next();
        });
        this.app.options("", (req, res) => {
            res.header("Access-Control-Allow-Origin", "");
            res.header("Access-Control-Allow-Credentials", "true");
            res.header(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token"
            );
            res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
            res.sendStatus(204); // No content in the response
        });
    }

    routes(){
    
        this.app.use(this.paths.appRoutes, require("../routes/routes.js"))
 
    }
 
    listen(){
        this.app.listen(this.PORT,this.HOST, ()=>{
            console.log("Servidor corriendo en puerto", this.PORT)
        })
      
    }

    async conectarDB(){
        await dbConnection()
    }
}


module.exports = Server