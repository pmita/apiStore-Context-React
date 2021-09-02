import React, {useContext} from 'react';
//import our context state
import { ProductsContext } from './ProductsContext';
//import everything react router related
import {Link} from 'react-router-dom';

const Navigation = () => {
    //bind the context state within this component
    const [products, setProducts, cartItems, setCartItems] = useContext(ProductsContext);
    return(
        <nav>
            <Link to='/'>
                <h2>Home</h2>   
            </Link>       
            <Link to='/products'>
                <h2>Products</h2>   
            </Link>       
            <Link to='/cart'>
                <h2
                    className='cartNav--annotation'
                >
                    Cart
                    <span>{cartItems.length ? cartItems.length : ''}</span>
                </h2>   
            </Link>       
        </nav>
    );
}

export default Navigation;