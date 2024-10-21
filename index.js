const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");
const userRouter = require("./routes/user");

mongoose
  .connect(
    `mongodb+srv://${config.mongoUser}:${config.mongoSecret}@cluster0.f28s5.mongodb.net/projet-olivier?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(
    () => {
      console.log("Connected to the database!");
    },
    (err) => {
      console.error("Connection error", err);
    }
  );

app.use(cors());
app.use(bodyParser.json());

app.use("/users", userRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
