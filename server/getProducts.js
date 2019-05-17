const products = require('../products.json');

const getProducts = (request, response) => {
    if (request.query.price) {
        const items = products.filter(val => val.price >= parseInt(request.query.price));
        response.status(200).send(items);
    }
};

module.exports = getProducts;