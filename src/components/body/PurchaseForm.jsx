import "./PurchaseForm.css";

const PurchaseForm = () => {
  return (
    <form className="form" id="purchaseForm">
      <span>$149.00</span>

      <div id="colorQuantity">
        <span>Color: </span>
        <span>Jet Black</span>
        <button>
          <img src="https://www.rei.com/media/color/186314?colorId=9513"></img>
        </button>
      </div>
    </form>
  );
};

export default PurchaseForm;
