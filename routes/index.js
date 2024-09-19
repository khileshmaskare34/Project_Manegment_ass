var express = require('express');
var router = express.Router();
var user = require('./users');
const { signup, editUser, deleteUser } = require('../Controller/userSchema');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const deprt = await user.find({});

  res.render('index', {deprt});
});

router.get("/register", async (req, res)=>{
  const deprt = await user.find({});
  // console.log(deprt);
  res.render('register.ejs', {deprt})
  // res.json(deprt);
})

router.post('/register',signup)
router.get('/home', async (req, res)=>{
  const alluser = await user.find({})
  // console.log(alluser);
  res.render('LoggedIn', {alluser});
})


router.post('/edit_user', editUser)

router.post('/delete', deleteUser)


module.exports = router;
