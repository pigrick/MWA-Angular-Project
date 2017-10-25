// lodash is utility middleware to work with arrays,
// you won't need this as your users will be in datbabase not in an array.
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

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log('payload received', jwt_payload);
  // usually this would be a database call:
    User.find({username: jwt_payload.username}, (user, error) => {
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

router.post("/", function(req, res) {
    console.log("1");
    console.log(req.body.username);
    console.log(req.body.password);
    console.log("2");

  if(req.body.username && req.body.password){
    var username = req.body.username;
    var password = req.body.password;
  }
  // usually this would be a database call:
  User.find({username: username},(user, error) => {
    if( ! user ){
        res.status(401).json({message:"no such user found"});
    }
    if(user.password === req.body.password) {
    // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
    var payload = {username: user.username};
    var token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.json({message: "ok", token: token});
  } else {
    res.status(401).json({message:"passwords did not match"});
  }
  })
});

router.get("/secret", passport.authenticate('jwt', { session: false }), function(req, res){
  res.json("Success! You can not see this without a token");
});

module.exports = router;