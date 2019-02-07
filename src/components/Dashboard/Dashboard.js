import React from 'react';
import Product from './Product';
import './dashboard.css';

const Dashboard = (props) => {

    const { inventory } = props;
    const mappedInventory = inventory.map(product => {
        return <Product product={product} 
                        deleteProductFn={props.deleteProductFn} 
                        selectProductFn={props.selectProductFn} />
    })
    return (
        <div className='dashboard'>
            { mappedInventory }

        </div>
    );
};

export default Dashboard;