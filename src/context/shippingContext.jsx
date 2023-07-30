import { createContext, useState } from "react";

const ShippingContext = createContext();

export const ShippingProvider = ({ children }) => {
  const [shipCheck, setShipCheck] = useState(null);
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  const [cartValue, setCartValue] = useState(149)

  // functionality and functions can go here

  return (
    <ShippingContext.Provider
      value={{
        shipCheck,
        setShipCheck,
        isAddedToCart,
        setIsAddedToCart,
        cartValue,
        setCartValue
      }}
    >
      {children}
    </ShippingContext.Provider>
  );
};

export default ShippingContext;