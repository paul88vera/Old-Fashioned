const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require('../utils/auth');

router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "title", "ingredients"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id"],
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
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "ingredients"],
    include: [
      {
        model: Comment, 
        attributes: ["id", "comment_text", "post_id", "user_id"],
        include: {
          model: User,
          attributes: ["username"]
        }
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post("/", withAuth, (req, res) => {
  Post.create({
    title: req.body.title, 
    post_url: req.body.post_url, 
    user_id: req.session.user_id,
  })
  .then((dbPostData) => res.json(dbPostData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
