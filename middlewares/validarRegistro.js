const { body } = require("express-validator");
const db = require("../database/models");

module.exports = [
    body('nombre').notEmpty().withMessage('Debes completar el campo nombre').bail()
    .isLength({min:4}).withMessage('El nombre debe tener al menos 4 caracteres'),
    body('correo').notEmpty().withMessage('Debes completar el campo correo electrónico').bail()
    .isEmail().withMessage('Debes usar un formato de correo válido')
    .custom(async(value) => {
        let registered = await db.User.findOne({where: {email: value}});
        if(registered) {
            return Promise.reject("El e-mail ingresado ya existe");
        }else{
            return true;
        }
    }),
    body('clave').notEmpty().withMessage('Debes completar el campo contraseña').bail()
    .isLength({min:5}).withMessage('La contraseña debe tener al menos 5 caracteres'),
    body('confirmarClave').notEmpty().withMessage('Debes completar el campo confirmar contraseña').bail()
    .custom((value, {req}) => {
        let clave = req.body.clave
        if(value === clave){
            return true
        }else{
            return Promise.reject("No coincide con el campo de contraseña");
        }
    })
]