import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "",
      name: "",
      price: 0,
      edit: false
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      axios.get(`/api/products/${id}`).then(res => {
        const { name, price, img } = res.data;
        this.setState({
          imgUrl: img,
          name,
          price,
          edit: true
        });
      });
    }
  }

  addProduct = () => {
    const { imgUrl, name, price } = this.state;
    const payload = {
      name,
      price,
      img: imgUrl
    };
    axios.post("/api/products", payload).then(() => {
      this.clearForm();
      this.props.history.push("/");
    });
  };

  editProduct = () => {
    const { imgUrl, name, price } = this.state;
    const { id } = this.props.match.params;
    const payload = {
      name,
      price,
      img: imgUrl
    };
    axios.put(`/api/products/${id}`, payload).then(() => {
      this.clearForm();
      this.props.history.push("/");
    });
  };

  clearForm = () => {
    this.setState({
      imgUrl: "",
      name: "",
      price: 0
    });
  };

  render() {
    const { imgUrl, name, price, edit } = this.state;
    console.log("Edit", edit);
    return (
      <div className="form">
        <img src={imgUrl} alt="my stuff" />
        <label>Image Url:</label>
        <input
          value={imgUrl}
          onChange={event => this.setState({ imgUrl: event.target.value })}
        />
        <label>Product Name:</label>
        <input
          value={name}
          onChange={event => this.setState({ name: event.target.value })}
        />
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={event =>
            this.setState({ price: parseInt(event.target.value, 10) })
          }
        />
        <button
          onClick={() => {
            this.clearForm();
            if (edit) {
              this.props.history.push("/");
            }
          }}
        >
          Cancel
        </button>
        <button onClick={edit ? this.editProduct : this.addProduct}>
          {edit ? "Edit" : "Add Product"}
        </button>
      </div>
    );
  }
}
