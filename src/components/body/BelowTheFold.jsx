import "./BelowTheFold.css";
import Star from "/src/assets/Star.svg";
import Starempty from "/src/assets/Starempty.svg";

const BelowTheFold = () => {
  return (
    <>
      <div id="belowTheFold">
        {/* EVEN IF YOU PUP CONTAINER SECTION */}
        <section id="product-feature-desc">
          <p className="product-description__text">
            Even if your pup isn't the hiking type, it can still get in on the
            action with the Timbuk2 Muttmover Luxe pack, updated with a deeper
            silhouette and all the amenities for adventurous small breeds.
          </p>
        </section>
        <section id="product-feature-specs">
          <div className="featured-specs__item">
            <div className="featured-specs__name">Gear Capacity (L)</div>
            <div className="featured-specs__values">34 liters</div>
          </div>
          <div className="featured-carryOn">
            <div className="featured-carryOnHeader">Carry-On</div>
            <div className="featured-carryOnYes">Yes</div>
          </div>
        </section>
        {/* FEATURES TO QUESTIONS SECTIONS */}
        <ul className="accordion-group">
          {/* FEATURES SECTION */}
          <li className="features-accordion">
            <div id="featureHeader">
              <span> Features </span>
            </div>
            <div id="features-accordion__content-container">
              <section id="features-label">
                <ul id="product-features__list">
                  <li>
                    Spacious main compartment securely and comfortably carries
                    small pups up to 20 lbs.
                  </li>
                  <li>
                    Durable ripstop nylon lining is easy to wipe clean in case
                    your dog has an accident
                  </li>
                  <li>
                    Multiple external pockets provide easy access to stored
                    personal items, as well as your pet's leash and treats{" "}
                  </li>
                  <li>
                    Includes a collapsible, food-grade TPU water dish when it's
                    time for your pup to hydrate
                  </li>
                  <li>
                    Adjustable and removable sternum and waist straps offer
                    extra support for longer hauls
                  </li>
                  <li>
                    Padded air-mesh back panel and shoulder straps enhance
                    comfort and breathability
                  </li>
                </ul>
                <p className="product-features__origin">Imported.</p>
                <button>
                  <span>
                    {" "}
                    Important <strong>WARNING</strong> for California residents
                  </span>
                </button>
                <a>
                  <span>View all Timbuk2 Dog Carriers</span>
                </a>
              </section>
            </div>
          </li>
          {/* TECH SPECS SECTION */}
          <li className="tech-specs-accordion">
            <div id="featureHeader">
              <span>Technical Specs</span>
            </div>
            <div className="specifications">
              <div className="specs">
                <div className="spec-item">
                  <div className="spec-title">Best Use</div>
                  <div className="spec-description">Hiking, Travel</div>
                </div>
                <div className="spec-item">
                  <div className="spec-title">Bag Style</div>
                  <div className="spec-description">Backpack</div>
                </div>
                <div className="spec-item">
                  <div className="spec-title">Gear Capacity (L)</div>
                  <div className="spec-description">34 liters</div>
                </div>
                <div className="spec-item">
                  <div className="spec-title">Gear Capacity (cu. in.)</div>
                  <div className="spec-description">2,075 cubic inches</div>
                </div>
                <div className="spec-item">
                  <div className="spec-title">Number of Exterior Pockets</div>
                  <div className="spec-description">3 + main compartment</div>
                </div>
                <div className="spec-item">
                  <div className="spec-title">iPad / Tablet Compartment</div>
                  <div className="spec-description">Yes</div>
                </div>
                <div className="spec-item">
                  <div className="spec-title">Carry-On</div>
                  <div className="spec-description">Yes</div>
                </div>
                <div className="spec-item">
                  <div className="spec-title">Number of Stays</div>
                  <div className="spec-description">1 peripheral hoop</div>
                </div>
                <div className="spec-item">
                  <div className="spec-title">Adjustable Torso Length</div>
                  <div className="spec-description">Yes</div>
                </div>
                <div className="spec-item">
                  <div className="spec-title">Fits Torso Length (in.)</div>
                  <div className="spec-description">18-20 inches</div>
                </div>
                <div className="spec-item">
                  <div className="spec-title">Fits Waist/Hips</div>
                  <div className="spec-description">26-46 inches</div>
                </div>
                <div className="spec-item">
                  <div className="spec-title">Material(s)</div>
                  <div className="spec-description">Ripstop nylon</div>
                </div>
                <div className="spec-item">
                  <div className="spec-title">Dimensions</div>
                  <div className="spec-description">
                    18.7 x 12.6 x 9.8 inches
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-title">Weight</div>
                  <div className="spec-description">3 lbs. 12 oz.</div>
                </div>
                <div className="spec-item">
                  <div className="spec-title">Best Use</div>
                  <div className="spec-description">Hiking, Travel</div>
                </div>
                <div className="spec-item">
                  <div className="spec-title">Gender</div>
                  <div className="spec-description">Unisex</div>
                </div>
                <div className="spec-item">
                  <div className="spec-title">Hipbelt</div>
                  <div className="spec-description">Yes</div>
                </div>
              </div>
            </div>
          </li>
          {/* YOU MAY LIKE PICTURES SECTION */}
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
          {/* PRODUCT REVIEWS SECTION */}
          <li id="product-reviews-accordion">
            <div className="container">
              <div className="title">Rating Snapshot</div>
              <div className="reviews">
                <div className="instruction">
                  Select a row below to filter reviews.
                </div>
                <div className="rating-list">
                  <div className="rating-item">
                    <div className="rating-label">5 stars</div>
                    <div className="rating-bar">
                      <div className="fill five-star"></div>
                    </div>
                    <div className="rating-count">6</div>
                  </div>
                  <div className="rating-item">
                    <div className="rating-label">4 stars</div>
                    <div className="rating-bar-4">
                      <div className="fill four-star"></div>
                    </div>
                    <div className="rating-count">1</div>
                  </div>
                  <div className="rating-item">
                    <div className="rating-label">3 stars</div>
                    <div className="rating-bar-3">
                      <div className="fill three-star"></div>
                    </div>
                    <div className="rating-count">0</div>
                  </div>
                  <div className="rating-item">
                    <div className="rating-label">2 stars</div>
                    <div className="rating-bar-2">
                      <div className="fill two-star"></div>
                    </div>
                    <div className="rating-count">1</div>
                  </div>
                  <div className="rating-item">
                    <div className="rating-label">1 star</div>
                    <div className="rating-bar-1">
                      <div className="fill one-star"></div>
                    </div>
                    <div className="rating-count">1</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="product-rating">
              <div id="product-rating-header">
                Product rating
                <div id="product-rating-value">4.1</div>
              </div>
              <div id="product-rating-body">
                <div id="product-rating-score">
                  <div id="product-rating-stars">
                    <img src={Star} alt=""></img>
                    <img src={Star} alt=""></img>
                    <img src={Star} alt=""></img>
                    <img src={Star} alt=""></img>
                    <img src={Starempty} alt=""></img>
                  </div>
                  <div id="product-rating-reviews">
                    <div id="product-rating-number">4.1</div>
                    <div id="product-rating-total-reviews">9 Reviews</div>
                  </div>
                  <div id="product-recommendation">
                    6 out of 8 (75%) reviewers recommend this product
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/* PRODUCT QUESTIONS SECTION */}
          <li id="product-questions-accordion"></li>
        </ul>
      </div>
      {/* Related Categories */}
      <nav>
        <h2>Related Categories</h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </>
  );
};

export default BelowTheFold;
