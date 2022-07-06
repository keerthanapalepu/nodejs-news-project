const express = require("express");

const app = express();
const port = 5000;

//Static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));

//Templating Engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

//Routes
const newsRouter = require("./src/routes/news");
app.use("/", newsRouter);

//listen on port 5000
app.listen(port, () => console.log("Listening on port", { port }));
