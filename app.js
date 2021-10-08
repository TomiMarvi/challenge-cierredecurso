const express = require("express");
const path = require("path");
const app = express();



// ************ Servidor ************

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => console.log("Server start in http://localhost:"+app.get("port")));


//app.set("views", path.resolve(__dirname, "./views"));
//app.set("view engine", "ejs");

app.get("/", (req,res)=>res.sendFile(path.resolve(__dirname,"./views/home.html")));
app.get("/login", (req,res)=>res.sendFile(path.resolve(__dirname,"./views/login.html")));
app.get("/detalle", (req,res)=>res.sendFile(path.resolve(__dirname,"./views/detalle.html")));
app.get("/register", (req,res)=>res.sendFile(path.resolve(__dirname,"./views/register.html")));