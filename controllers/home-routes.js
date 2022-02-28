const router = require("express").Router();

// get all posts for homepage
router.get("/", (req, res) => {
  res.render("home", {
          // drinks,
          loggedIn: req.session.loggedIn,
        });
});

module.exports = router;