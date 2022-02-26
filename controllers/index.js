const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
const createRoutes = require("./create-routes.js");

router.use("/home", homeRoutes);
router.use("/create", createRoutes);
router.use("/api", apiRoutes);

module.exports = router;