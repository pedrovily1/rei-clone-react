import { useState } from "react";
import Header from "./components/header/Header";
import BodyContainer from "./components/body/BodyContainer";
import Footer from "./components/footer/Footer";
import { TotalProvider } from "./context/totalContext";
import { ShippingProvider } from "./context/shippingContext";
import { ModalProvider } from "./context/modalContext";
import CartModal from "./components/body/CartModal";

function App() {
  return (
    <div>
      <ModalProvider>
        <TotalProvider>
          <ShippingProvider>
            <CartModal />

            <Header />
            <BodyContainer />
            <Footer />
          </ShippingProvider>
        </TotalProvider>
      </ModalProvider>
    </div>
  );
}

export default App;
