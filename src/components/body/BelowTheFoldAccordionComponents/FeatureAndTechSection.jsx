import "./FeatureAndTechSection.css"


const FeatureAndTechSection = () => { 
    return (
      <>
        {/* FEATURES SECTION */}
        <li className="features-accordion">
          <div className="featuresDiv">
            <div id="featureHeader">
              <span> Features </span>
            </div>
            <div id="features-accordion__content-container">
              <section id="features-label">
                <ul id="product-features__list">
                  <li className="featuresListLi">
                    • Spacious main compartment securely and comfortably carries
                    small pups up to 20 lbs.
                  </li>
                  <li className="featuresListLi">
                    • Durable ripstop nylon lining is easy to wipe clean in case
                    your dog has an accident
                  </li>
                  <li className="featuresListLi">
                    • Multiple external pockets provide easy access to stored
                    personal items, as well as your pet's leash and treats
                  </li>
                  <li className="featuresListLi">
                    • Includes a collapsible, food-grade TPU water dish when
                    it's time for your pup to hydrate
                  </li>
                  <li className="featuresListLi">
                    • Adjustable and removable sternum and waist straps offer
                    extra support for longer hauls
                  </li>
                  <li className="featuresListLi">
                    • Padded air-mesh back panel and shoulder straps enhance
                    comfort and breathability
                  </li>
                </ul>
                <p className="product-features__origin">Imported.</p>

                <span style={{ fontSize: "medium" }}>
                  Important <strong>WARNING</strong> for California residents
                </span>

                <a href="https://www.rei.com/b/timbuk2/c/dog-carriers">
                  <span style={{ fontSize: "medium" }}>
                    View all Timbuk2 Dog Carriers
                  </span>
                </a>
              </section>
            </div>
          </div>
        </li>
        {/* TECH SPECS SECTION */}
        <li className="tech-specs-accordion">
          <div className="techDiv">
            <div id="technicalHeader">
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
          </div>
        </li>
      </>
    );

}

export default FeatureAndTechSection;