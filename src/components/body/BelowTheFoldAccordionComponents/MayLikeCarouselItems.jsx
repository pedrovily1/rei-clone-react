import React from "react";

const MayLikeCarouselItems = ({ item }) => {
  return (
    <>
      <div className="productsLi">
        <div className="productImageContainer">
          <div className="ImageHolder">
            <img className="productImg" src={item.Icon} loading="lazy"></img>
          </div>
        </div>
        <div className="productDesc">
          <span className="productBrand">{item.Brand}</span>
          <span className="productName">{item.Name}</span>
        </div>
        <div className="productRating">
          <span>
            <img src={item.ReviewStars1}></img>
            <img src={item.ReviewStars2}></img>
            <img src={item.ReviewStars3}></img>
            <img src={item.ReviewStars4}></img>
            <img src={item.ReviewStars5}></img>
          </span>
          <span className="numOfReviews">{item.NumOfReviews}</span>
        </div>
        <div className="productPrice">
          <span>{item.Price}</span>
        </div>
      </div>
    </>
  );
};

export default MayLikeCarouselItems;
