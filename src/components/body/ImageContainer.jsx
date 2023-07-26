import "./ImageContainer.css";
import CurrentImage from "./CurrentImage";
import MuttMoverCarousel from "./MuttMoverCarousel";

const ImageContainer = () => {
  return (
    <section id="imagecontainer">
      <CurrentImage />
      <MuttMoverCarousel />
    </section>
  );
};

export default ImageContainer;
