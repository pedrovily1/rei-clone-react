import { useState, useEffect } from "react";
import "./ReviewSection.css";
import Star from "/src/assets/Star.svg";
import Starempty from "/src/assets/Starempty.svg";
import Photo1 from "/src/assets/Photo1.jpg";
import Photo2 from "/src/assets/Photo2.jpg";
import Photo3 from "/src/assets/Photo3.jpg";
import Thumbsup from "/src/assets/Thumbsup.svg";
import DropDown from "/src/assets/dropdown.svg"
import Starbold from '/src/assets/Starbold.svg';
import Checkmark from '/src/assets/checkmark.svg';
import Thumbsupoutline from '/src/assets/Thumbsupoutline.svg';
import Thumbsdownoutline from '/src/assets/Thumbsdownoutline.svg';

const ReviewSection = ( ) => {

  const [comment, setComment] = useState("");

  console.log("Component rendered"); // outside useEffect

  useEffect(() => {
    console.log("useEffect called"); // inside useEffect

    fetch("/review/1")
      .then((response) => response.json())
      .then((data) => {
        console.log("Full API response:", data);
        setTimeout(() => {
          setComment(data);
          console.log(data);
        }, 4000);
      });
  }, []);

  return (
    <>
      <li id="product-reviews-accordion">
        <div className="Review-text-Header">Reviews</div>
        <div className="section1">
          <div className="ratingSnapShotContainer">
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
          <div className="reviewProductflex">
            <div className="reviewThisProductTitle">Review this Product</div>
            <div className="inner-container">
              <div className="block">
                <div className="inner-block">
                  <div className="inner-content">
                    <img src={Starempty} alt="star" className="svg-image"></img>
                  </div>
                </div>
                <div className="inner-block">
                  <div className="inner-content">
                    <img src={Starempty} alt="star" className="svg-image"></img>
                  </div>
                </div>
                <div className="inner-block">
                  <div className="inner-content">
                    <img src={Starempty} alt="star" className="svg-image"></img>
                  </div>
                </div>
                <div className="inner-block">
                  <div className="inner-content">
                    <img src={Starempty} alt="star" className="svg-image"></img>
                  </div>
                </div>
                <div className="inner-block">
                  <div className="inner-content">
                    <img src={Starempty} alt="star" className="svg-image"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="info">
              Adding a review will require a valid email for
              <br />
              verification
            </div>
          </div>
        </div>
        <hr className="black-line-image"></hr>

        <div className="reviewCardsDiv">
          <div className="review-card">
            <div className="header-review-card">Most Helpful Favorable Review</div>
            <div className="main-section-review">
              <div className="star-section-review">
                <img src={Starbold} alt="" className="star-review"></img>
                <img src={Starbold} alt="" className="star-review"></img>
                <img src={Starbold} alt="" className="star-review"></img>
                <img src={Starbold} alt="" className="star-review"></img>
                <img src={Starbold} alt="" className="star-review"></img>
              </div>
              <div className="title-review">Great Pet Backpack</div>
              <div className="reviewer-info-review">
                <div className="name-review">MKOcean</div>
                <div className="time-review">a year ago</div>
              </div>

              <div className="review-text">
                Really love this pack. Super comfortable for someone with back…
              </div>
              <div className="review-show">Show full review</div>
            </div>
            <div className="footer-review">
              <div className="helpful-review">
                <img className="thumb-helpful" src={Thumbsup} alt=""></img>
                19 people found this helpful
              </div>

              <div className="show-reviews">
                Show Reviews: 5 <img className="starbold" src={Starbold} alt=""></img> and 4 <img className="starbold" src={Starbold} alt=""></img>
                <div className="border-review-1"></div>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="header-review-card">Most Helpful Critical Review</div>
            <div className="main-section-review">
              <div className="star-section-review">
                <img src={Starbold} alt="" className="star-review"></img>
                <img src={Starempty} alt="" className="star-review"></img>
                <img src={Starempty} alt="" className="star-review"></img>
                <img src={Starempty} alt="" className="star-review"></img>
                <img src={Starempty} alt="" className="star-review"></img>
              </div>
              <div className="title-review">Way smaller than described, returning</div>
              <div className="reviewer-info-review">
                <div className="name-review">Hiking20</div>
                <div className="time-review">2 years ago</div>
              </div>

              <div className="review-text">
                We bought this to carry our mini-schnauzer, who loves hiking.
                She...
              </div>
              <div className="review-show">  Show full review </div>
            </div>
            <div className="footer-review">
              <div className="helpful-review">
                <img className="thumb-helpful" src={Thumbsup} alt=""></img>
                65 people found this helpful
              </div>

              <div className="show-reviews">
                Show Reviews: 3 <img className="starbold" src={Starbold} alt="starbold2"></img> 2 <img className="starbold" src={Starbold} alt="starbold2"></img> and 1  <img className="starbold" src={Starbold} alt="starbold2"></img>
                <div className="border-review-2"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="image-costumer">
          <hr className="black-line-image"></hr>

          <div className="costumer-images">Customer Images</div>
          <div id="image-row">

            <div class="image-container-1">
              <div class="gradient-box">
                <img src="https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cmVpLWluYw/99333e4d-8e98-5dd5-bf86-65e672102699" style={{ width: '175px', height: '175px' }} alt="Review Image 1" />
                <img></img>
              </div>
            </div>
            <div class="image-container">
              <div class="gradient-box">
                <img src="https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cmVpLWluYw/c79e0778-2974-5ecf-adbd-08b3ab52c2ea" style={{ width: '175px', height: '175px' }} alt="Review Image 1" />            </div>
            </div>
            <div class="image-container">
              <div class="gradient-box">
                <img src="https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cmVpLWluYw/baf39956-d950-5c7e-a847-673ad457f2e0" style={{ width: '175px', height: '175px' }} alt="Review Image 1" />            </div>
            </div>
          </div>

        </div>

        {/* { <div id="image-row">
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
        </div>} */}
        {/* DIF SEC HERE */}
        <div className="Outer-Review-Text-Container">
          <div className="Review-Text-Container">
            <div className="Review-Box-Container">
              <div className="Review-Box">
                <div className="Review-Display">
                  <div className="Reviews-Count">1 - 8 of 9 reviews</div>

                  <div className="Sort-Container">
                    <div className="Sort-By">Sort by Most Recent</div>
                    <img className="Sort-Icon" src={DropDown} alt="DropDown" />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Reviews component here*/}


        <div className="main-container">
          <div className="user-info">
            <div className="user-details">
              <div className="user-name">Nigel</div>
              <div className="user-location">Michigan</div>
              <div className="user-review">Review <span className="bold-letter">1</span></div>
              <div className="user-votes">Votes <span className="bold-letter">0</span></div>
            </div>
          </div>
          <div className="review-container">
            <div className="review-header">
              <div className="stars">
                <img src={Starbold} alt="" className="star" />
                <img src={Starbold} alt="" className="star" />
                <img src={Starbold} alt="" className="star" />
                <img src={Starbold} alt="" className="star" />
                <img src={Starbold} alt="" className="star" />
              </div>
              <div className="review-rating"></div>
              <div className="review-title">It's a nice backpack if your dog is 12 lbs or less</div>
              <div className="review-date">a month ago</div>
            </div>
            <div className="review-content">   <div>{JSON.stringify(comment)}</div>
            </div>
            <div className="review-footer">
              <div className="review-age"><span className="bold-letter">Age</span> 34-45</div>
              <div className="review-recommendation">
                <img src={Checkmark} alt="" className="thumb" />
                Yes, I recommend this product.
              </div>
            </div>
            <div className="review-images" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <img src="https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cmVpLWluYw/99333e4d-8e98-5dd5-bf86-65e672102699" style={{ width: '175px', height: '175px' }} alt="Review Image 1" />
              <img src="https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cmVpLWluYw/c79e0778-2974-5ecf-adbd-08b3ab52c2ea" style={{ width: '175px', height: '175px' }} alt="Review Image 2" />
            </div>
            <div className="end-of-page">
              <div className="helpful">
                Helpful?
                <img src={Thumbsupoutline} alt="" className="thumb" />
                (0)
                <img src={Thumbsdownoutline} alt="" className="thumb" />
                (0)
              </div>
              <div className="innapropriate">
                Report as inappropriate
              </div>
            </div>
          </div>
        </div>




      </li>
    </>
  );
};

export default ReviewSection;
