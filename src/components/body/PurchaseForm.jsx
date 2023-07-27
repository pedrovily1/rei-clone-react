import "./PurchaseForm.css";
import plus from "../../assets/plus.svg";
import minus from "/src/assets/minus.svg";
import greenCheck from "../../assets/greenCheck.svg";
import { useContext } from 'react'
import ShippingContext from "../../context/shippingContext";

const PurchaseForm = () => {

  const { shipCheck, setShipCheck } = useContext(ShippingContext)

  const handleShipClick = (e) => {
    e.preventDefault();

    // shipCheck[0].classList.toggle('clickedShip')
    // setShipCheck(e.currentTarget.id)
    // e.currentTarget.classList.toggle('clickedShip')

    
    
  };

  return (
    // <div id="formHolder">
    <form className="form" id="purchaseForm">
      <span>$149.00</span>

      <div id="color">
        <span>Color: </span>
        <span>Jet Black</span>
        <button>
          <img src="https://www.rei.com/media/color/186314?colorId=9513"></img>
        </button>
      </div>

      <div id="quantity">
        <span>Quantity</span>
        <div>
          <button id="minusBtn">
            <img src={minus}></img>
          </button>
          <input type="number"></input>
          <button id="plusBtn">
            <img src={plus}></img>
          </button>
        </div>
      </div>

      <div id="shipBtnContainer">
        <div id="storeDiv">
          <button
            className="shipToBtns"
            onClick={handleShipClick}
            id="storeShip"
          >
            <span className="shipBtnTitle">Ship to Store</span>
            <div className="shippingText">
              <span className="ready">Ready Fri, Aug 4</span>
              <span>at Sunnyvale</span>
            </div>
            <span>{<strong className="free">FREE</strong>}</span>
          </button>
          <button className="shipEdit">Edit store</button>
        </div>
        <div id="addressDiv">
          <button
            className="shipToBtns"
            onClick={handleShipClick}
            id="addressShip"
          >
            <span className="shipBtnTitle">Ship to address</span>
            <div className="shippingText">
              <span className="ready">By Wed, Aug 2</span>
              <span>to 94103</span>
            </div>
            <span className="ready">
              {<strong className="free">FREE</strong>}
            </span>
          </button>
          <button className="shipEdit">Edit ZIP code</button>
        </div>
      </div>

      <div id="mushroomDiv">
        <img
          src="https://www.rei.com/assets/membership/pdp/membership-spot-illustration/live.svg"
          id="mushrooms"
        ></img>
      </div>

      <div id="becomeMember">
        <div id="memberDiv">
          <span id="memberText">
            Members get an estimated {<strong id="savings">$14.90</strong>} back
            on this item.
          </span>
          <div className="checkboxContainer">
            <input type="checkbox" id="checkBox"></input>
            <label htmlFor="checkBox" id="membershipLabel">
              <span id="checkBoxText">
                Add a{" "}
                {<button id="lifetimeMembership">lifetime membership</button>}{" "}
                for a {<strong id="oneTime">one-time fee</strong>} of $30
              </span>
            </label>
          </div>
        </div>
      </div>

      <span>{<strong>3</strong>} people have added to cart today</span>

      <button id="addToCartBtn">Add to cart-$149.00</button>

      <div id="inStock">
        <span>{<strong>Out of stock</strong>} at Sunnyvale</span>
        <button>Check other stores</button>
      </div>
    </form>
    // </div>
  );
};

export default PurchaseForm;
