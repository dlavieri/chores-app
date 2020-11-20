const express = require('express');
const User = require('../models/users');
const PlantType = require('../models/plant-types');
const Plant = require('../models/plants');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/signup', (req, res, next) => {
    const user = req.body.email;
    const password = req.body.password;

    User.findByPk(user)
        .then(user => {
            if (user) {
                res.status(303).end();
            }
            return bcrypt.hash(password, 12)
        })
        .then(hashedPass => {
            return User.create({
                _email: email,
                _password: hashedPass,
            })
        })
        .then(() => {
            return res.status(200).end()
        })
        .catch(err => console.log(err))
});

router.post('/login', (req, res, next) => {
    const user = req.body.email;
    const password = req.body.password;
    let loggedInUser;

    User.findByPk(user)
        .then(user => {
            if (!user) {
                return res.status(500).json({error: "User not found"})
            }
            loggedInUser = user;
            return bcrypt.compare(password, user.password);
        })
        .then(isValid => {
            if (!isValid) {
                return res.status(500).json({error: "Incorrect Password"})
            }
            const token = jwt.sign({email: email}, "gatto", {expiresIn: "1h"});
            return res.status(200).json({token: token, user: loggedInUser})
        })
        .catch(err => console.log(err));
})

router.post('/add-plant-type', (req, res, next) => {

})

router.post('/new-plant', (req, res, next) => {
    const user = req.body.email;
    const type = req.body.planttype;
    let foundUser;

    User.findByPk(user)
        .then(user => {
            foundUser= user;
            // find plant type to source most of the info?
            Plant.create()
        })
})

router.get('/fetch-plants', (req, res, next) => {
    const user = req.body.email;

    User.findByPk(user)
        .then(user => {
            return user.getPlants()
        })
        .then(plants => {
            res.status(200).json(plants);
        })
})

module.exports = router;