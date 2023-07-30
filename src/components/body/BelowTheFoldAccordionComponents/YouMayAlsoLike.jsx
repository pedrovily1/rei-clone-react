import "./YouMayAlsoLike.css";
// IMPORT PRODUCT IMAGES
import BottleOne from "/src/assets/YouMayAlsoLike/Nalegene-poly-bottle.avif";
import BottleTwo from "/src/assets/YouMayAlsoLike/nalgene-poly-bottle 1oz.avif";
import CotoPaxi from "/src/assets/YouMayAlsoLike/CotoPaxi.avif";
import BluePackingCube from "/src/assets/YouMayAlsoLike/expandable-packing-cubeset.avif";
import Thule from "/src/assets/YouMayAlsoLike/thule-compression.avif";
import StraightJar from "/src/assets/YouMayAlsoLike/straight-side-jar.jpeg";
import Star from "/src/assets/Star.svg";

const YouMayAlsoLike = () => {
  return (
    <>
      <li className="youMayLikeTotalSection">
        <div id="mayLikeMainDiv">
          <div id="mayLikeTopSection">
            <div id="topHeader">
              <h2 id="topHeaderH2">You may also like</h2>

              <div id="carousel-component_dots">
                <ol className="carouselDotsOL">
                  <li className="carouselDotsLi">
                    <button className="carouselDotsButton"></button>
                  </li>
                  <li className="carouselDotsLi">
                    <button className="carouselDotsButton"></button>
                  </li>
                  <li className="carouselDotsLi">
                    <button className="carouselDotsButton"></button>
                  </li>
                  <li className="carouselDotsLi">
                    <button className="carouselDotsButton"></button>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <ul className="carousel-component__track">
            {/* FIRST BOTTLE */}
            <li className="productsLi">
              <div className="productImageContainer">
                <div className="ImageHolder">
                  <img
                    className="productImg"
                    src={BottleOne}
                    loading="lazy"
                  ></img>
                </div>
              </div>
              <div className="productDesc">
                <span className="productBrand">Nalgene</span>
                <span className="productName">
                  Polyethylene Bottle - 2 fl. oz.
                </span>
              </div>
              <div className="productRating">
                <span>
                  <img src={Star}></img>
                  <img src={Star}></img>
                  <img src={Star}></img>
                  <img src={Star}></img>
                  <img src={Star}></img>
                </span>
                <span className="numOfReviews">(80)</span>
              </div>
              <div className="productPrice">
                <span>$1.55</span>
              </div>
            </li>
            {/* SECOND BOTTLE */}
            <li className="productsLi">
              <div className="productImageContainer">
                <div className="ImageHolder">
                  <img
                    className="productImg"
                    src={BottleTwo}
                    loading="lazy"
                  ></img>
                </div>
              </div>
              <div className="productDesc">
                <span className="productBrand">Nalgene</span>
                <span className="productName">
                  Polyethylene Bottle - 1 fl. oz.
                </span>
              </div>
              <div className="productRating">
                <span>
                  <img src={Star}></img>
                  <img src={Star}></img>
                  <img src={Star}></img>
                  <img src={Star}></img>
                  <img src={Star}></img>
                </span>
                <span className="numOfReviews">(71)</span>
              </div>
              <div className="productPrice">
                <span>$1.50</span>
              </div>
            </li>
            {/* PACKING CUBE SET BLUE */}
            <li className="productsLi">
              <div className="productImageContainer">
                <div className="ImageHolder">
                  <img
                    className="productImg"
                    src={BluePackingCube}
                    loading="lazy"
                  ></img>
                </div>
              </div>
              <div className="productDesc">
                <span className="productBrand">Nalgene</span>
                <span className="productName">
                  Polyethylene Bottle - 2 fl. oz.
                </span>
              </div>
              <div className="productRating">
                <span>
                  <img src={Star}></img>
                  <img src={Star}></img>
                  <img src={Star}></img>
                  <img src={Star}></img>
                  <img src={Star}></img>
                </span>
                <span className="numOfReviews">(80)</span>
              </div>
              <div className="productPrice">
                <span>$1.55</span>
              </div>
            </li>
            {/* PACKING CUBE SET WHITE */}
            <li className="productsLi">
              <div className="productImageContainer">
                <div className="ImageHolder">
                  <img className="productImg" src={Thule} loading="lazy"></img>
                </div>
              </div>
              <div className="productDesc">
                <span className="productBrand">Nalgene</span>
                <span className="productName">
                  Polyethylene Bottle - 2 fl. oz.
                </span>
              </div>
              <div className="productRating">
                <span>
                  <img src={Star}></img>
                  <img src={Star}></img>
                  <img src={Star}></img>
                  <img src={Star}></img>
                  <img src={Star}></img>
                </span>
                <span className="numOfReviews">(80)</span>
              </div>
              <div className="productPrice">
                <span>$1.55</span>
              </div>
            </li>
            {/* STRAIGHTSIDEJAR BOTTLE */}
            <li className="productsLi">
              <div className="productImageContainer">
                <div className="ImageHolder">
                  <img
                    className="productImg"
                    src={StraightJar}
                    loading="lazy"
                  ></img>
                </div>
              </div>
              <div className="productDesc">
                <span className="productBrand">Nalgene</span>
                <span className="productName">
                  Polyethylene Bottle - 2 fl. oz.
                </span>
              </div>
              <div className="productRating">
                <span>
                  <img src={Star}></img>
                  <img src={Star}></img>
                  <img src={Star}></img>
                  <img src={Star}></img>
                  <img src={Star}></img>
                </span>
                <span className="numOfReviews">(80)</span>
              </div>
              <div className="productPrice">
                <span>$1.55</span>
              </div>
            </li>
            {/* COTOPAXI 90s THEME TRAVEL KIT */}
            <li className="productsLi">
              <div className="productImageContainer">
                <div className="ImageHolder">
                  <img
                    className="productImg"
                    src={CotoPaxi}
                    loading="lazy"
                  ></img>
                </div>
              </div>
              <div className="productDesc">
                <span className="productBrand">Nalgene</span>
                <span className="productName">
                  Polyethylene Bottle - 2 fl. oz.
                </span>
              </div>
              <div className="productRating">
                <span>
                  <img src={Star}></img>
                  <img src={Star}></img>
                  <img src={Star}></img>
                  <img src={Star}></img>
                  <img src={Star}></img>
                </span>
                <span className="numOfReviews">(80)</span>
              </div>
              <div className="productPrice">
                <span>$1.55</span>
              </div>
            </li>
          </ul>
          <br></br>
          <div id="mayLikeBottomSection">
            <div id="mayLikeTopSection">
              <div id="topHeader">
                <h2 id="topHeaderH2">People also viewed</h2>

                <div id="carousel-component_dots">
                  <ol className="carouselDotsOL">
                    <li className="carouselDotsLi">
                      <button className="carouselDotsButton"></button>
                    </li>
                    <li className="carouselDotsLi">
                      <button className="carouselDotsButton"></button>
                    </li>
                    <li className="carouselDotsLi">
                      <button className="carouselDotsButton"></button>
                    </li>
                    <li className="carouselDotsLi">
                      <button className="carouselDotsButton"></button>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <ul className="carousel-component__track">
              {/* FIRST BOTTLE */}
              <li className="productsLi">
                <div className="productImageContainer">
                  <div className="ImageHolder">
                    <img
                      className="productImg"
                      src={BottleOne}
                      loading="lazy"
                    ></img>
                  </div>
                </div>
                <div className="productDesc">
                  <span className="productBrand">Nalgene</span>
                  <span className="productName">
                    Polyethylene Bottle - 2 fl. oz.
                  </span>
                </div>
                <div className="productRating">
                  <span>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                  </span>
                  <span className="numOfReviews">(80)</span>
                </div>
                <div className="productPrice">
                  <span>$1.55</span>
                </div>
              </li>
              {/* SECOND BOTTLE */}
              <li className="productsLi">
                <div className="productImageContainer">
                  <div className="ImageHolder">
                    <img
                      className="productImg"
                      src={BottleTwo}
                      loading="lazy"
                    ></img>
                  </div>
                </div>
                <div className="productDesc">
                  <span className="productBrand">Nalgene</span>
                  <span className="productName">
                    Polyethylene Bottle - 1 fl. oz.
                  </span>
                </div>
                <div className="productRating">
                  <span>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                  </span>
                  <span className="numOfReviews">(71)</span>
                </div>
                <div className="productPrice">
                  <span>$1.50</span>
                </div>
              </li>
              {/* PACKING CUBE SET BLUE */}
              <li className="productsLi">
                <div className="productImageContainer">
                  <div className="ImageHolder">
                    <img
                      className="productImg"
                      src={BluePackingCube}
                      loading="lazy"
                    ></img>
                  </div>
                </div>
                <div className="productDesc">
                  <span className="productBrand">Nalgene</span>
                  <span className="productName">
                    Polyethylene Bottle - 2 fl. oz.
                  </span>
                </div>
                <div className="productRating">
                  <span>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                  </span>
                  <span className="numOfReviews">(80)</span>
                </div>
                <div className="productPrice">
                  <span>$1.55</span>
                </div>
              </li>
              {/* PACKING CUBE SET WHITE */}
              <li className="productsLi">
                <div className="productImageContainer">
                  <div className="ImageHolder">
                    <img
                      className="productImg"
                      src={Thule}
                      loading="lazy"
                    ></img>
                  </div>
                </div>
                <div className="productDesc">
                  <span className="productBrand">Nalgene</span>
                  <span className="productName">
                    Polyethylene Bottle - 2 fl. oz.
                  </span>
                </div>
                <div className="productRating">
                  <span>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                  </span>
                  <span className="numOfReviews">(80)</span>
                </div>
                <div className="productPrice">
                  <span>$1.55</span>
                </div>
              </li>
              {/* STRAIGHTSIDEJAR BOTTLE */}
              <li className="productsLi">
                <div className="productImageContainer">
                  <div className="ImageHolder">
                    <img
                      className="productImg"
                      src={StraightJar}
                      loading="lazy"
                    ></img>
                  </div>
                </div>
                <div className="productDesc">
                  <span className="productBrand">Nalgene</span>
                  <span className="productName">
                    Polyethylene Bottle - 2 fl. oz.
                  </span>
                </div>
                <div className="productRating">
                  <span>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                  </span>
                  <span className="numOfReviews">(80)</span>
                </div>
                <div className="productPrice">
                  <span>$1.55</span>
                </div>
              </li>
              {/* COTOPAXI 90s THEME TRAVEL KIT */}
              <li className="productsLi">
                <div className="productImageContainer">
                  <div className="ImageHolder">
                    <img
                      className="productImg"
                      src={CotoPaxi}
                      loading="lazy"
                    ></img>
                  </div>
                </div>
                <div className="productDesc">
                  <span className="productBrand">Nalgene</span>
                  <span className="productName">
                    Polyethylene Bottle - 2 fl. oz.
                  </span>
                </div>
                <div className="productRating">
                  <span>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                  </span>
                  <span className="numOfReviews">(80)</span>
                </div>
                <div className="productPrice">
                  <span>$1.55</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </>
  );
};

export default YouMayAlsoLike;
