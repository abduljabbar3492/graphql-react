const mongoose = require('mongoose');
const Category = require('../models/Category');
const Product = require('../models/Product');
exports.Mutation = {
    addCategory: (parent, { input }, { categories }) => {
        const { name } = input;
        const newCategory = new Category({
            name
        });
        return newCategory.save();
    },
    addProduct: (parent, { input }, { categories }) => {
        const { name, desc, price, status } = input;
        const newProduct = new Product({
            name,
            desc,
            price,
            status
        });
        return newProduct.save();
    },
    deleteCategory: async (parent, { id }, { products, reviews }) => {
        console.log('id ', id)
        return Category.findByIdAndDelete({ _id: id });
    },
    // deleteProduct: (parent, { id }, { products, reviews }) => {
    //     console.log('id ', id)
    //     products = products.filter(p => p.id !== id);
    //     reviews = reviews.filter(r => r.productId === id);
    //     return true
    // },
    // updateCategory: (parent, { id, input }, { categories }) => {
    //     const index = categories.findIndex(c => c.id.toString() === id);
    //     categories[index] = {
    //         ...categories[index],
    //         ...input
    //     }
    //     return categories[index]
    // }
}