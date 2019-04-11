import React, { Component } from "react";
import axios from "axios";
import "./dashboard.css";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };

    this.getAllProducts = this.getAllProducts.bind(this);
    this.deleteCouch = this.deleteCouch.bind(this);
  }

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts() {
    axios.get("/api/products").then(res => {
      this.setState({
        products: res.data
      });
    });
  }

  deleteCouch(id) {
    axios.delete(`/api/products/${id}`).then(res => {
      this.setState({
        products: res.data
      });
      // this.getAllProducts()
    });
  }

  render() {
    const { products } = this.state;

    const productDisplay = products.map(prod => {
      return (
        <div className="couch" key={prod.product_id}>
          <h3>{prod.name}</h3>
          <h3>${prod.price}.00</h3>
          <img src={prod.img} alt="couch" />
          <Link to={`/edit/${prod.product_id}`}>Edit</Link>
          <button onClick={() => this.deleteCouch(prod.product_id)}>
            Delete
          </button>
        </div>
      );
    });
    return <div className="dashboard">{productDisplay}</div>;
  }
}
