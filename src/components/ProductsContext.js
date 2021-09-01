import React, {useState, useEffect, createContext} from 'react'; //import all modules from react
//import our assets
import {productsData} from '../assets/Data';

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
    //define our state
    const [products, setProducts] = useState([]);

    //define our useEffects
    useEffect(() => {
        setProducts(productsData);
    }, [])
    return(
        <ProductsContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductsContext.Provider>
    )
}