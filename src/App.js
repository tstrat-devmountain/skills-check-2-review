import React, { Component } from 'react';
import Form from './components/Form/Form';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import axios from 'axios';
import Header from './components/Header/Header';


class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
      selectedId: null
    }
  }

  // get inventory from database
  componentDidMount() {
    this.fetchInventory();
  }

  fetchInventory = () => {
    axios.get('/api/inventory').then(response => {
      this.setState( {
        inventory: response.data
      })
    })
  } 

  // post to inventory
  addProduct = (name, price, imgurl) => {
    const myProduct = {
      name,
      price,
      imgurl
    }
    axios.post('/api/products', myProduct).then(response => {
      this.fetchInventory();
    })
  }

  deleteProduct = (id) => {
    axios.delete(`/api/products/${id}`).then(() => {
      this.fetchInventory();
    })
  }

  selectProduct = (id) => {
    this.setState({
      selectedId : id
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <div className='container'>
          <Dashboard inventory={this.state.inventory} deleteProductFn={this.deleteProduct} selectProductFn={this.selectProduct} />
          <Form addProductFn={this.addProduct} 
                selected={this.state.selectedId} 
                selectProductFn={this.selectProduct}
                reset={this.fetchInventory} />
        </div>
      </div>
    );
  }
}

export default App;
