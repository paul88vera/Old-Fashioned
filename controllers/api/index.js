const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const postRoutes = require("./drinks-routes");
const commentRoutes = require("./comment-routes");

router.use("/users", userRoutes);
router.use("/drinks", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
