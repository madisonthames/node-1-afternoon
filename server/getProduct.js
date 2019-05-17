const products = require('../products.json');

const getProduct = (require, response) => {

    const item = products.find(val => val.id === parseInt(require.params.id));
    if (!item) {
        return response.status(500).send("Item not in list :(");
    }
    response.status(200).send(item);
}

module.exports = getProduct;