import "./TopFullContent.css";

const TopFullContent = () => {
  return (
    <div id="topFullContainer">
      <nav className="navComp">
        <ul className="productHeading">
          <li className="productDescText">
            <a href="https://www.rei.com/c/camping-and-hiking">...</a>
            <span className="slashDivider">/</span>
          </li>
          <li className="productDescText">
            <a href="https://www.rei.com/c/dog-gear">Dog Gear</a>
            <span className="slashDivider">/</span>
          </li>
          <li className="productDescText">
            <a href="https://www.rei.com/c/dog-beds-and-carriers">
              Dog Beds and Carriers
            </a>
            <span className="slashDivider">/</span>
          </li>
          <li>
            <a href="https://www.rei.com/c/dog-carriers">Dog Carriers</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopFullContent;
