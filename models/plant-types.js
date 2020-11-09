const Sequelize = require('sequelize');

const sequelize = require('../db/db');

const PlantType = sequelize.define('plant-type', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    _category: {
        type: Sequelize.STRING,
        defaultValue: 'Plant',
    },
    _type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    _img: {
        type: Sequelize.STRING,
        defaultValue: 'https://image.flaticon.com/icons/png/512/628/628283.png',
    },
    _water: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
})

module.exports = PlantType;