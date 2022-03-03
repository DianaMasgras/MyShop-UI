import React from "react";
import ProductRestService from "../../service/product-rest-service";

class Product extends React.Component {
  state = {
    products: [],
  }

  async componentDidMount() {
    const response = await ProductRestService.getProduct();
    const products = response.data;
    this.setState({ products });
  }

  renderProduct(product) {
    console.log('render product ' + product)
    return <div key={product.name}>prod: {product.name}</div>
  }

  render() {
    console.log(this.state.products)
    return (
      <div>
        {this.state.products.map((product) => this.renderProduct(product))}
      </div>
    )
  }
}
export default Product;