const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const validarRegistro = require('../middlewares/validarRegistro');
const validarLogin = require('../middlewares/validarLogin');

router.get("/ingresar", usersController.login);

router.get("/registrarse", usersController.registrarse);

router.get("/cerrarSesion", usersController.logout);

router.post("/acceder",validarLogin, usersController.acceso);

router.post("/guardar",validarRegistro, usersController.guardar);


module.exports = router;