import axios from "axios";

const ProductRestService = {
    get: async function () {
      return await axios.get('http://localhost:3001/api/products');
    },

    getProductById: async function(id) {
      return await axios.get('http://localhost:30001/api/product/' + id);
    }
};

export default ProductRestService;