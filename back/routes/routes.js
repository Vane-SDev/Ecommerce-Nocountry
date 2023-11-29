const { Router } = require("express");
const { check } = require("express-validator");
const { esEmailValido, esRoleValido } = require("../helpers/dbValidators");
const { crearUsuario, autenticarUsuario } = require("../controllers/authController");
const { validarCampos } = require("../middleware/validarCampos");

const router = Router()

router.post('/signup',[
    check('nombre', "El campo nombre es obligatorio").not().isEmpty(),
    check('pais', "El campo pais no puede ir vacio").not().isEmpty(),
    check('estado', "El campo estado no puede ir vacio").not().isEmpty(),
    check('ciudad', "El campo ciudad no puede ir vacio").not().isEmpty(),
    check('password', "La contraseña no es valida y debe tener  mas de 6 letras").isLength({min:6}),
    check('email', "El correo no es valido").isEmail(),
    check('email').custom(esEmailValido),
    
    check('role').custom( esRoleValido),
    validarCampos
], crearUsuario)  
router.post('/signin',[
    check('email', "El correo no es valido").isEmail(),
    check('password', "El campo contraseña no puede ir vacio").not().isEmpty(),

    validarCampos
], autenticarUsuario)  

module.exports = router