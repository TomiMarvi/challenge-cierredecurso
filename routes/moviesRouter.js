const express = require("express");
const router = express.Router();
const peliculasController = require("../controllers/moviesController")
const validarCreacion = require('../middlewares/validarCreacion');
const esAdmin = require('../middlewares/esAdmin');

router.get("/detalle/:id", peliculasController.detalle);

router.get("/crear",esAdmin, peliculasController.crear);

router.get("/editar/:id",esAdmin, peliculasController.editar);

router.post("/guardar",validarCreacion, peliculasController.guardar);

router.put("/actualizar/:id",validarCreacion, peliculasController.actualizar);

router.delete("/borrar/:id", peliculasController.borrar);


module.exports = router;