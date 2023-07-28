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
            <ReviewSection />
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
