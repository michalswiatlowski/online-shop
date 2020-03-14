const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const products = require('./routes/api/products');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api/products', products);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
