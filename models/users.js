const Sequelize = require('sequelize');

const sequelize = require('../db/db');

const User = sequelize.define('user', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    _email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    _password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    _name: {
        type: Sequelize.STRING,
        allowNull: true,
    }
});

module.exports = User;