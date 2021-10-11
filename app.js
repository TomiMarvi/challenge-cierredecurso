const express = require("express");
const path = require("path");
const app = express();

const mainRouter = require("./routes/mainRouter");
const moviesRouter = require("./routes/moviesRouter")
const usersRouter = require("./routes/usersRouter")

// ************ Servidor ************

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => console.log("Server start in http://localhost:"+app.get("port")));


app.set("view engine", "ejs");

app.use(mainRouter);
app.use("/movies", moviesRouter);
app.use("/users", usersRouter);

