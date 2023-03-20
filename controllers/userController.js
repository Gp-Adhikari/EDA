const { User } = require("../models/user");
const { MyEmitter } = require("../events/eventEmitter");

const createUser = (req, res) => {
  const user = new User(req.body.name, req.body.email);

  const myEmitter = new MyEmitter();
  myEmitter.emit("userCreated", user);

  console.log(
    "\n===== User created =====\nName: " +
      user.name +
      "\nEmail: " +
      user.email +
      "\n========================"
  );

  res.status(201).json({ message: "User created" });
};

module.exports = { createUser };
