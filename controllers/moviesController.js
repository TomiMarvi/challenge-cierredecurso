module.exports = {
    detail:(req,res)=>{
        return res.render("detalleMovie")
    },
    create:(req,res)=>{
        return res.render("createMovie")
    },
    edit:(req,res)=>{
        return res.render("editMovie")
    }
};