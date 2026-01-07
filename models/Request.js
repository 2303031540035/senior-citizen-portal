const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
  userId: String,
  type: String, // Emergency, Medical, Daily Help
  description: String,
  status: {
    type: String,
    default: "Pending"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Request", RequestSchema);
