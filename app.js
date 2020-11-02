const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
    // serve static files
    app.use(express.static(path.join(__dirname, 'clinet/build')));
    // handle react routing, return all requests to react app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.listen(PORT, () => console.log('listening on PORT ' + PORT))