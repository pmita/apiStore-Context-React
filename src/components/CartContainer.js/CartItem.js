import React from 'react';
//import our components
import Button from '../Button';

const CartItem = ({
    id,
    name = 'Product Name',
    price = 'Product Price',
    amount = 1,
    img,
    products,
    setProducts,
    cartItems,
    setCartItems
}) => {

    /*------------Event Handlers Section--------------*/
    const increaseItem = () => {
        const cartItemsUpdated = cartItems.map( item => { //increase the amount for item pressed
            if( item.id === id){
                return {...item, amount: (amount + 1)};
            } else {
                return {...item};
            }
        });
        setCartItems(cartItemsUpdated); //update the cartItems state
    }

    const decreaseItem = () => {
        const cartItemsUpdated = cartItems.map((item, index) => { //decrease the amount for item pressed
            if( item.id === id){
                if( amount === 0){
                    cartItems.splice(index,1);
                    return {...item} 
                } else {
                    return {...item, amount: (amount - 1)};
                }
            } else {
                return {...item};
            }
        });
        setCartItems(cartItemsUpdated); //update the cartItems state
    }

    const removeItemHandler = () => {
        const cartItemsUpdated = cartItems.filter((item) => item.id !== id); //find all items that don't match our requirements
        setCartItems(cartItemsUpdated); //update the state accordingly

        //update the products list when finished
        const productsUpdated = products.map(item => {
            if( item.id === id){
                return {...item, isItemInCart: false};
            } else {
                return {...item};
            }
        });
        setProducts(productsUpdated); //update the products state accordingly
    }

    return(
        <div className='cartItem--container'>
            <img src={img} alt='product goes here' />
            <div className='cartItem--details'>
                <ul>
                    <span className='cartItem--name'>{name}</span>
                    <span className='cartItem--price'>{price}</span>
                </ul>
                <ul className='itemAmount'>
                    <span>Items</span>
                    <span className='cartItem--amount'>{amount}</span>
                </ul>
                <ul className='itemActions'>
                    <button
                        className='cartBtn'
                        disabled={amount ? false : true}
                        onClick={decreaseItem}
                    >
                            Decrease
                    </button>
                    <span
                        className='removeBtn'
                        onClick={removeItemHandler}
                    >
                        Remove
                    </span>
                    <button
                        className='cartBtn'
                        onClick={increaseItem}
                    >   
                        Increase
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default CartItem;