import "./BuyBox.css";
import PurchaseForm from "./PurchaseForm";

const BuyBox = () => {
  return (
    <div id="buyBox">
      <PurchaseForm />

      <button id="wishListBtn">{<strong>Add to Wish List</strong>}</button>
      <div id="returnDiv">
        <button id="returnPolicy">OEI return policy</button>
      </div>
    </div>
  );
};

export default BuyBox;
