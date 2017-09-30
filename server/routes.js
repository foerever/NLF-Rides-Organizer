'use strict'


var express = require('express');
var router = express.Router();

//for connection
var mongoose = require('mongoose');
//to use native promise method lMAO
mongoose.Promise = global.Promise;

//hide this connection file
var connection_info  = require('./connection_info');

//for schema
var schema = require('./schema');
//for mdels
var models = require('./models');
console.log(connection_info);

var db = mongoose.connect( connection_info.connection_info , () => {
    console.log('db connected!')
});

//GET /
router.get( '/books', function (req,res,next) {
    return res.send('HELLO FROM /');
})

//GET /register
router.get( '/', function (req,res,next) {
    return res.send('/register get works');
})

//POSTS /register
router.post( '/submission', function (req,res,next) {
    console.log(Object.keys(req.body).length)
    console.log(req.body)

})

module.exports = router;
