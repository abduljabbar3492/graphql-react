const products = [{
    id: 1,
    name: 'Abdul',
    desc: 'lkhan',
    price: 90.90,
    status: true,
    categoryId: 1
},
{
    id: 2,
    name: 'Kna',
    desc: 'meer',
    price: 90,
    status: false,
    categoryId: 2
}];
const categories = [{
    id: 1,
    name: 'Category one',
},
{
    id: 2,
    name: 'Category two',
}];
const reviews = [{
    id: 1,
    name: 'Review of prod one',
    productId: 1
},
{
    id: 2,
    name: 'Review of prod two',
    productId: 2
}];

module.exports = {
    products,
    categories,
    reviews
}