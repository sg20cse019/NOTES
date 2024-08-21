let mongoose = require('mongoose');

let registerUsers = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  password: String
});

let users = mongoose.model('user111', registerUsers);

module.exports = users;
