import ProductRestService from "../../service/product-rest-service";

class Product extends Component {
    state = {
      products: [],
    }
  
    async getProducts() {
      const response = await productRestService.getProduct();
      const products = response.data;
      this.setState({ products });
    }
}
