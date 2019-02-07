const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()
const productsController = require('./controllers/productsController');
const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('Successfully connected to DB');
}).catch (err => console.log('An Error occurred while attempting to connect to the database'));


/* ------  Endpoints ------ */

// GET /api/inventory
app.get('/api/inventory', productsController.getInventory);

app.get('/api/inventory/:id', productsController.getOne)


// POST /api/products
app.post('/api/products', productsController.addProduct);

// PUT /api/products/:id
app.put('/api/products', productsController.editProduct)
// DELETE /api/product/:id
app.delete('/api/products/:id', productsController.deleteProduct);


const port = process.env.SERVER_PORT || 4050;

app.listen(port, () => console.log(`Server is up on port: ${port}.  Don't spook the monkey 🙉`));