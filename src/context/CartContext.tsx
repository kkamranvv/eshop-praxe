import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const addItem = () => setCount((prev) => prev + 1);
  return (
    <CartContext.Provider value={{ count, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
