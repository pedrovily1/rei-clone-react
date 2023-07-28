import "./BodyContainer.css";
import TopFullContent from "./TopFullContent";
import ImageContainer from "./ImageContainer";
import ProductHeader from "./ProductHeader";
import BuyBox from "./BuyBox";
import BelowTheFold from "./BelowTheFold";
import CartModal from "./CartModal";
import ModalContext from "../../context/modalContext";
import { useContext } from "react";

const BodyContainer = () => {
  const { modal } = useContext(ModalContext);

  return (
    <div
      id="bodyContainer"
      className={modal === true ? "blurred" : "notBlurred"}
    >
      <TopFullContent />
      <div id="display">
        <ImageContainer />
        <div id="display-details">
          <ProductHeader />
          <BuyBox />
        </div>
      </div>
      <BelowTheFold />
    </div>
  );
};

export default BodyContainer;
