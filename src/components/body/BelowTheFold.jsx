import "./BelowTheFold.css";
import FeatureAndTechSection from "./BelowTheFoldAccordionComponents/FeatureAndTechSection.jsx";
import YouMayAlsoLike from "./BelowTheFoldAccordionComponents/YouMayAlsoLike";
import ReviewSection from "./BelowTheFoldAccordionComponents/ReviewSection";
import RelatedCategories from "./BelowTheFoldAccordionComponents/RelatedCategories";
import Dropdown from "/src/assets/Dropdown.svg";
import Thumbsupout from "/src/assets/Thumbsupoutline.svg";
import Thumbsdownout from "/src/assets/Thumbsdownoutline.svg";

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
          <div className="accordion-group">
            {/* FEATURES AND TECH SECTIONS */}
            <div className="features-and-techFlexBox">
              <FeatureAndTechSection />
            </div>
            {/* YOU MAY LIKE PICTURES SECTION */}
            <div className="mayLikeFlexBox">
              <YouMayAlsoLike />
            </div>
            {/* PRODUCT REVIEWS SECTION */}
            <ReviewSection />
            {/* PRODUCT QUESTIONS SECTION */}
            <li id="product-questions-accordion">
              <div className="questions-container">
                <div className="outer-container">
                  <div className="text-container">
                    <div>1 - 4 of 8 Reviews</div>
                  </div>
                  <div className="question-container">
                    <div className="question-box">
                      <div className="question-box-content">
                        <div className="question-sort-container">
                          <div>
                            <div>Sort by </div>
                            <div>Most Helpful </div>
                          </div>
                        </div>

                        <div className="icon-container">
                          <div className="icon-box">
                            <img src={Dropdown} alt="Logo" id="Dropdown"></img>

                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="black-line"></hr>

                <div id="question">
                  <div className="question-text">
                    Q: is this TSA approved? most bags will say if so
                  </div>
                  <div className="username">Costumer</div>
                  <div className="time-ago">8 months ago</div>
                </div>

                <div id="answer-section">
                  <div className="answer-count">1 Answer</div>
                  <div className="answer-button">Answer the question</div>
                </div>

                <div id="answer-container">
                  <div className="answer-section">
                    <span className="answer-label">A:</span>
                    <span className="answer-text">
                      This pack is 18.7 x 12.6 x 9.8 inches.Most airlines
                      require a piece of carry-on luggage to be no bigger than
                      45 linear inches (L + W + H) to meet carry-on size
                      restrictions. This can vary so please check with your
                      airline ahead of time.
                    </span>
                  </div>
                  <div className="username2">REIservice</div>
                  <div className="timestamp">8 months ago</div>
                  <div className="interaction-section">
                    <div className="end-of-page">
                      <div className="helpful">
                        Helpful?
                        <img
                          src={Thumbsupout}
                          alt="Logo"
                          id="Thumbsupout"
                        ></img>
                        (0)
                        <img
                          src={Thumbsdownout}
                          alt="Logo"
                          id="Thumbsdownout"
                        ></img>
                        (0)
                      </div>
                      <div className="innapropriate">
                        Report as inappropriate
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="black-line"></hr>

                <div id="question">
                  <div className="question-text">
                    Q: Can this item be returned after the 1 year mark? Zippers
                    open on the main compartment whenever my dog leans on it and
                    she falls out
                    <div className="username">Costumer</div>
                    <div className="time-ago">8 months ago</div>
                  </div>
                </div>

                <div id="answer-section">
                  <div className="answer-count">1 Answer</div>
                  <div className="answer-button">Answer the question</div>
                </div>

                <div id="answer-container">
                  <div className="answer-section">
                    <span className="answer-label">A:</span>
                    <span className="answer-text">
                      You can learn more about our return policy here:
                      https://www.rei.com/help/returns
                    </span>
                  </div>
                  <div className="username2">REIservice</div>
                  <div className="timestamp">11 months ago</div>
                  <div className="interaction-section">
                    <div className="end-of-page">
                      <div className="helpful">
                        Helpful?
                        <img
                          src={Thumbsupout}
                          alt="Logo"
                          id="Thumbsupout"
                        ></img>
                        (1)
                        <img
                          src={Thumbsdownout}
                          alt="Logo"
                          id="Thumbsdownout"
                        ></img>
                        (0)
                      </div>
                      <div className="innapropriate">
                        Report as inappropriate
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="black-line"></hr>

                <div id="question">
                  <div className="question-text">
                    Q: Would anyone know if this is airline travel approved as
                    well?
                    <div className="username">Costumer</div>
                    <div className="time-ago">8 months ago</div>
                  </div>
                </div>

                <div id="answer-section">
                  <div className="answer-count">1 Answer</div>
                  <div className="answer-button">Answer the question</div>
                </div>

                <div id="answer-container">
                  <div className="answer-section">
                    <span className="answer-label">A:</span>
                    <span className="answer-text">
                      Please consult your airline of choice to learn if this
                      pack is approved for travel on their planes.
                    </span>
                  </div>
                  <div className="username2">REIservice</div>
                  <div className="timestamp">11 months ago</div>
                  <div className="interaction-section">
                    <div className="end-of-page">
                      <div className="helpful">
                        Helpful?
                        <img
                          src={Thumbsupout}
                          alt="Logo"
                          id="Thumbsupout"
                        ></img>
                        (0)
                        <img
                          src={Thumbsdownout}
                          alt="Logo"
                          id="Thumbsdownout"
                        ></img>
                        (2)
                      </div>
                      <div className="innapropriate">
                        Report as inappropriate
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="black-line"></hr>
              </div>
            </li>
          </div>
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
