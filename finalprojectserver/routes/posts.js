var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/finalproject', {useMongoClient:true});

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    type: Number,
    author: String,
    dateCreated: Date,
    rating: [{
        username: String,
        rating: Number
    }]
});
const Post = mongoose.model('post', postSchema);

router.post('/create', (req, res)=>{
    console.log(req.body);
    const post = new Post(req.body);
    post.save((err, post)=>{
        if(err) return console.error(err);
        console.log(post.title + " is successfully created!")
        res.json(post._id);
    })
})

router.get('/', (req, res) => {
    Post.find((err, posts)=>{
        if(err) return console.error(err);
        res.json(posts);
    })
})

router.put('/update/:id', (req, res)=>{
    Post.findOneAndUpdate({_id: req.params.id}, req.body, function(err, post){
        if(err) return console.error(err);
        console.log('Post:' + post.title + 'is updated successfully!')
    });
    res.json('ok');
})

router.delete('/delete/:id', (req, res)=>{
    Post.remove({_id: req.params.id}, (err, post)=>{
        if(err) return console.error(err);
        console.log('Post:' + post.title + ' is successfully removed!')
        res.json('ok');
    })
})
  
module.exports = router;