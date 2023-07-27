import { useState } from "react";
import Header from "./components/header/Header";
import BodyContainer from "./components/body/BodyContainer";
import Footer from "./components/footer/Footer";
import { TotalProvider } from "./context/totalContext";

function App() {
  return (
    <div>
      <TotalProvider>
        <Header />
      </TotalProvider>
      <BodyContainer />
      <Footer />
    </div>
  );
}

export default App;
