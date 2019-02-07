import React, { Component } from 'react';
import './form.css';
import axios from 'axios';
export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: 0,
            imgurl: '',
            editMode: false
        }
    }

    componentDidMount() {
        console.log()
    }

    componentDidUpdate(prevProps, prevState) {
        
        if (this.props.selected && this.props.selected !== prevProps.selected) {
            axios.get(`/api/inventory/${this.props.selected}`).then(res => {
                const { name, price, img } = res.data;
                this.setState({
                    name,
                    price,
                    imgurl: img,
                    editMode: true
                })
            })
        }
    }
    // post new product to db
    // expect a prop function
    addProduct = () => {
        const { name, price, imgurl } = this.state;
        this.props.addProductFn(name, price, imgurl) // calls in App
        this.clearInputs();
    }
    // clear input boxes

    clearInputs = () => {
        this.setState({
            name: '',
            price: 0,
            imgurl: '',
            editMode: false
        })
    }

    editProduct = () => {
        const { name, price, imgurl } = this.state;
        axios.put(`/api/products?id=${this.props.selected}`, { name, price, imgurl }).then(res => {
            this.clearInputs()
            this.props.selectProductFn(null);
            this.props.reset();
        })
    }

    render() {
        const { name, price, imgurl, editMode } = this.state;

        return (
            <div className='form'>
                { imgurl ? <img src={imgurl} alt='coolest thing ever'/> : <div className='no-image'/>}
                <label>Name:
                    <input value={ name } onChange={ e => this.setState({ name: e.target.value }) } />
                </label>
                <label>Price:
                    <input value={ price } onChange={ e => this.setState({ price: e.target.value }) } />
                </label>
                <label>Image Url:
                <input value={ imgurl } onChange={ e => this.setState({ imgurl: e.target.value }) } />
                </label>
                <button onClick={this.clearInputs}>Cancel</button>
                { 
                    editMode ? <button onClick={this.editProduct}>Save Changes</button>
                    :
                        <button onClick={this.addProduct}>Add</button>
                }
                
            </div>
        );
    }
}