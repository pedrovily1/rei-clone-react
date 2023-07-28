import "./BelowTheFold.css";
import FeatureAndTechSection from "./BelowTheFoldAccordionComponents/FeatureAndTechSection.jsx";
import YouMayAlsoLike from "./BelowTheFoldAccordionComponents/YouMayAlsoLike";
import ReviewSection from "./BelowTheFoldAccordionComponents/ReviewSection";
import RelatedCategories from "./BelowTheFoldAccordionComponents/RelatedCategories";

const BelowTheFold = () => {
  return (
    <>
      <div id="belowTheFold">
        {/* EVEN IF YOU PUP CONTAINER SECTION */}
        <div className="evenIfPup">
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
        </div>
        {/* FEATURES TO QUESTIONS SECTIONS */}
        <div className="accordion-wrapper-div">
          <ul className="accordion-group">
            {/* FEATURES AND TECH SECTIONS */}
            <div className="features-and-techFlexBox">
              <FeatureAndTechSection />
            </div>
            {/* YOU MAY LIKE PICTURES SECTION */}
            <div className="mayLikeFlexBox">
              <YouMayAlsoLike />
            </div>
            {/* PRODUCT REVIEWS SECTION */}
            <li id="product-reviews-accordion">
              {/* <div className="mainReviewContainer">*/}
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
              <div className="title">Review this Product</div>
              <div className="inner-container">
                <div className="block">
                  <div className="inner-block">
                    <div className="inner-content">
                      <img
                        src={Starempty}
                        alt="star"
                        className="svg-image"
                      ></img>
                    </div>
                  </div>
                  <div className="inner-block">
                    <div className="inner-content">
                      <img
                        src={Starempty}
                        alt="star"
                        className="svg-image"
                      ></img>
                    </div>
                  </div>
                  <div className="inner-block">
                    <div className="inner-content">
                      <img
                        src={Starempty}
                        alt="star"
                        className="svg-image"
                      ></img>
                    </div>
                  </div>
                  <div className="inner-block">
                    <div className="inner-content">
                      <img
                        src={Starempty}
                        alt="star"
                        className="svg-image"
                      ></img>
                    </div>
                  </div>
                  <div className="inner-block">
                    <div className="inner-content">
                      <img
                        src={Starempty}
                        alt="star"
                        className="svg-image"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info">
                Adding a review will require a valid email for
                <br />
                verification
              </div>
              <div className="review-card">
                <div className="header">Most Helpful Favorable Review</div>
                <div className="main-section">
                  <div className="star-section">
                    <img src={Star} alt="" className="star"></img>
                    <img src={Star} alt="" className="star"></img>
                    <img src={Star} alt="" className="star"></img>
                    <img src={Star} alt="" className="star"></img>
                    <img src={Star} alt="" className="star"></img>
                  </div>
                  <div className="title">Great Pet Backpack</div>
                  <div className="reviewer-info">
                    <div className="name">MKOcean</div>
                    <div className="time">a year ago</div>
                  </div>

                  <div className="review">
                    Really love this pack. Super comfortable for someone with
                    back…
                  </div>
                  <div className="review-show">Show full review</div>
                </div>
                <div className="footer">
                  <div className="helpful">
                    <img src={Thumbsup} alt=""></img>
                    19 people found this helpful
                  </div>

                  <div className="show-reviews">
                    Show Reviews:
                    <div className="ratings">
                      <div className="rating">
                        <p className="text">5 </p>
                        <img src={Star} alt=""></img>
                      </div>
                      <div className="rating">
                        <p className="text">and 4</p>
                        <img src={Star} alt=""></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div className="header">Most Helpful Critical Review</div>
                <div className="main-section">
                  <div className="star-section">
                    <img src={Star} alt="" className="star"></img>
                    <img src={Starempty} alt="" className="star"></img>
                    <img src={Starempty} alt="" className="star"></img>
                    <img src={Starempty} alt="" className="star"></img>
                    <img src={Starempty} alt="" className="star"></img>
                  </div>
                  <div className="title">
                    Way smaller than described, returning
                  </div>
                  <div className="reviewer-info">
                    <div className="name">Hiking20</div>
                    <div className="time">2 years ago</div>
                  </div>

                  <div className="review">
                    We bought this to carry our mini-schnauzer, who loves
                    hiking. She
                  </div>
                  <div className="review-show">Show full review</div>
                </div>
                <div className="footer">
                  <div className="helpful">
                    <img src={Thumbsup} alt=""></img>
                    65 people found this helpful
                  </div>

                  <div className="show-reviews">
                    Show Reviews:
                    <div className="ratings">
                      <div className="rating">
                        <p className="text">3 </p>
                        <img src={Star} alt=""></img>
                      </div>
                      <div className="rating">
                        <p className="text">2</p>
                        <img src={Star} alt=""></img>
                      </div>
                      <div className="rating">
                        <p className="text">and 1</p>
                        <img src={Star} alt=""></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="image-row">
                <div className="image-container">
                  <div className="gradient-box">
                    <img
                      style={{ width: "175px", height: "175px" }}
                      src={Photo1}
                      alt="description of image"
                    ></img>
                  </div>
                </div>
                <div className="image-container">
                  <div className="gradient-box">
                    <img
                      style={{ width: "175px", height: "175px" }}
                      src={Photo2}
                      alt="description of image"
                    ></img>
                  </div>
                </div>
                <div className="image-container">
                  <div className="gradient-box">
                    <img
                      style={{ width: "175px", height: "175px" }}
                      src={Photo3}
                      alt="description of image"
                    ></img>
                  </div>
                </div>
              </div>
              {/* DIF SEC HERE */}
              <div className="sortByFlexBox">
                <div className="outer-container">
                  <div className="text-container">
                    <div>1 - 8 of 9 Reviews</div>
                  </div>
                  <div className="review-container">
                    <div className="review-box">
                      <div className="review-content">
                        <div className="sort-container">
                          <div>
                            <div>Sort by </div> <div>Most Recent </div>
                          </div>
                        </div>

                        <div className="icon-container">
                          <div className="icon-box">
                            <img src="/dropdown.svg" alt=""></img>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* PRODUCT QUESTIONS SECTION */}
            <li id="product-questions-accordion"></li>
          </ul>
        </div>
      </div>
      {/* Related Categories */}
      <div className="relatedCatFlexBox">
        <RelatedCategories />
      </div>
    </>
  );
};

export default BelowTheFold;
