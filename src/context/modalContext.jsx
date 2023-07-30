import { createContext, useState, useEffect, useRef } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  // functionality and functions can go here

  const overlayRef = useRef();

  useEffect(() => {
    if (modal === true) {
      overlayRef.current.style.visibility = "visible";
    } else {
      overlayRef.current.style.visibility = "collapse";
    }
  }, [modal]);

  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
        overlayRef,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
