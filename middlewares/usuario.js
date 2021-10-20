const db = require("../database/models");

module.exports = async (req,res,next) => {
    let user = null;
    if(req.cookies.correo && !req.session.user){
        user = await db.User.findOne({where: {email: req.cookie.correo}});
        req.session.user = user
    }
    if(req.session.user){
        user = req.session.user;
    }
    res.locals.user = user;
    
    next();
}

