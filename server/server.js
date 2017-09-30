// 'use strict';
var path = require('path');
const cors = require('cors');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var userModel = require('./models.js').User;
var mongoose = require('mongoose');

// put your mongo db url here 
// i should prob abstract this more to gitignore and make this a variable ill do it later
mongoose.connect('mongodb://ricestudent:rice2020@ds129004.mlab.com:29004/ricenlf')

//run middleware
app.use(cors());
app.options('*', cors());

//parse inc requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// to get the data from the db just testing things

// app.get('/user', (req, res) => {
//     userModel.findOne({
//         phone_number: req.query.phone_number
//     }, function(err, doc) {

//         res.status(200).send(doc);
//     });
// })

app.get('/users', (req, res) => {
    userModel.find({
    }, function(err, doc) {
        res.status(200).send(doc);
    });
})



app.get('/', (req, res) => {
    console.log("HELLO")
    res.sendFile(path.resolve(__dirname, '../public/', 'index.html'));

});


//POSTS /submission 
app.post( '/submission', function (req,res,next) {
    console.log(Object.keys(req.body).length)
    console.log(req.body)

    var newUser = new userModel({
        name: req.body.name,
        phone_number: req.body.phone_number,
        house_church: req.body.house_church,
        driver: req.body.driver,
        car_capacity: req.body.car_capacity,
        location: req.body.location,
        special: req.body.special
    })

    newUser.save()

    // need to eventually find a different page for this to go to
    res.status(200).send("thanks for submitting :)")

})

const port = process.env.PORT || 3000;

//remember to run webpack or this path wont find the files needed for the bundle
app.use(express.static(path.resolve(__dirname, '../public/')))

//catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('File Not Found');
    err.status = 404;
    next(err);
});

//server error handle
app.use(function (req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
})

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});

