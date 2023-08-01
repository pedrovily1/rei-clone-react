import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import BodyContainer from "./components/body/BodyContainer";
import Footer from "./components/footer/Footer";
import { TotalProvider } from "./context/totalContext";
import { ShippingProvider } from "./context/shippingContext";
import { ModalProvider } from "./context/modalContext";
import CartModal from "./components/body/CartModal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";

function App() {
  

  return (
    <div>
      <Router>
        <ModalProvider>
          <TotalProvider>
            <ShippingProvider>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <>
                      <CartModal />
                      <Header />
                      <BodyContainer   />
                      <Footer />
                    </>
                  }
                ></Route>
                <Route
                  exact
                  path="/developers"
                  element={
                    <>
                      <CartModal />
                      <Header />
                      <AboutPage />
                      <Footer />
                    </>
                  }
                ></Route>
              </Routes>
            </ShippingProvider>
          </TotalProvider>
        </ModalProvider>
      </Router>
    </div>
  );
}

export default App;
