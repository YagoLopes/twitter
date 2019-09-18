const express = require("express");
const cors = require("cors");

const app = express();

const mongoose = require("mongoose");
const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose
  .connect("mongodb://mongodb/twitter", { useNewUrlParser: true })
  .then(() => {
    console.log("#############################################");
    console.log("Connected to MongoDB");
    console.log("#############################################");
  })
  .catch(err => {
    console.log("#############################################");
    console.log(err);
    console.log("#############################################");
    process.exit(1); //quit the process
  });

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(require("./routes"));

server.listen(4000, () => {
  console.log("#############################################");
  console.log("NodeJS and Express Strated.");
  console.log("#############################################");
});
