import { createContext, useState } from "react";

const ShippingContext = createContext();

export const ShippingProvider = ({ children }) => {
  const [shipCheck, setShipCheck] = useState([]);

  // functionality and functions can go here

  return (
    <ShippingContext.Provider
      value={{
        shipCheck,
        setShipCheck,
      }}
    >
      {children}
    </ShippingContext.Provider>
  );
};

export default ShippingContext;