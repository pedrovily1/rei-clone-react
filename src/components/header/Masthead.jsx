import "./Masthead.css";
import vector from "/src/assets/Vector.svg";
import Search from "/src/assets/Search.svg";
import Profile from "/src/assets/Profile.svg";
import Cart from "/src/assets/Cart.svg";
import { useContext } from "react";
import TotalContext from "../../context/totalContext";

const Masthead = () => {
  const { cartTotal } = useContext(TotalContext);
  return (
    <div id="Masthead">
      <div id="masthead-left">
        <a href="https://www.rei.com/">
          <img id="img" src="src\assets\oei_logo.png">
          </img>
        </a>
        <a href="https://www.rei.com/">Shop</a>
      </div>

      <div id="masthead-center">
        <form>
          <input
            type="text"
            placeholder="Search for great gear & clothing"
          ></input>
          <button><img src={Search} alt="Logo" id="Search"></img></button>
        </form>
      </div>

      <div id="masthead-right">
        <div id="mastead-actions">

          <div id="container">
            <img src={vector} alt="Logo" id="icon"></img>
            <div id="text-container">
              <div id="details">
                <span id="near-you">Near you</span>
                <span id="open-time">Open til 9pm</span>
              </div>
              <div id="location">
                <span id="sunnyvale">Sunnyvale</span>
              </div>

            </div>

          </div>

          <div id="second-div">
            <a href="https://www.rei.com/login">
              <img src={Profile} alt="Logo"></img>
              <span id="sign-in">Sign In</span>
            </a>
          </div>
          <div id="third-div">
            <a href="https://www.rei.com/ShoppingCart">
              <img src={Cart} alt="Logo"></img>
              <div
                id="cartQty"
                style={
                  cartTotal.length > 0
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
              >
                {cartTotal.length}
              </div>
              <span id="cart">Cart</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masthead;
