const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')
const Product = require('../models/Product')

router.post('/add-product', productController.createProduct)
router.get('/allProducts', productController.getProducts)
router.get('/product/:id', productController.singleProduct)

module.exports = router