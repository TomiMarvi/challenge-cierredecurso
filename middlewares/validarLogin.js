const {body} = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../database/models");

module.exports = [
    body("correo").notEmpty().withMessage('Debes completar el campo correo electrónico').bail()
    .custom(async(value)=> {
        let registered1 = await db.User.findOne({where: {email: value}});
        if (!registered1) {
            return Promise.reject("El email no es valido, pruebe otra vez");
        }
        return true
    }),
    body("clave").notEmpty().withMessage('Debes completar el campo contraseña').bail()
    .custom(async(value, {req})=> {
        let registered = await db.User.findOne({where: {email: req.body.correo}});
        console.log(registered);
        let clave = registered.password;
        console.log(clave);
        if (bcrypt.compareSync(value, clave)){
            return true;
        }else{
            throw new Error("La contraseña no es valida, pruebe otra vez");
        }
    })
]