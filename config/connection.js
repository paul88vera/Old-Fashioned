const Sequelize = require('sequelize');
const mysql2 = require('mysql2');
const express = require('express');
require('dotenv').config();

// Create connection to database
const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306 
    });

     module.exports = sequelize;