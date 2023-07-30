import "./YouMayAlsoLike.css";
// IMPORT YOU MAY ALSO LIKE PRODUCT IMAGES
import BottleOne from "/src/assets/YouMayAlsoLike/Nalegene-poly-bottle.avif";
import BottleTwo from "/src/assets/YouMayAlsoLike/nalgene-poly-bottle 1oz.avif";
import CotoPaxi from "/src/assets/YouMayAlsoLike/CotoPaxi.avif";
import BluePackingCube from "/src/assets/YouMayAlsoLike/expandable-packing-cubeset.avif";
import Thule from "/src/assets/YouMayAlsoLike/thule-compression.avif";
import StraightJar from "/src/assets/YouMayAlsoLike/straight-side-jar.jpeg";
// IMPORT PEOPLE ALSO VIEWDED
import CourierDog from "/src/assets/PeopleAlsoViewed/Courier-Dog.jpeg";
import Fjallraven from "/src/assets/PeopleAlsoViewed/Fjallraven-abisko.avif";
import Matador from "/src/assets/PeopleAlsoViewed/Matador-SEG45.avif";
import MetroSafe from "/src/assets/PeopleAlsoViewed/MetroSafe.jpeg";
import OspreyPorter from "/src/assets/PeopleAlsoViewed/Osprey-Porter.avif";
import SunDogPack from "/src/assets/PeopleAlsoViewed/Sun-Dog-Pack.avif";

// IMPORT REVIEW STARS
import Star from "/src/assets/Star.svg";
import EmptyStar from "/src/assets/Starempty.svg";

const YouMayAlsoLike = () => {
  return (
    <>
      <li className="youMayLikeTotalSection">
        <div className="mayLikeMainDiv">
          <div id="mayLikeTopSection">
            <div className="header">
              <h2 className="headerH2">You may also like</h2>

              <div className="carousel-component_dots">
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
          <div className="carousel-component__track">
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
          </div>
          <br></br>
          {/* PEOPLE VIEWED SECTION */}
          <div className="mayLikeMainDiv">
            <div id="mayLikeTopSection">
              <div className="header">
                <h2 className="headerH2">People also viewed</h2>

               
              </div>
            </div>
            <div className="carousel-component__track">
              {/* Matador Bag */}
              <li className="productsLi">
                <div className="productImageContainer">
                  <div className="ImageHolder">
                    <img
                      className="productImg"
                      src={Matador}
                      loading="lazy"
                    ></img>
                  </div>
                </div>
                <div className="productDesc">
                  <span className="productBrand">Matador</span>
                  <span className="productName">SEG45 Travel Pack</span>
                </div>
                <div className="productRating">
                  <span>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={EmptyStar}></img>
                  </span>
                  <span className="numOfReviews">(19)</span>
                </div>
                <div className="productPrice">
                  <span>$200.00</span>
                </div>
              </li>
              {/* SunDogPack */}
              <li className="productsLi">
                <div className="productImageContainer">
                  <div className="ImageHolder">
                    <img
                      className="productImg"
                      src={SunDogPack}
                      loading="lazy"
                    ></img>
                  </div>
                </div>
                <div className="productDesc">
                  <span className="productBrand">Big Agnes</span>
                  <span className="productName">
                    Sun Dog 45 L Pack - Women's
                  </span>
                </div>
                <div className="productRating">
                  <span>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={EmptyStar}></img>
                  </span>
                  <span className="numOfReviews">(3)</span>
                </div>
                <div className="productPrice">
                  <span>$229.95</span>
                </div>
              </li>
              {/* MetroSafe */}
              <li className="productsLi">
                <div className="productImageContainer">
                  <div className="ImageHolder">
                    <img
                      className="productImg"
                      src={MetroSafe}
                      loading="lazy"
                    ></img>
                  </div>
                </div>
                <div className="productDesc">
                  <span className="productBrand">Pacsafe</span>
                  <span className="productName">
                    Metrosafe X Anti-Theft 16" Commuter Pack
                  </span>
                </div>
                <div className="productRating">
                  <span>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={EmptyStar}></img>
                    <img src={EmptyStar}></img>
                  </span>
                  <span className="numOfReviews">(2)</span>
                </div>
                <div className="productPrice">
                  <span>$149.95</span>
                </div>
              </li>
              {/* Osprey Porter 30 travel */}
              <li className="productsLi">
                <div className="productImageContainer">
                  <div className="ImageHolder">
                    <img
                      className="productImg"
                      src={OspreyPorter}
                      loading="lazy"
                    ></img>
                  </div>
                </div>
                <div className="productDesc">
                  <span className="productBrand">Osprey</span>
                  <span className="productName">Porter 30 Travel Pack</span>
                </div>
                <div className="productRating">
                  <span>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={EmptyStar}></img>
                  </span>
                  <span className="numOfReviews">(20)</span>
                </div>
                <div className="productPrice">
                  <span>$165.00</span>
                </div>
              </li>
              {/* Abisko Hike 35 */}
              <li className="productsLi">
                <div className="productImageContainer">
                  <div className="ImageHolder">
                    <img
                      className="productImg"
                      src={Fjallraven}
                      loading="lazy"
                    ></img>
                  </div>
                </div>
                <div className="productDesc">
                  <span className="productBrand">Fjallraven</span>
                  <span className="productName">
                    Abisko Hike 35 Travel Pack
                  </span>
                </div>
                <div className="productRating">
                  <span>
                    <img src={EmptyStar}></img>
                    <img src={EmptyStar}></img>
                    <img src={EmptyStar}></img>
                    <img src={EmptyStar}></img>
                    <img src={EmptyStar}></img>
                  </span>
                  <span className="numOfReviews">(0)</span>
                </div>
                <div className="productPrice">
                  <span>$200.00</span>
                </div>
              </li>
              {/* Thule Courier Dog Trailer */}
              <li className="productsLi">
                <div className="productImageContainer">
                  <div className="ImageHolder">
                    <img
                      className="productImg"
                      src={CourierDog}
                      loading="lazy"
                    ></img>
                  </div>
                </div>
                <div className="productDesc">
                  <span className="productBrand">Thule</span>
                  <span className="productName">Courier Dog Trailer Kit</span>
                </div>
                <div className="productRating">
                  <span>
                    <img src={Star}></img>
                    <img src={EmptyStar}></img>
                    <img src={EmptyStar}></img>
                    <img src={EmptyStar}></img>
                    <img src={EmptyStar}></img>
                  </span>
                  <span className="numOfReviews">(7)</span>
                </div>
                <div className="productPrice">
                  <span>$149.95</span>
                </div>
              </li>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default YouMayAlsoLike;
