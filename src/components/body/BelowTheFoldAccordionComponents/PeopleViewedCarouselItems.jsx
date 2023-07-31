import React from "react";

const PeopleViewedCarouselItems = ({ items }) => {
  return (
    <>
      {/* people also viewd section */}
      <div className="productsLi">
        <div className="productImageContainer">
          <div className="ImageHolder">
            <img className="productImg" src={items.Icon} loading="lazy"></img>
          </div>
        </div>
        <div className="productDesc">
          <span className="productBrand">{items.Brand}</span>
          <span className="productName">{items.Name}</span>
        </div>
        <div className="productRating">
          <span>
            <img src={items.ReviewStars1}></img>
            <img src={items.ReviewStars2}></img>
            <img src={items.ReviewStars3}></img>
            <img src={items.ReviewStars4}></img>
            <img src={items.ReviewStars5}></img>
          </span>
          <span className="numOfReviews">{items.NumOfReviews}</span>
        </div>
        <div className="productPrice">
          <span>{items.Price}</span>
        </div>
      </div>
    </>
  );
};

export default PeopleViewedCarouselItems;
