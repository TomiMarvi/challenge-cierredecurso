const user = require('../middlewares/usuario');

module.exports = (req,res,next) => {
    if(res.locals.user != null && res.locals.user.admin == 1){
        return next()
    }else{
        return res.redirect("/")
    }
}