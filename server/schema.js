const { gql } = require('apollo-server');
exports.typeDefs = gql`
type Query {
    hello: [String!]!
    products(filter: ProductsFilterInput): [Product]
    product(id: ID!): Product
    categories: [Category]
    category(id: ID!): Category
    
}
type Product {
    id: ID
    name: String,
    desc: String,
    price: Float,
    status: Boolean,
    category: Category
    reviews: [Review]
}
type Category {
    _id: ID!
    name: String
    products: [Product!]!
}
type Review {
    id: ID!
    name: String
    product: Product
}

type Mutation {
    addCategory(input: AddCategoryInput!): Category!
    addProduct(input: AddProductInput!): Product!
    deleteCategory(id: ID!): Category
    deleteProduct(id: ID!): Boolean
    updateCategory(id: ID!, input: UpdateCategoryInput): Category!
}

input UpdateCategoryInput {
    name: String
}
input AddCategoryInput {
    name: String!
}
input AddProductInput {
    name: String!
    desc: String!
    price: Int!
    status: Boolean
}

input ProductsFilterInput {
    status: Boolean
}
`;