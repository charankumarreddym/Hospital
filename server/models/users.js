
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    firstname: String,
    lastname:String,
    email:String,
    password:String,
    role:String,
    npi:String,
    location:String,
    add1:String,
    add2:String,
    city:String,
    pincode:String,
    state:String,
    country:String

});

module.exports = mongoose.model('users', usersSchema, 'appointUsers');