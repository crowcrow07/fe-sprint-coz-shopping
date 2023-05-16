/* eslint-disable */

const API_BASE = "http://cozshopping.codestates-seb.link/api/v1/products";

export default {
  getAllProducts() {
    const allProducts = fetch({ API_BASE });
    return allProducts;
  },
  getFourProducts() {
    const fourProducts = fetch(`${API_BASE}?count=4`);
    return fourProducts;
  },
};
