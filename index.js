const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://tyshiapro:<db_password>@cluster0.f28s5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
);

app.use(cors());
app.use(bodyParser.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/admin", (req, res) => {
  res.send("Hello Admin!");
});

app.post("/admin", (req, res) => {
  console.log(req.body);
  res.send("POST request to the homepage");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
