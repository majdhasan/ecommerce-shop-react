import React, { useState, createContext } from 'react';

export const CartContext = createContext();

// Cart
export const CartProvider = ({ children }) => {
  const initialItems = JSON.parse(localStorage.getItem('cart')) || [];

  const calculateCartTotal = (items) => {
    localStorage.setItem('cart', JSON.stringify(items));
    const itemsCount = items.reduce((prev, curr) => prev + curr.qty, 0);
    const cartTotal = items.reduce(
      (prev, curr) => prev + curr.qty * curr.price,
      0
    );

    return { itemsCount, cartTotal };
  };

  const [cart, setCart] = useState({
    items: initialItems,
    ...calculateCartTotal(initialItems),
  });

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

  const removeFromCart = (product) => {
    const { items = [] } = cart;
    const productIndex = items.findIndex((item) => item.id === product.id);
    if (productIndex !== -1) {
      items.splice(productIndex, 1);
    }
    const total = calculateCartTotal(items);
    setCart({
      items,
      ...total,
    });
  };

  const emptyCart = () => {
    const total = calculateCartTotal([]);
    setCart({
      items: [],
      ...total,
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};
