const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use("public", express.static(path.join(__dirname, "public")));

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log(`App now listening on ${PORT}`);
});