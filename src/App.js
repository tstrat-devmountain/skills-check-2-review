import React, { Component } from 'react';
import Form from './components/Form/Form';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import axios from 'axios';
import Header from './components/Header/Header';
import { connect } from 'react-redux';
import { setInventory, addProduct } from './ducks/reducer';


class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedId: null
    }
  }

  // get inventory from database
  componentDidMount() {
    this.fetchInventory();
  }

  fetchInventory = () => {
    axios.get('/api/inventory').then(response => {
      this.props.setInventory(response.data);
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
      this.props.addProduct(response.data);
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
    console.log('reduxState', this.props.inventory);
    return (
      <div className="App">
        <Header />
        <div className='container'>
          <Dashboard inventory={this.props.inventory} deleteProductFn={this.deleteProduct} selectProductFn={this.selectProduct} />
          <Form addProductFn={this.addProduct} 
                selected={this.state.selectedId} 
                selectProductFn={this.selectProduct}
                reset={this.fetchInventory} />
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return  {
    inventory: reduxState.inventory
  }
}


export default connect(mapReduxStateToProps, { setInventory, addProduct })(App);
