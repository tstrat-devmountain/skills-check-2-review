const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('Successfully connected to DB');
}).catch (err => console.log('An Error occurred while attempting to connect to the database'));


/* ------  Endpoints ------ */

// GET /api/inventory

// POST /api/product

// PUT /api/inventory/:id

// DELETE /api/inventory/:id


const port = process.env.SERVER_PORT || 4050;

app.listen(port, () => console.log(`Server is up on port: ${port}.  Don't spook the monkey 🙉`));