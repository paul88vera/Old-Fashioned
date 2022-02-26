const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const postRoutes = require("./Drinks-routes");
const commentRoutes = require("./comment-routes");

router.use("/users", userRoutes);
router.use("/Drinks", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
