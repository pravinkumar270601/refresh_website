import React, { createContext, useState, useEffect } from "react";
import { all_product_data } from "../Components/Assets/all_product_data.js";
import { all_product_banner } from "../Components/Assets/all_product_data.js";
import { all_product_cart } from "../Components/Assets/all_product_data.js";

export const RefreshContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product_data.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const RefreshContextProvider = (props) => {
  // Load cart items from local storage or use the default cart
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : getDefaultCart();
  });

  // Save cart items to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  },[cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartItems = () => {
    let totalCartItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalCartItem += cartItems[item];
      }
    }
    return totalCartItem;
  };

  return (
    <RefreshContext.Provider
      value={{
        all_product_data,
        all_product_banner,
        all_product_cart,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartItems,
      }}
    >
      {props.children}
    </RefreshContext.Provider>
  );
};

export default RefreshContextProvider;
