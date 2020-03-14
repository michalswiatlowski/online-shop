const express = require('express');
const mongodb = require('mongodb');
require('dotenv').config();

const router = express.Router();

// GET ROUTE
router.get('/', async (req, res) => {
  const products = await loadProductsCollection();
  res.send(await products.find().toArray());
});

// POST ROUTE
router.post('/', async (req, res) => {
  const products = await loadProductsCollection();
  await products.insertOne({
    model: req.body.model,
    price: req.body.prize,
    createdAt: new Date(),
  });
  res.status(201).send();
});

// DELETE ROUTE
router.delete('/:id', async (req, res) => {
  const products = await loadProductsCollection();
  await products.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});

async function loadProductsCollection() {
  const client = await mongodb.MongoClient.connect(process.env.DB_MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return client.db('funemki').collection('products');
}

module.exports = router;
