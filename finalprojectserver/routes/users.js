var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/finalproject', {useMongoClient:true});

const userSchema = new mongoose.Schema({
  username : String,
  password: String,
  email: String,
  DOB: Date,
  firstname: String,
  lastname: String,
  authorization: String
});
const User = mongoose.model('user', userSchema);
router.get('/', (req, res) => {
  User.find((err, users)=>{
      if(err) return console.error(err);
      res.json(users);
      });
  });
router.delete('/delete/:username', (req, res)=>{
    User.remove({username: req.params.username}, (err)=>{
        if(err) return console.error(err);
        console.log(req.params.username + ' is successfully removed!')
        res.json('ok');
    })
})

router.post('/create', (req, res)=>{
  console.log(req.body);
  const user = new User(req.body);
  user.save((err, user)=>{
      if(err) return console.error(err);
      console.log(user.username + " is successfully created!")
      res.json(user._id);
  })

})

module.exports = router;
