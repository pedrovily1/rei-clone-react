import "./ImageContainer.css";
import CurrentImage from "./CurrentImage";
import MuttMoverCarousel from "./MuttMoverCarousel";

const ImageContainer = () => {
  return (
    <section>
      <CurrentImage />
      <MuttMoverCarousel />
    </section>
  );
};

export default ImageContainer;
