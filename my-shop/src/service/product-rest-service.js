import axios from "axios";

const ProductRestService = {
    getProduct: async function () {
        return await axios.get('http://localhost:8080/products');
    }
};

export default ProductRestService;