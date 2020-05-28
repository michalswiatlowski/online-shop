import axios from 'axios';

const url = 'http://localhost:4000/api/products/';

class ProductService {
  // Get Products
  static async getProducts() {
    const res = await axios.get(url);
    try {
      const data = res.data;
      return data.map((product) => ({
        ...product,
        createdAt: new Date(product.createdAt),
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
    return axios.post(url, { productData });
  }
  // Delete Products
  static deleteProduct(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default ProductService;
