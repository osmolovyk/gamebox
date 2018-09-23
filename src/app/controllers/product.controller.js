const ProductService = require('../services/product.services');


exports.createProduct = async function(req, res) {
  try {
    let newProduct = await ProductService.createProduct(req);
    return res.status(201).json({status: 201, data: newProduct, message: 'Product created successfully'});

  }catch(e){
    return res.status(400).json({status: 400, error: e.message, message: 'Product was not created'});
  }
};

exports.getProducts = async function(req, res) {
  try {
    let products = await ProductService.getProducts(req);
    // Return the products list with the appropriate HTTP Status Code and Message.
    return res.status(200).json({status: 200, data: products, message: 'Products received'});

  } catch(e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({status: 400, message: e.message});
  }
};

exports.getProduct = async function(req, res) {
  try {
    const product = await ProductService.getProduct(req.params.id);
    // Return the products list with the appropriate HTTP Status Code and Message.
    return res.status(200).json({status: 200, data: product, message: 'Product received'});

  }catch (e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({status: 400, message: e.message});
  }
};

// exports.updateProduct = async function(req, res, next) {
//
// };
//
exports.deleteProduct = async function(req, res) {
  try {
    let genre = await ProductService.deleteProduct(req.body.id);
    return res.status(201).json({status: 201, data: genre, message: 'Product deleted successfully'});

  } catch(e){
    return res.status(409).json({status: 409, message: e.message});
  }
};
