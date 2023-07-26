import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./MuttMoverCarousel.css";

const images = [
  "https://www.rei.com/media/89b1723b-057b-4bd9-b84e-86bd56811048.jpg?size=40x40",
  "https://www.rei.com/media/01294c5e-43e3-445d-9f28-782a080e5571.jpg?size=60x60",
  "https://www.rei.com/media/5e503155-a97a-4171-b9f0-be786b3d568b.jpg?size=60x60",
  "https://www.rei.com/media/6d4cc0f3-d223-447f-bc2b-1dfc029886c2.jpg?size=60x60",
  "https://www.rei.com/media/bd1605d2-6d82-4b14-b702-589301a6366a.jpg?size=60x60",
  "https://www.rei.com/media/3b1e51aa-06de-4e84-912f-b40c0a64abd7.jpg?size=60x60",
  "https://www.rei.com/media/2f7e0100-67f8-4e2a-8c2f-94ca4904743a.jpg?size=60x60",
];

const MuttMoverCarousel = () => {
  return (
    <div id="photoBox">
      <Carousel useKeyboardArrows={true}>
        {images.map((URL, index) => (
          <div className="slide">
            <img
              alt="dogPhotos"
              type="DogImage/jpeg"
              src={images}
              key={index}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MuttMoverCarousel;
