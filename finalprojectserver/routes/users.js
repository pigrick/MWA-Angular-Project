var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/finalproject', {useMongoClient:true});

var jwt = require('jsonwebtoken');

var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// Any random string to use as encryption key
jwtOptions.secretOrKey = 'superSecretKey';
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

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
    console.log('payload received', jwt_payload);
    // usually this would be a database call:
      User.findOne({username: jwt_payload.username}, (error, user) => {
          if (user) {
              next(null, user);
            } else {
              next(null, false);
            }
      })
  });
  
  passport.use(strategy);
  
  // to allow cross origin request from Angular on development phase
  
  // initialzing passport
  router.use(passport.initialize());
  
  router.post("/login", function(req, res) {
    if(req.body.username && req.body.password){
      var username = req.body.username;
      var password = req.body.password;
    }
    // usually this would be a database call:
    User.findOne({username: username}, (error, user) => {
      if(!user){
          res.status(401).json({message:"no such user found"});
      } else {
      if(user.password === req.body.password) {
      // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
      var payload = {username: user.username};
      var token = jwt.sign(payload, jwtOptions.secretOrKey);
      res.json({message: "ok", token: token, username: user.username, authorization: user.authorization});
      } else {
        console.log("password not match");
        res.status(401).json({message:"passwords did not match"});
      }
    }
    })
  });
  
  router.get("/secret", passport.authenticate('jwt', { session: false }), function(req, res){
    res.json("Success! You can not see this without a token");
  });


module.exports = router;
