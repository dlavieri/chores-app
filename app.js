const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/routes');

const db = require('./db/db');
const User = require('./models/users');
const Plant = require('./models/plants');
const PlantType = require('./models/plant-types');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());

app.use(routes);

if (process.env.NODE_ENV === "production") {
    // serve static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // handle react routing, return all requests to react app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

Plant.belongsTo(User);
User.hasMany(Plant, { constraints: true, onDelete: "CASCADE" });
Plant.belongsTo(PlantType);

db.sync({force: true})
    .then(() => {
        app.listen(PORT, () => console.log('listening on PORT ' + PORT))
    })
    .catch(err => console.log(err))
