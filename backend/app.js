const express = require('express');
const mongoose = require('mongoose')
const path = require('path')
const app = express();
require('dotenv').config()

const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')


mongoose.connect('mongodb+srv://' + process.env.MDB_User + ':' + process.env.MDB_Pass + '@cluster0.xrnytdj.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});



app.use('/api/sauces', productRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')))

module.exports = app;