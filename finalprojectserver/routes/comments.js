var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/finalproject', {useMongoClient:true});

const commentSchema = new mongoose.Schema({
    username: String,
    post_id: String,
    content: String,
    dateCreated: Date,
    like: [String]
});
const Comment = mongoose.model('comment', commentSchema);

router.post('/create', (req, res)=>{
    console.log(req.body);
    const comment = new Comment(req.body);
    comment.save((err, comment)=>{
        if(err) return console.error(err);
        console.log('Comment successfully!')
        res.json(comment._id);
    })
})

router.get('/', (req, res) => {
    Comment.find((err, comments)=>{
        if(err) return console.error(err);
        res.json(comments);
    })
})

router.put('/update/:id', (req, res)=>{
    Comment.findOneAndUpdate({_id: req.params.id}, req.body, function(err, comment){
        if(err) return console.error(err);
        console.log('Comment is updated successfully!')
    });
    res.json('ok');
})

router.delete('/delete/:id', (req, res)=>{
    Comment.remove({_id: req.params.id}, (err)=>{
        if(err) return console.error(err);
        console.log('Comment is removed successfully!')
        res.json('ok');
    })
})

router.get('/post/:id', (req, res) =>{
    Comment.find({post_id: req.params.id}, (err, comments) =>{
        if(err) return console.error(err);
        res.json(comments);
    })
})

module.exports = router;