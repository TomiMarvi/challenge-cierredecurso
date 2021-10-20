const db = require("../database/models");

module.exports = {
    index: async (req,res) => {
        let peliculas = await db.Movie.findAll();

        return res.render("home", { peliculas })
    }
}