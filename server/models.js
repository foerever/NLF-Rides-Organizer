var mongoose = require('mongoose');
var schema = require('./schema');

module.exports = {
    User: mongoose.model('User', schema.userSchema),
}