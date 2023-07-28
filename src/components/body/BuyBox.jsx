import "./BuyBox.css";
import PurchaseForm from './PurchaseForm'

const BuyBox = () => {
  return (
    <div id="buyBox">
      <PurchaseForm />

      <button id="wishListBtn">
        {<strong>Add to Wish List</strong>}
      </button>

      <button id="returnPolicy">OEI return policy</button>
    </div>
  );
};

export default BuyBox;
