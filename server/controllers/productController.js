const Product = require('../models/Product')

const createProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct)
    } catch (err) {
        res.status(500).json({message : 'Server error'})
    }
}


const getProducts = async(req, res) => {
    try{
        const products = await Product.find()
        res.status(200).json(products)
    }
    catch{
        console.error("There is a error", error)
        res.status(500).json({message : "Server error"})
    }
}


const singleProduct = async(req, res) => {
    try{
        const product = await Product.findById(req.params.id)
        if(!product){
            return res.status(404).json({message: "Employee not found"})
        }
        res.status(200).json(product)
    }
    catch{
        console.error("There is a error", error)
        res.status(500).json({message : "Server error"})
    }
}

module.exports = { createProduct, getProducts, singleProduct }