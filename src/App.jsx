import { useState,useEffect } from "react";
import Header from "./components/header/Header";
import BodyContainer from "./components/body/BodyContainer";
import Footer from "./components/footer/Footer";
import { TotalProvider } from "./context/totalContext";
import { ShippingProvider } from "./context/shippingContext";
import { ModalProvider } from "./context/modalContext";
import CartModal from "./components/body/CartModal";

function App() {

  
  const [comment, setComment] = useState("");
 
  console.log('Component rendered');  // outside useEffect

  useEffect(() => {
    console.log('useEffect called');  // inside useEffect

    fetch('/review/1')
      .then((response) => response.json())
      .then((data) => {
        console.log('Full API response:', data);
        setTimeout(() => {
          setComment(data);
          console.log(data);
         }, 4000);
      });
  }, []);
   


  return (
    <div>
          <ModalProvider>
        <TotalProvider>
          <ShippingProvider>
            <CartModal />

            <Header />
            <BodyContainer  comment={comment} />
            <Footer />
          </ShippingProvider>
        </TotalProvider>
      </ModalProvider>
    </div>
  );
}

export default App;
