const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the product schema
const ProductSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  published: Boolean,
  category: String
});

// Define the category schema
const CategorySchema = new Schema({
    name: {
        type: String,
    }  
});




// // Create models for 'Product' and 'Category' collections
const Product = mongoose.model('Product', ProductSchema);
const Category = mongoose.model('Category', CategorySchema);

// Export the models
module.exports = {
  Product,
  Category,
};