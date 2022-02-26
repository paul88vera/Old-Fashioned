const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "steepllama",
    email: "email@email.com",
    password: "123",
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
