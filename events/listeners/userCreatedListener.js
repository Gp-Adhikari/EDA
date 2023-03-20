const userCreatedListener = (user) => {
  console.log(`User created: ${user.name}`);
};

module.exports = { userCreatedListener };
