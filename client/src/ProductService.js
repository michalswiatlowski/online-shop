import axios from 'axios';
import moment from 'moment';

const url = 'http://localhost:4000/api/products/';

class ProductService {
  // Get Products
  static async getProducts() {
    const res = await axios.get(url);
    try {
      const data = res.data;
      return data.map((product) => ({
        ...product,
        createdAt: moment(product.createdAt).format("DD/MM/YYYY"),
        isNew: moment().diff(product.createdAt) < 86400000 * 30 // 30 days
      }));
    } catch (err) {
      return err;
    }
  }

  static async getProduct(id) {
    const res = await axios.get(url);
    try {
      const data = res.data;
      return data.filter((product) => {
        return product._id === id;
      });
    } catch (err) {
      return err;
    }
  }

  // Post Products
  static insertProduct(productData) {
    console.log(productData);
    return axios.post(url, { productData });
  }
  // Delete Products
  static deleteProduct(id) {
    console.log(`${url}${id}`);
    return axios.delete(`${url}${id}`, id);
  }

  // Edit Product
  static editProduct(productData) {
    console.log(productData);
    return axios.put(`${url}${productData._id}`, { productData });
  }

  // Upload Image
  static uploadFile(file, id) {
    console.log(file, id);
    console.log(`${url}${id}/images/`);
    return axios.post(`${url}${id}/images/`, file, id);
  }
}

export default ProductService;
