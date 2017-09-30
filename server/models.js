var mongoose = require('mongoose');
var schema = require('./schema');

// var User = mongoose.model('User', schema.userSchema);


module.exports = {
    User: mongoose.model('User', schema.userSchema),
}