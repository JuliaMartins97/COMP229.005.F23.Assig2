const express = require('express');
const router = express.Router();

const product = require('../controllers/products');


//Create/post a new product
router.post('/products', product.createProduct);

//Get all products
router.get('/products', product.getAllProducts);

//Get a product by ID
router.get('/products/:id', product.getProductById);

//Update a product by ID
router.put('/products/:id', product.updateProduct);

//Delete a product by ID
router.delete('/products/:id',product.deleteProduct);

module.exports = router;
