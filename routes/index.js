var express = require('express');
var router = express.Router();
var user = require('./users');
const { signup, editUser, deleteUser } = require('../Controller/userSchema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/register", async (req, res)=>{
  const deprt = await user.find({});
  console.log(deprt);
  res.render('register.ejs', {deprt})
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
