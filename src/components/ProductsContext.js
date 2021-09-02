import React, {useState, useEffect, createContext} from 'react'; //import all modules from react
//import our assets
import {productsData} from '../assets/Data';
import {mockCart} from '../assets/MockCart';

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
    //define our state
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    //define our useEffects
    useEffect(() => {
        setProducts(productsData);
    }, [])
    return(
        <ProductsContext.Provider value={[products, setProducts, cartItems, setCartItems]}>
            {props.children}
        </ProductsContext.Provider>
    )
}