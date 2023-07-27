import "./BodyContainer.css";
import TopFullContent from "./TopFullContent";
import ImageContainer from "./ImageContainer";
import ProductHeader from "./ProductHeader";
import BuyBox from "./BuyBox";
import BelowTheFold from "./BelowTheFold";

const BodyContainer = () => {
  return (
    <div id="bodyContainer">
     {/* { <TopFullContent />} */}
    {/* {<ImageContainer />
    <ProductHeader />} */}
      <BuyBox />
     {/* { <BelowTheFold />} */}
    </div>
  );
};

export default BodyContainer;
