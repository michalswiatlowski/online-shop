const express = require('express');
const mongodb = require('mongodb');
const Product = require('../../../models/product');
require('dotenv').config();

const router = express.Router();

// GET ROUTE
router.get('/', async (req, res) => {
  Product.find({}, function (err, allProducts) {
    if (err) {
      console.log('An error occured: ', err);
    } else {
      res.status(200).send(allProducts);
    }
  });
});

//Create ***************
router.post('/', async (req, res) => {
  const newProduct = await {
    name: req.body.productData.name,
    seoTitle: req.body.productData.seoTitle,
    description: req.body.productData.description,
    price: req.body.productData.price,
    category: req.body.productData.category,
    availability: req.body.productData.availability,
    pictures: req.body.productData.pictures,
    position: req.body.productData.position,
    promotion: req.body.productData.promotion,
    isShow: req.body.productData.isShow,
    additionalInfo: req.body.productData.additionalInfo,
  };
  Product.create(newProduct, (err, newProduct) => {
    if (err) {
      console.log('An error occured: ', err);
    } else {
      res.status(201).send({ id: newProduct._id, message: 'Produkt został pomyślnie dodany' });
    }
  });
});

// DELETE ROUTE
router.delete('/:id', async (req, res) => {
  Product.deleteOne({ _id: req.params.id }, (err, result) => {
    if (err) {
      console.log('An error occured: ', err);
    } else {
      res.status(201).send({ message: 'Produkt został pomyślnie usunięty' });
    }
  });
});

// EDIT ROUTE
router.put('/:id', async (req, res) => {

  Product.findByIdAndUpdate(req.params.id, req.body.productData,
    (err, result) => {
        if (err) {
        console.log('An error occured: ', err);
      } else {
        res.status(201).send({ id: result._id, message: 'Produkt został pomyślnie zaktualizowany' });
      }
    });
});

async function loadProductsCollection() {
  const client = await mongodb.MongoClient.connect(process.env.DB_MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return client.db('funemki').collection('products');
}

module.exports = router;
