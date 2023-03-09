const { products, categories } = require('../db')
const mongoose = require('mongoose');

const Category = require('../models/Category');
const Product = require('../models/Product');
exports.Query = {
    hello: () => ['Hello World', 'my', 'frirnf'],
    products: async (parent, { filter }, context) => {
        let filteredProducts = await Product.find();
        if (filter && filter.status)
            filteredProducts = filteredProducts.filter(fp => fp.status === filter.status)
        return filteredProducts
    },
    product: (parent, args, context) => {
        console.log('parent', parent, 'args', args, 'contect', context)
        const { id } = args; // id will be string 
        return Product.find({ _id: mongoose.Types.ObjectId(id) });
    },
    categories: async (parent, args, context) => await Category.find(),
    category: (parent, args, context) => {
        const { id } = args;
        return Category.find({ _id: mongoose.Types.ObjectId(id) })
    }
};