let express = require("express");
let routes = require("./controllers/burgers_controller.js");
let exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

let app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
    console.log(`App now listening on ${PORT}`);
});