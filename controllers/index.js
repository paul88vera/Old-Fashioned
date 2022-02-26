const router = require("express").Router();

// const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
const createRoutes = require("./create-routes.js");
const loginRoutes = require('./login-routes.js');

router.use("/home", homeRoutes);
router.use('/create', createRoutes);
router.use('/login', loginRoutes);
// router.use("/api", apiRoutes);

module.exports = router;