const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home", {
          //drinks,
          loggedIn: req.session.loggedIn,
        });
});

module.exports = router;