import React from 'react';
import './product.css';

const Product = ({ product, deleteProductFn, selectProductFn }) => {
    console.log(product);
    return (
        <div className='product'>
            <img src={product.img} alt='product' />
            <div>
                <h3>Name: {product.name}</h3>
                <h3>Product: {product.price}</h3>
                <div>
                    <button onClick={() => selectProductFn(product.id) }>Edit</button>
                    <button onClick={() => deleteProductFn(product.id) }>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Product;