import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);

  // functionality and functions can go here

  return (
    <CartContext.Provider
      value={{
        itemsInCart,
        setItemsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
