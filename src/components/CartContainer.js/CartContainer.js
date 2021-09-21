import React, {useContext} from 'react';
//import our Context Provider
import { ProductsContext } from '../ProductsContext';
//import our components
import CartItem from './CartItem';

const CartContainer = () => {
    //bind our context state with this component
    const [products, setProducts, cartItems, setCartItems] = useContext(ProductsContext);

    return(
        <div className='cartSection'>
            {cartItems.map( item => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    img={item.img}
                    products={products}
                    setProducts={setProducts}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                />
            ))}
        </div>
    );
}

export default CartContainer;