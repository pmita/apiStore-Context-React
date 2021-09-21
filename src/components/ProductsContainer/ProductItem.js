import React from 'react';
//import all our components
//import Button from '../Button';

const ProductItem = ({id, name, price, desc, img, isItemInCart, products, setProducts, cartItems, setCartItems}) => {
    //define our event listers
    const addItemHandler = () => {
        //add clicked item on the cartItems state
        setCartItems([...cartItems, {
            name: name,
            price: price,
            amount: 1,
            img: img,
            id: id
        }])

        //update the itemOnBasket state for each product
        const productsUpdated = products.map( productItem => {
            if( productItem.id === id){
                return {...productItem, isItemInCart: true};
            } else {
                return {...productItem};
            }
        });
        setProducts(productsUpdated);
    }

    return(
        <div className='productItem'>
            <img src={img} alt='our product to sell' />
            <div className='productItem--details'>
                <span className='productItem--name'>{name}</span>
                <span className='productItem--price'>{price}</span>
            </div>

            <p className='productItem--description'>{desc}</p>

        <button 
            className='btn actionBtn'
            disabled={isItemInCart}
            onClick={addItemHandler}
        >
            {!isItemInCart ? 'ADD TO CART' : 'ITEM IN BASKET'}
        </button>
        </div>
    );
}

export default ProductItem;