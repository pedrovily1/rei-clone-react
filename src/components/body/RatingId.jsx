import "./RatingId.css";

const RatingId = () => {
  return (
    <>
      <div className="product-details">
        <div className="product-rating">
          <a href="https://www.rei.com/product/186314/timbuk2-muttmover-luxe-pack#">
            <div className="star">
              <img src="src\assets\Star.svg" alt="Icon Description"></img>
              <img src="/src\assets\Star.svg" alt="Icon Description"></img>
              <img src="src\assets\Star.svg" alt="Icon Description"></img>
              <img src="src\assets\Star.svg" alt="Icon Description"></img>
              <img src="src\assets\Starempty.svg" alt="Icon Description"></img>
              <span>
                <strong>4.1</strong> | 9 Reviews
              </span>
            </div>
          </a>
        </div>

        <span id="ratingSpan">Item #186314</span>
      </div>
    </>
  );
};

export default RatingId;
