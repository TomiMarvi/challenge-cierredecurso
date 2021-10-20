const { body } = require("express-validator");

module.exports = [
    body('titulo').notEmpty().withMessage("La pelicula debe tener un titulo"),
    body('rating').notEmpty().withMessage("La pelicula debe tener un rating"),
    body('premios').notEmpty().withMessage("Este campo no puede estar vacio"),
    body('fechaDeEstreno').notEmpty().withMessage("La pelicula debe tener una fecha de estreno"),
]