const express = require("express");
const router = express.Router();
const Usermodel = require("../entity/user");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/admin", (req, res) => {
  res.send("Hello Admin!");
});

router.post("/", (req, res) => {
  const newUser = Usermodel.create(req.body);
  res.status(201).json(newUser);
});

module.exports = router;
