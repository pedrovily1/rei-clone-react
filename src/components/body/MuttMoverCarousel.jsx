import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./MuttMoverCarousel.css";

import DogImage from "/src/assets/ProductDivPhotos/DogImage.jpeg";
import frontBackpack from "/src/assets/ProductDivPhotos/frontBackpack.avif";
import backpackback from "/src/assets/ProductDivPhotos/backpackback.avif";
import backpackopened from "/src/assets/ProductDivPhotos/backpackopened.avif";
import guywithdoginbag from "/src/assets/ProductDivPhotos/guywithdoginbag.avif";
import backpack1 from "/src/assets/ProductDivPhotos/backpack1.avif";
import backpacksideview from "/src/assets/ProductDivPhotos/backpacksideview.avif";

const MuttMoverCarousel = () => {
  return (
    <Carousel className="mainPhoto">
      <div>
        <img src={DogImage} />
      </div>
      <div>
        <img src={frontBackpack} />
      </div>
      <div>
        <img src={backpackback} />
      </div>
      <div>
        <img src={backpackopened} />
      </div>
      <div>
        <img src={guywithdoginbag} />
      </div>
      <div>
        <img src={backpack1} />
      </div>
      <div>
        <img src={backpacksideview} />
      </div>
    </Carousel>
  );
};

export default MuttMoverCarousel;
