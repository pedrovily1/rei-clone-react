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
            {/*The OEI logo*/}
          </img>
        </a>
        <a href="https://www.rei.com/">
          <h3>Shop</h3>
        </a>
      </div>

      <div id="masthead-center">
        <form>
          <input
            type="text"
            placeholder="Search for great gear & clothing"
          ></input>
          <img src={Search} alt="Logo" id="Search"></img>
        </form>
      </div>

      <div id="masthead-right">
        <div id="mastead-actions">
          <div id="container">
            <div id="details">
              <img src={vector} alt="Logo" id="icon"></img>
              <div id="text-container">
                <p id="near-you">Near you</p>
                <p id="open-time">Open til 9pm</p>
              </div>
              <div id="location">
                <p id="sunnyvale">Sunnyvale</p>
              </div>
            </div>
          </div>

          <div id="second-div">
            <div>
              <a href="https://www.rei.com/login">
                <img src={Profile} alt="Logo" id="icon"></img>
                <span id="sign-in">Sign In</span>
              </a>
            </div>
          </div>
          <div id="third-div">
            <a href="https://www.rei.com/ShoppingCart">
              <img src={Cart} alt="Logo" id="icon"></img>
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
