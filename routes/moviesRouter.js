const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

router.get("/detallePelicula", moviesController.detail)
router.get("/editPelicula", moviesController.edit)
router.get("/createPelicula", moviesController.create)


module.exports = router