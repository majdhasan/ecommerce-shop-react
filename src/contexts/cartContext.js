import React, { useState, createContext } from 'react';

export const CartContext = createContext();

// Cart

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    itemsCount: 0,
    cartTotal: 0,
  });

  const calculateCartTotal = (items) => {
    const itemsCount = items.reduce((prev, curr) => prev + curr.qty, 0);
    const cartTotal = items.reduce(
      (prev, curr) => prev + curr.qty * curr.price,
      0
    );

    return { itemsCount, cartTotal };
  };

  const addToCart = (product) => {
    const { items = [] } = cart;
    const productIndex = items.findIndex((item) => item.id === product.id);
    if (productIndex === -1) {
      items.push({
        ...product,
        qty: 1,
      });
    } else {
      items[productIndex].qty++;
    }

    console.log(items);
    const total = calculateCartTotal(items);
    setCart({ items, ...total });
  };

  const removeFromCart = () => {};

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
