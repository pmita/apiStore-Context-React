import React, {useContext} from 'react';
//import our context provider
import { ProductsContext } from '../ProductsContext';
//importing our components
import ProductItem from './ProductItem';

const ProductsContainer = () => {
    //bind our context state with this component
    const [products, setProducts] = useContext(ProductsContext);
    return(
        <div className='productsSection'>
            {products.map( item => (
                <ProductItem 
                    key={item.id} 
                    name={item.name}
                    price={item.price}
                    desc={item.description}
                    img={item.img}
                />
            ))}
        </div>
    );
}

export default ProductsContainer;
