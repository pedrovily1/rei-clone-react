import "./YouMayAlsoLike.css";

const YouMayAlsoLike = () => {
  return (
    <>
      <li className="youMayLikeTotalSection">
        <div id="mayLikeMainDiv">
          <div id="mayLikeTopSection">
            <div id="topHeader">
              <h2>You may also like</h2>
            </div>
            <div id="carousel-component_dots">
              <ol>
                <li>
                  <button></button>
                </li>
                <li>
                  <button></button>
                </li>
                <li>
                  <button></button>
                </li>
                <li>
                  <button></button>
                </li>
                <li>
                  <button></button>
                </li>
                <li>
                  <button></button>
                </li>
              </ol>
            </div>
          </div>
          <ul className="carousel-component__track">
            <li className="firstProduct">
              <div id="productImageContainer">
                <div id="ImageHolder">
                  <img></img>
                </div>
              </div>
              <div id="firstProductDesc">
                <span>Nalgene</span>
                <span>Polyethylene Bottle - 2 fl. oz.</span>
              </div>
              <div id="firstProductRating"></div>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div id="mayLikeBottomSection"></div>
        </div>
      </li>
    </>
  );
};

export default YouMayAlsoLike;
