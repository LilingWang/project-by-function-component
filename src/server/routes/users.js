var express = require('express');
var router = express.Router();
require('../configs/mongodbConfig');
const User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getAll', async (req, res) => {
  const result = await User.find();
  res.json(result);
});

router.post('/add_user', async (req, res) => {
  const {FirstName, LastName,Sex, Age, Password } = req.body;
  const newUser = new User();
  Object.assign(newUser, {FirstName, LastName,Sex, Age,Password});
 
  try {
    await newUser.save();
    res.json({message:'Success!'});

  } catch (error) {
    res.status(500).json({message:error.message});
  }

});

router.post('/delete_user', async (req, res) => {

  const id = req.query["id"];
   try {
     await User.deleteOne({ _id: id });
     res.json({message: 'Success!'});

   } catch (error) {
     res.status(500).json({message: error.message});
   }
})

router.get('/get_user/:id', async (req, res) => {
  const id = req.params.id;

   try {
     const info = await User.findById({ _id: id });
     console.log(info,"test info")
     res.json(info);

   } catch (error) {
     res.status(500).json({message: error.message});
   }
})

router.post('/update_user/:id', async (req, res) => {
  
  const id = req.params.id;

   try {
     const info = await User.updateOne({ _id: id }, req.body);
     res.json(info);

   } catch (error) {
     res.status(500).json({message: error.message});
   }
})


module.exports = router;
