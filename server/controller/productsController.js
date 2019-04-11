module.exports = {
  getProducts(req, res) {
    const db = req.app.get("db");
    db.get_products()
      .then(products => {
        res.status(200).send(products);
      })
      .catch(err => {
        console.error("Error in getProducts sql", err);
        res
          .status(500)
          .send({ message: "An Error has occurred on the server", err });
      });
  },
  getOneProduct(req, res) {
    const db = req.app.get("db");
    const { id } = req.params;
    db.get_one_product([id])
      .then(products => {
        res.status(200).send(products[0]);
      })
      .catch(err => {
        console.error("Error in getOneProduct sql", err);
        res
          .status(500)
          .send({ message: "An Error has occurred on the server", err });
      });
  },
  addProduct(req, res) {
    const db = req.app.get("db");
    const { name, price, img } = req.body;

    db.add_product([name, price, img])
      .then(products => {
        res.status(200).send(products);
      })
      .catch(err => {
        console.error("Error in addProduct sql", err);
        res
          .status(500)
          .send({ message: "An Error has occurred on the server", err });
      });
  },
  updateProduct(req, res) {
    let { id } = req.params;
    if (!id) {
      id = req.query.id;
    }

    if (!id) {
      return res
        .status(400)
        .send({ message: "Invalid or missing 'id' on request" });
    }

    const db = req.app.get("db");
    const { name, price, img } = req.body;

    db.update_product([name, price, img, id])
      .then(products => {
        res.status(200).send(products);
      })
      .catch(err => {
        console.error("Error in updateProduct sql", err);
        res
          .status(500)
          .send({ message: "An Error has occurred on the server", err });
      });
  },
  deleteProduct(req, res) {
    let { id } = req.params;

    if (!parseInt(id, 10)) {
      return res
        .status(400)
        .send({ message: "Invalid or missing 'id' on request" });
    }
    id = parseInt(id, 10);
    const db = req.app.get("db");
    db.delete_product([id])
      .then(products => {
        res.status(200).send(products);
      })
      .catch(err => {
        console.error("Error in deleteProduct sql", err);
        res
          .status(500)
          .send({ message: "An Error has occurred on the server", err });
      });
  }
};
