const db = require("../database/models");
const { validationResult } = require('express-validator');

module.exports = {
    detalle: async (req,res) => {
        let pelicula = await db.Movie.findByPk(req.params.id, {include: [{association: "genre"}, {association: "actors"}]});

        return res.render("detalleMovie", { pelicula })
    },
    crear: async (req,res) => {
        let generos = await db.Genre.findAll();
        let actores = await db.Actor.findAll();

        return res.render("createMovie", { generos, actores })
    },
    guardar: async (req,res) => {
        try{
            let resultadoValidacion = validationResult(req)
            let generos = await db.Genre.findAll();
            let actores = await db.Actor.findAll();

            if(resultadoValidacion.errors.length > 0){
                return res.render("createMovie",{
                    errors: resultadoValidacion.mapped(),
                    oldData: req.body,
                    generos,actores
                })
            }

            let actores2 = req.body.actores 
            
            await db.Movie.create({
                title: req.body.titulo,
                rating: req.body.rating,
                awards: req.body.premios,
                release_date: req.body.fechaDeEstreno,
                length: req.body.duracion,
                genre_id: req.body.genero
        });

            let peliculas = await db.Movie.findAll();
            let peliculaReciente = peliculas[peliculas.length - 1];
            
            await peliculaReciente.setActors(actores2)

            return res.redirect("/pelicula/detalle/" + peliculaReciente.id)
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    editar: async (req,res) => {
        let pelicula = await db.Movie.findByPk(req.params.id);
        let generos = await db.Genre.findAll();
        let actores = await db.Actor.findAll();

        return res.render("editMovie", { pelicula, generos, actores })
    },
    actualizar: async (req,res) => {
        try{
            let resultadoValidacion = validationResult(req)
            let pelicula = await db.Movie.findByPk(req.params.id);
            let generos = await db.Genre.findAll();
            let actores = await db.Actor.findAll();

            if(resultadoValidacion.errors.length > 0){
                return res.render("editMovie",{
                    errors: resultadoValidacion.mapped(),
                    oldData: req.body,
                    generos,actores,pelicula
                })
            }

            let actores2 = req.body.actores 

            await db.Movie.update({
                title: req.body.titulo,
                rating: req.body.rating,
                awards: req.body.premios,
                release_date: req.body.fechaDeEstreno,
                length: req.body.duracion,
                genre_id: req.body.genero
        },{ where: { id: req.params.id }});
            
            if(actores2 != null){
                await pelicula.setActors(actores2)
            }
            
            return res.redirect("/pelicula/detalle/" + pelicula.id)
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    borrar: async (req,res) => {
        try{

            await db.Actor_Movie.destroy({where: {movie_id: req.params.id}});

            await db.Movie.destroy({where: {id: req.params.id}});
            
            return res.redirect("/")
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    }
}