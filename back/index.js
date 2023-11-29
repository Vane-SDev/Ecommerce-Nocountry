require('dotenv').config({path:'variables.env'})
const Server = require("./models/Server");

const server = new Server()

server.listen()