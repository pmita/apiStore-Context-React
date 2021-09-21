import React from 'react';
//importing all components
import ProductsContainer from '../components/ProductsContainer/ProductsContainer';

const Products = () => {
    return(
        <div className='productsPage'>
            <h1>Welcome, here are our products</h1>
            <ProductsContainer />
        </div>
    );
}

export default Products;