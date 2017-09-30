var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    phone_number: String,
    house_church: String,
    driver: String,
    car_capacity: String,
    location: String,
    special: String
});

module.exports = {
    userSchema: userSchema,
}