var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');
//const { getProductById, createProduct } = require('../controllers/products');

/* GET home page. */
router.get('/', indexController.home);

//router.get('/products', indexController.prd);

// Define routes for CRUD operations
router.post('/api/products', product.createProduct);
router.get('/api/products', product.getAllProducts);
router.get('/api/products/:id', product.getProductById);
router.put('/api/products/:id', product.updateProduct);
router.delete('/api/products/:id', product.deleteProduct);

module.exports = router;
