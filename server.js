const express = require("express");
const path = require("path");
const session = require("express-session");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({});



const { engine } = require("express-handlebars");

app.set("view engine", "handlebars");

app.engine(
  "handlebars",
  engine({
    layoutsDir: `${__dirname}/views/layouts`,
  })
);
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers"));

app.get("/", (req, res) => {
  res.render("home", { layout: "main" });
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`IT IS ALIVE in ${PORT}`);
  });
});
