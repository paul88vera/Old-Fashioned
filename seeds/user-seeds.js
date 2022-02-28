const { User } = require("../models");

const userdata = [
  {
    username: "steepllama",
    email: "email@email.com",
    password: "123",
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
