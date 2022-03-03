const router = require("express").Router();

router.get('/', (req,res) => {
 res.render('login');
});

router.post('/login', (req,res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: "No user found with this id" });
            return;
        }
        const validPass = dbUserData.checkPassword(req.body.password);
        if(!validPass) {
            res.status(404).json({ message: "No user found with this id" });
            return;
        }
        req.session.save(() => {
            req.session.id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({
                User: dbUserData,
                message: "It's five o'clock somewhere!"
            })
        });
    })
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
      req.session.destroy(() => {
          res.status(204).end();
      });
  } else {
      res.status(404).end();
  }
});

module.exports = router;