const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String },
    desc: { type: String },
    price: { type: Number },
    status: { type: Boolean },
    category_id: { type: mongoose.Types.ObjectId, ref: 'category' }
});

module.exports = mongoose.model('Product', ProductSchema);