const express = require("express");
const massive = require("massive");
const productsController = require("./controller/productsController");
require("dotenv").config();
const app = express();

app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  dbInstance.init();
  console.log("Successfully Connected to Database");
});
//endpoints here
app.get("/api/products", productsController.getProducts);
app.get("/api/products/:id", productsController.getOneProduct);
app.post("/api/products", productsController.addProduct);
app.put("/api/products/:id", productsController.updateProduct);
app.put("/api/products", productsController.updateProduct);
// put
//   replaces the product with new product data completely
// patch
//   updates part of the product
app.delete("/api/products/:id", productsController.deleteProduct);
app.listen(SERVER_PORT || 4000, () =>
  console.log(`Server started, port: SERVER_PORT
Don't spook the monkey 🙈`)
);
