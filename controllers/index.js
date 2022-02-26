const router = require("express").Router();

const apiRoutes = require("./api/");
const mainRoutes = require("./main-routes.js");
const dashboardRoutes = require("./dashboard-routes.js");

router.use("/", mainRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);

module.exports = router;