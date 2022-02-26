const express = require("express");
const app = express();
const port = 3001;

const { engine } = require("express-handlebars");

app.set("view engine", "handlebars");

app.engine("handlebars", engine({
  layoutsDir: `${__dirname}/views/`
}));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main", {layout: 'login'});
});

app.listen(port, () => {
  console.log(`IT IS ALIVE in ${port}`);
});
