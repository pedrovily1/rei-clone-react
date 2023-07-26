import "./BuyBox.css";
import PurchaseForm from './PurchaseForm'

const BuyBox = () => {
  return (
    <div id="buyBox">
      <PurchaseForm />

      <button id="wishListBtn">
        Add to Wish List
      </button>

      <button>OEI return policy</button>
    </div>
  );
};

export default BuyBox;
