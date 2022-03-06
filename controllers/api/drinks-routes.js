const router = require("express").Router();
const { Drinks, Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// get all users
router.get("/", (req, res) => {
  console.log("======================");
  Drinks.findAll({
    attributes: ["id", "ingredients", "title", "created_at"],
    ///////////////////////////
    //// for comment build ////
    ///////////////////////////
    // include: [
    //   {
    //     model: Comment,
    //     attributes: [
    //       "id",
    //       "comment_text",
    //       "drinks_id",
    //       "user_id",
    //       "created_at",
    //     ],
    //     include: {
    //       model: User,
    //       attributes: ["username"],
    //     },
    //   },
    //   {
    //     model: User,
    //     attributes: ["username"],
    //   },
    // ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Drinks.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "ingredients", "title", "created_at"],
    ///////////////////////////
    //// for comment build ////
    ///////////////////////////
    // include: [
    //   {
    //     model: Comment,
    //     attributes: [
    //       "id",
    //       "comment_text",
    //       "drinks_id",
    //       "user_id",
    //       "created_at",
    //     ],
    //     include: {
    //       model: User,
    //       attributes: ["username"],
    //     },
    //   },
    //   {
    //     model: User,
    //     attributes: ["username"],
    //   },
    // ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  Drinks.create({
    title: req.body.title,
    ingredients: req.body.ingredients,
    user_id: req.session.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  Drinks.update(
    {
      title: req.body.title,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  console.log("id", req.params.id);
  Drinks.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
