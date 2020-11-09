const Sequelize = require('sequelize');

const sequelize = require('../db/db');

const Plant = sequelize.define('plant', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    _category: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    _type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    _img: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    _location: {
        type: Sequelize.STRING,
    },
    _water: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    _lastWatered: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
    _lastFertilized: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
    _notes: {
        type: Sequelize.STRING,
        allowNull: true,
    }
})

module.exports = Plant;