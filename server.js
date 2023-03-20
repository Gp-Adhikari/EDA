const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { MyEmitter } = require("./events/eventEmitter");
const {
  userCreatedListener,
} = require("./events/listeners/userCreatedListener");
const userController = require("./controllers/userController");

const myEmitter = new MyEmitter();

app.use(bodyParser.json());

myEmitter.on("userCreated", userCreatedListener);

// Set up routes
app.post("/users", userController.createUser);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/users`);
});
