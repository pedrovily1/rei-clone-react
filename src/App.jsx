import { useState } from "react";
import Header from "./components/header/Header";
import { TotalProvider } from "./context/totalContext";

function App() {
  return (
    <div>
      <TotalProvider>
        <Header />
      </TotalProvider>
    </div>
  );
}

export default App;
