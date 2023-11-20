import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RefreshContext } from "../Context/RefreshContext";
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
    const {all_product_data}=useContext(RefreshContext);
    const {productId} =useParams();
    const product =all_product_data.find((e)=>e.id===Number(productId))
    return (
        <div className='Product'>
            <ProductDisplay product={product}/>
            
        </div>
    );
};

export default Product;