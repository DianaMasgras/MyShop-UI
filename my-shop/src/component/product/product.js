import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
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
    return <Card key={product.name}>
    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{product.name}</Card.Header>
      <Card.Description>
        {product.description}
      </Card.Description>
      <Card.Meta>{product.price} $</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card>
  }

  render() {
    console.log(this.state.products)
    return (
      <div>
        {this.state.products.map((product) => this.renderProduct(product))}
        <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Daniel</Card.Header>
            <Card.Description>
              Daniel is a comedian living in Nashville.
            </Card.Description>
            <Card.Meta>Joined in 2016</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              10 Friends
            </a>
          </Card.Content>
        </Card>
      </div>

    )
  }
}
export default Product;