const router = require("express").Router();

// get all posts for homepage
router.get("/", (req, res) => {
  res.render("home", {
//           // drinks,
          loggedIn: req.session.loggedIn,
        });
});

router.get("/gin", (req, res) => {
  res.render("gin", {
    loggedIn: req.session.loggedIn
  });
});

router.get("/vodka", (req, res) => {
  res.render("vodka", {
    loggedIn: req.session.loggedIn
  });
});

router.get("/bourbon", (req, res) => {
  res.render("bourbon", {
    loggedIn: req.session.loggedIn
  });
});

router.get("/tequila", (req, res) => {
  res.render("tequila", {
    loggedIn: req.session.loggedIn
  });
}); 

module.exports = router;