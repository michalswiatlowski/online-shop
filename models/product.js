const moment = require('moment');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  seoTitle: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
    required: true,
  },
  availability: {
    type: Boolean,
  },
  pictures: {
    type: Array,
  },
  position: {
    type: Number,
  },
  promotion: {
    type: Boolean,
  },
  isShow: {
    type: Boolean,
  },
  additionalInfo: {
    type: Object,
  },
  createdAt: {
    type: Date,
    default: moment(),
  },
  isNewManualy: {
    type: Boolean,
  }
},
{ collection : 'products'});

module.exports = mongoose.model('Product', productSchema);