const express = require("express");

const TweetController = require("./controllers/TweetController");
const LikeController = require("./controllers/LikeController");

const routes = express.Router();

routes.get("/tweets", TweetController.index);
routes.post("/tweets", TweetController.store);

routes.post("/likes/:id", LikeController.store);

module.exports = routes;
