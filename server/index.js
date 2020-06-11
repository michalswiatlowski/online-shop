const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const products = require('./routes/api/products');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.DB_MONGO_URI, {dbName: 'funemki', useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
app.use(cors());
app.use('/api/products', products);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public'));

  // Handle SPA
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
