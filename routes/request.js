const express = require("express");
const Request = require("../models/Request");

const router = express.Router();

router.post("/create", async (req, res) => {
  const request = new Request(req.body);
  await request.save();
  res.json({ message: "Help request submitted" });
});

router.get("/all", async (req, res) => {
  const requests = await Request.find();
  res.json(requests);
});

module.exports = router;
