import React from "react";
import { Card, Icon, Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom"
import ProductRestService from "../../service/product-rest-service";
import './product.css';

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
    const path = "/product/" + product.id
    return (
      <div className="content">
        <Menu vertical>
          <Menu.Item href='//example.com' target='_blank'>
            Visit another website
          </Menu.Item>
          <Menu.Item link>Link via prop</Menu.Item>
          <Menu.Item onClick={this.handleClick}>Javascript Link</Menu.Item>
        </Menu>

        <Link key={product.id} to={path}>
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
            <Card.Content>
              <Card.Header>{product.name}</Card.Header>
              <Card.Description>
                {product.description}
              </Card.Description>
              <Card.Meta>{product.price} $</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <div>
                <Icon name='user' />
                10 Friends
              </div>
            </Card.Content>
          </Card>
        </Link>
      </div>
    )
  }

  render() {
    console.log(this.state.products)
    return (
      <div className="card-conteiner">
        {this.state.products.map((product) => this.renderProduct(product))}
      </div>
    )
  }
}
export default Product;