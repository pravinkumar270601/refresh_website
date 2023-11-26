import React, { useContext } from 'react';
import CartItem from '../Components/CartItems/CartItem';
import { RefreshContext } from '../Context/RefreshContext';

const Cart = () => {
    return (
        <div className='Cart '>
            <CartItem/>            
        </div>
    );
};

export default Cart;