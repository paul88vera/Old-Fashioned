const router = require("express").Router();

router.get('/', (req,res) => {
  res.render('create');
});

router.get('/gin', (req,res) => {
  res.render('gin');
});

router.get('/vodka', (req,res) => {
  res.render('vodka');
});
router.get('/bourbon', (req,res) => {
  res.render('bourbon');
});
router.get('/tequila', (req,res) => {
  res.render('tequila');
});

module.exports = router;
