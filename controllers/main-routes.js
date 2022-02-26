const router = require("express").Router();
// const sequelize = require("../config/connection");
const { Drinks, User, Comment } = require("../models");

// get all posts for homepage
router.get("/", (req, res) => {
  console.log("======================");
  Drinks.findAll({
    attributes: [
      "id",
      "ingredients",
      "title",
      "created_at"
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "drinks_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const drinks = dbPostData.map((drinks) => drinks.get({ plain: true }));

      res.render("main", {
        drinks,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get("/drinks/:id", (req, res) => {
  Drinks.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "ingredients",
      "title",
      "created_at"
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "drinks_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      const drinks = dbPostData.get({ plain: true });

      res.render("drink-info", {
        drinks,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;