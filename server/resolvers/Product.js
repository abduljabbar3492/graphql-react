const { categories } = require('../db')
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Product = require('../models/Product');
exports.Product = {
    category: (parent, args, context) => {
        const categoryId = parent.categoryId
        return Category.find({ _id: mongoose.Types.ObjectId(categoryId) })
    },
    // reviews: ({ id }, args, { reviews }) => {
    //     console.log('id', id)
    //     return reviews.filter(review => review.productId.toString() === id.toString())
    // }
};