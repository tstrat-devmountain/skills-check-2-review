

module.exports = {
    getInventory: (req, res) => {
        req.app.get('db').get_products().then(products => {
            res.status(200).json(products);
        }).catch(err => console.log('(Get Inventory) OH NO A BAD HAPPENED: ',err))
    },
    getOne: (req, res) => {
        const { id } = req.params;

        req.app.get('db').get_product([id]).then(products => {
            res.status(200).json(products[0]);
        }).catch(err => console.log('(Get One) OH NO A BAD HAPPENED: ',err))
    },
    addProduct: (req, res) => {
        const { name, price, imgurl } = req.body;

        const db = req.app.get('db');
        db.add_product([name, price, imgurl]).then(products => {
            res.status(200).json(products);
        }).catch(err => console.log('(AddProduct) OH NO A BAD HAPPENED: ',err))

    },
    deleteProduct: (req, res) => {
        const { id } = req.params;

        req.app.get('db').delete_product({id: id}).then(response => {
            res.status(200).json(response);
        }).catch(err => console.log('(DeleteProduct) OH NO A BAD HAPPENED: ',err))

    },
    editProduct: (req, res) => {
        const { id } = req.query;
        const { name, price, imgurl } = req.body;
        if (! id ) {
            res.status(301).json({message: "Add a query string"});
            return;
        }
        if ( ! name || !price || !imgurl ) {
            res.status(301).json({message: "Add a query string"});
            return;
        }
        req.app.get('db').edit_product([name, price, imgurl, id]).then(response => {
            res.status(200).json(response);
        }).catch(err => console.log('(editProduct) OH NO A BAD HAPPENED: ',err))
    }
}