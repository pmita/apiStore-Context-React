import React from 'react';
//import all our components
import Button from '../Button';

const ProductItem = ({name, price, desc, img}) => {
    return(
        <div className='productItem'>
            <img src={img} alt='our product to sell' />
            <div className='productItem--details'>
                <span className='productItem--name'>{name}</span>
                <span className='productItem--price'>{price}</span>
            </div>

            <p className='productItem--description'>{desc}</p>

            <Button
                btnClass={'btn actionBtn'}
                btnText={'ADD TO CART'}
            />
        </div>
    );
}

export default ProductItem;