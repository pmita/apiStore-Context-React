import React from 'react';
//import our components
import CartContainer from '../components/CartContainer.js/CartContainer';

const Cart = () => {
    return(
        <div className='cartPage'>
            <h1>Here is your Cart</h1>
            <CartContainer />
        </div>
    );
}

export default Cart;