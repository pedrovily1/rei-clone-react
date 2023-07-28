import "./BodyContainer.css";
import TopFullContent from "./TopFullContent";
import ImageContainer from "./ImageContainer";
import ProductHeader from "./ProductHeader";
import BuyBox from "./BuyBox";
import BelowTheFold from "./BelowTheFold";

const BodyContainer = () => {
  return (
    <div id="bodyContainer">
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
