const { ApolloServer } = require('apollo-server');
const colors = require('colors');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();
const { typeDefs } = require('./schema');
const { Query } = require('./resolvers/Query')
const { Category } = require('./resolvers/Category')
const { Product } = require('./resolvers/Product')
const { Mutation } = require('./resolvers/Mutation')
const { products, categories, reviews } = require('./db');

const app = express();

app.use(cors())

//connect to db

connectDB();
const resolvers = {
    Query,
    Mutation,
    Category,
    Product
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        products, categories, reviews
    }
});

server.listen().then(({ url }) => console.log('Server is runnig', url))