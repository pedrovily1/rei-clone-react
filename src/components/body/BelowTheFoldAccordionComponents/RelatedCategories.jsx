import "./RelatedCategories.css";
import Search from "/src/assets/Search.svg";

const RelatedCategories = () => {
  return (
    <>
      <nav>
        <h2 className="theTitle">Related Categories</h2>
        <div className="relatedBtnDiv">
          <button className="relatedBtns">
            <a
              className="aForRelatedBtns"
              href="https://www.rei.com/c/dog-gear/f/scd-deals"
            >
              <img src={Search} alt=""></img>
              Dog Gear: Deals
            </a>
          </button>
          <button className="relatedBtns">
            <a
              className="aForRelatedBtns"
              href="https://www.rei.com/c/boots/f/f-waterproof"
            >
              <img src={Search} alt=""></img>
              Waterproof Boots
            </a>
          </button>
          <button className="relatedBtns">
            <a
              className="aForRelatedBtns"
              href="https://www.rei.com/b/salomon/c/hiking-footwear"
            >
              <img src={Search} alt=""></img>
              Salomon Hiking Footwear
            </a>
          </button>
          <button className="relatedBtns">
            <a
              className="aForRelatedBtns"
              href="https://www.rei.com/c/kids-hiking-shoes"
            >
              <img src={Search} alt=""></img>
              Kids' Hiking Shoes
            </a>
          </button>
          <button className="relatedBtns">
            <a
              className="aForRelatedBtns"
              href="https://www.rei.com/c/dog-packs"
            >
              <img src={Search} alt=""></img>
              Dog Packs
            </a>
          </button>
          <button className="relatedBtns">
            <a
              className="aForRelatedBtns"
              href="https://www.rei.com/b/vasque/c/footwear"
            >
              <img src={Search} alt=""></img>
              Vasque Footwear
            </a>
          </button>
        </div>
      </nav>
    </>
  );
};

export default RelatedCategories;
