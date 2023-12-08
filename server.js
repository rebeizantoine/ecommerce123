require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnection = require('./config/db');
const productRoutes = require ('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');



const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use ('/product',productRoutes);
app.use ('/cart',cartRoutes);

app.listen(port,  () => {
   dbConnection();
  console.log(`Now listening on port ${port}`);
});
