import "./RatingId.css";

const RatingId = () => {
  return (
    <>
      <div className="product-details">
        <div className="product-rating">



          <div className="stars">
            <div className="star">
              <img src="src\assets\Star.svg" alt="Icon Description"></img>
            </div>
            <div className="star">
              <img src="/src\assets\Star.svg" alt="Icon Description"></img>
            </div>
            <div className="star">
              <img src="src\assets\Star.svg" alt="Icon Description"></img>
            </div>
            <div className="star">
              <img src="src\assets\Star.svg" alt="Icon Description"></img>
            </div>
            <div className="star empty">
              <img src="src\assets\Starempty.svg" alt="Icon Description"></img>
            </div>
            <a href="https://www.rei.com/product/186314/timbuk2-muttmover-luxe-pack#">
              <div className="rating-details">
                <div className="rating-value">4.1</div>
                <div className="rating-count">9</div>
                <div className="rating-count">Reviews</div>
              </div>
            </a>



            <div className="product-id">
              <div  >Item</div>
              <div  >#186314</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default RatingId;
