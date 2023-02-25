const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  Name: String,
  Profile_picture: String,
  Bio: String,
  Phone: String,
  Email: String,
  Password: String,
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = { UserModel };
