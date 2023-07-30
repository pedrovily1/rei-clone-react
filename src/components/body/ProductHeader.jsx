import "./ProductHeader.css";
import RatingId from "./RatingId";

const ProductHeader = () => {
  return (
    <>
      <div className="product">
        <div className="product-brand">
          <a href="https://www.rei.com/b/timbuk2" id="timbukLink"><span>Timbuk2</span></a>
        </div>
        <div className="product-name">Timbuk2 Muttmover Luxe Pack</div>
        <RatingId />
      </div>
    </>
  );
};

export default ProductHeader;

