const mongoose = require('mongoose');

const Category = require('../models/Category');
const Product = require('../models/Product');

exports.Category = {
    products: (parent, args, context) => {
        console.log('qwq', parent)
        const categoryId = parent.id;
        return Product.find({ category_id: mongoose.Types.ObjectId(categoryId) })
    }
};