const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["senior", "volunteer", "admin"]
  },
  phone: String,
  address: String
});

module.exports = mongoose.model("User", UserSchema);
