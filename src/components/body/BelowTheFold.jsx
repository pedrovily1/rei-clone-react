import "./BelowTheFold.css";

const BelowTheFold = () => {
  return (
    <div id="belowTheFold">
      <section id="product-feature-desc">
        <p class="product-description__text">
          Even if your pup isn't the hiking type, it can still get in on the
          action with the Timbuk2 Muttmover Luxe pack, updated with a deeper
          silhouette and all the amenities for adventurous small breeds.
        </p>
      </section>
      <section id="product-feature-specs">
        <div class="featured-specs__item">
          <div class="featured-specs__name">Gear Capacity (L)</div>
          <div className="featured-specs__name">34 liters</div>
        </div>
        <div></div>
      </section>
      <ul className="accordion-group">
        <li id="features-accordion">
          <h2 id="featureHeader"></h2>
          <div id="features-accordion__content-container">
            <section id="features-label">
              <ul id="product-features__list">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </section>
          </div>
        </li>
        <li id="features-accordion"></li>
        <li id="features-accordion"></li>
        <li id="features-accordion"></li>
        <li id="features-accordion"></li>
      </ul>
    </div>
  );
};

export default BelowTheFold;
