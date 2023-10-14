const { Product }= require('../models/products');

// Create a new product
exports.createProduct = async (req, res, next) => {
  try {
    const { name, description, price, published, category } = req.body;

    const product = new Product({
      name,
      description,
      price,
      published,
      category,
    });

    await product.save();

    res.status(201).json(product);
  } catch (error) {
    console.log(`ERRORRRRRRRRRR::: ${error}`);
    res.status(500).json({ error: 'Failed to create the product.' });
  }
};

//Get all products
exports.getAllProducts = async (req, res, next) => {
  try {
    console.log('teste');
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to retrieve products.' });
  }
};

// Get a product by ID
exports.getProductById = async (req, res,next) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById({productId}, '-password');

    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve the product.' });
  }
};

// Update a product by ID
exports.updateProduct = async (req, res,next) => {
  try {
    const productId = req.params.id;
    const { name, description, price, published, category } = req.body;

    const product = await Product.findByIdAndUpdate(
      productId,
      { name, description, price, published, category },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the product.' });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByIdAndRemove(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the product.' });
  }
};
