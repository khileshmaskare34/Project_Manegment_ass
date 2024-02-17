var user = require('../routes/users')
var depart_db = require('./department')

exports.signup =  async(req, res)=>{
    // console.log(req.body);
    const newUser = new user({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      department: req.body.department,
      project: req.body.project,
    })
    const saveduser = await newUser.save();
    console.log(saveduser);

    const dnewUser = new depart_db({
        D_name: req.body.department,
        D_user: req.body.name,
        project: req.body.project
    })
    const dsavedUser = await dnewUser.save();
    console.log(dsavedUser);
    res.redirect('/home')
  
  }

  exports.editUser = async (req, res)=>{
    const editData = await user.findOneAndUpdate({
     _id: req.body.user_id
    },
 
           {
                 $set: {
                     name: req.body.name,
                     department: req.body.department,
                     project: req.body.project
                 }
             },
             { new: true }
             )
             res.redirect('/home');
 }

 exports.deleteUser = async (req, res)=>{
    // console.log(req.body);
    await user.findOneAndDelete({ _id: req.body.user_id });
    console.log('deleted');
    res.redirect('/home');
  }