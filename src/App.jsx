import { useState } from "react";
import Header from "./components/header/Header";
import BodyContainer from "./components/body/BodyContainer";
import Footer from "./components/footer/Footer";
import { TotalProvider } from "./context/totalContext";
import { ShippingProvider } from "./context/shippingContext";
import { ModalProvider } from "./context/modalContext";

function App() {
  return (
    <div>
      <TotalProvider>
        <Header />
      </TotalProvider>
      <ModalProvider>
        <ShippingProvider>
          <BodyContainer />
        </ShippingProvider>
      </ModalProvider>
      <Footer />
    </div>
  );
}

export default App;
