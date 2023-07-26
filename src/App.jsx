import { useState } from "react";
import Header from "./components/header/Header";
import BodyContainer from "./components/body/BodyContainer";
import { TotalProvider } from "./context/totalContext";

function App() {
  return (
    <div>
      <TotalProvider>
        <Header />
      </TotalProvider>
      <BodyContainer />
    </div>
  );
}

export default App;
