// IMPORT THE FILES NEEDED
import "./YouMayAlsoLike.css";
import MayLikeCarouselItems from "./MayLikeCarouselItems";
import PeopleViewedCarouselItems from "./PeopleViewedCarouselItems";

// IMPORT YOU MAY ALSO LIKE PRODUCT IMAGES
import BottleOne from "/src/assets/YouMayAlsoLike/Nalegene-poly-bottle.avif";
import BottleTwo from "/src/assets/YouMayAlsoLike/nalgene-poly-bottle 1oz.avif";
import CotoPaxi from "/src/assets/YouMayAlsoLike/CotoPaxi.avif";
import BluePackingCube from "/src/assets/YouMayAlsoLike/expandable-packing-cubeset.avif";
import Thule from "/src/assets/YouMayAlsoLike/thule-compression.avif";
import StraightJar from "/src/assets/YouMayAlsoLike/straight-side-jar.jpeg";

// IMPORT PEOPLE ALSO VIEWDED
import CourierDog from "/src/assets/PeopleAlsoViewed/Courier-Dog.jpeg";
import Fjallraven from "/src/assets/PeopleAlsoViewed/Fjallraven-abisko.avif";
import Matador from "/src/assets/PeopleAlsoViewed/Matador-SEG45.avif";
import MetroSafe from "/src/assets/PeopleAlsoViewed/MetroSafe.jpeg";
import OspreyPorter from "/src/assets/PeopleAlsoViewed/Osprey-Porter.avif";
import SunDogPack from "/src/assets/PeopleAlsoViewed/Sun-Dog-Pack.avif";

// IMPORT REVIEW STARS
import Star from "/src/assets/Star.svg";
import EmptyStar from "/src/assets/Starempty.svg";

const YouMayAlsoLike = () => {
  //May Like Items
  const ItemsOne = [
    {
      id: 1,
      Icon: BottleOne,
      Brand: "Nalgene",
      Name: "Polyethylene Bottle - 2 fl. oz.",
      ReviewStars1: Star,
      ReviewStars2: Star,
      ReviewStars3: Star,
      ReviewStars4: Star,
      ReviewStars5: Star,
      NumOfReviews: "(80)",
      Price: "$1.55",
    },
    {
      id: 2,
      Icon: BottleTwo,
      Brand: "Nalgene",
      Name: "Polyethylene Bottle - 1 fl. oz.",
      ReviewStars1: Star,
      ReviewStars2: Star,
      ReviewStars3: Star,
      ReviewStars4: Star,
      ReviewStars5: Star,
      NumOfReviews: "(71)",
      Price: "$1.50",
    },
    {
      id: 3,
      Icon: Thule,
      Brand: "Thule",
      Name: "Compression Packing Cube Set",
      ReviewStars1: Star,
      ReviewStars2: Star,
      ReviewStars3: Star,
      ReviewStars4: Star,
      ReviewStars5: Star,
      NumOfReviews: "(30)",
      Price: "$44.95",
    },
    {
      id: 4,
      Icon: StraightJar,
      Brand: "Nalgene",
      Name: "Straight-Side Jar - 1 fl. oz.",
      ReviewStars1: Star,
      ReviewStars2: Star,
      ReviewStars3: Star,
      ReviewStars4: Star,
      ReviewStars5: Star,
      NumOfReviews: "(75)",
      Price: "$2.25",
    },
    {
      id: 5,
      Icon: BluePackingCube,
      Brand: "REI Co-op",
      Name: "Expandable Packing Cube Set - Small/Medium/Large",
      ReviewStars1: Star,
      ReviewStars2: Star,
      ReviewStars3: Star,
      ReviewStars4: Star,
      ReviewStars5: Star,
      NumOfReviews: "(75)",
      Price: "$44.95",
    },
    {
      id: 6,
      Icon: CotoPaxi,
      Brand: "CotoPaxi",
      Name: "Cubos Del Dia Travel Cubes - Set of 3",
      ReviewStars1: Star,
      ReviewStars2: Star,
      ReviewStars3: Star,
      ReviewStars4: Star,
      ReviewStars5: Star,
      NumOfReviews: "(75)",
      Price: "$50.00",
    },
  ];
  //People Viewed Items
  const ItemsTwo = [
    {
      id: 1,
      Icon: Matador,
      Brand: "Matador",
      Name: "SEG45 Travel Pack",
      ReviewStars1: Star,
      ReviewStars2: Star,
      ReviewStars3: Star,
      ReviewStars4: Star,
      ReviewStars5: Star,
      NumOfReviews: "(19)",
      Price: "$200.00",
    },
    {
      id: 2,
      Icon: SunDogPack,
      Brand: "Big Agnes",
      Name: "Sun Dog 45 L Pack - Women's",
      ReviewStars1: Star,
      ReviewStars2: Star,
      ReviewStars3: Star,
      ReviewStars4: Star,
      ReviewStars5: Star,
      NumOfReviews: "(3)",
      Price: "$229.95",
    },
    {
      id: 3,
      Icon: MetroSafe,
      Brand: "Pacsafe",
      Name: `Metrosafe X Anti-Theft 16" Commuter Pack`,
      ReviewStars1: Star,
      ReviewStars2: Star,
      ReviewStars3: Star,
      ReviewStars4: EmptyStar,
      ReviewStars5: EmptyStar,
      NumOfReviews: "(2)",
      Price: "$149.95",
    },
    {
      id: 4,
      Icon: OspreyPorter,
      Brand: "Osprey",
      Name: "Osprey Porter 30 Travel Pack",
      ReviewStars1: Star,
      ReviewStars2: Star,
      ReviewStars3: Star,
      ReviewStars4: Star,
      ReviewStars5: EmptyStar,
      NumOfReviews: "(20)",
      Price: "$165.00",
    },
    {
      id: 5,
      Icon: Fjallraven,
      Brand: "Fjallraven",
      Name: "Abisko Hike 35 Travel Pack",
      ReviewStars1: EmptyStar,
      ReviewStars2: EmptyStar,
      ReviewStars3: EmptyStar,
      ReviewStars4: EmptyStar,
      ReviewStars5: EmptyStar,
      NumOfReviews: "(0)",
      Price: "$200.00",
    },
    {
      id: 6,
      Icon: CourierDog,
      Brand: "Thule",
      Name: "Courier Dog Trailer Kit",
      ReviewStars1: Star,
      ReviewStars2: EmptyStar,
      ReviewStars3: EmptyStar,
      ReviewStars4: EmptyStar,
      ReviewStars5: EmptyStar,
      NumOfReviews: "(7)",
      Price: "$149.50",
    },
  ];
  return (
    <>
      <li className="youMayLikeTotalSection">
        <div className="mayLikeMainDiv">
          <div id="mayLikeTopSection">
            <div className="header">
              <h2 className="headerH2">You may also like</h2>
              <div className="carousel-component_dots">
                <ol className="carouselDotsOL">
                  <li className="carouselDotsLi">
                    <button className="carouselDotsButton"></button>
                  </li>
                  <li className="carouselDotsLi">
                    <button className="carouselDotsButton"></button>
                  </li>
                  <li className="carouselDotsLi">
                    <button className="carouselDotsButton"></button>
                  </li>
                  <li className="carouselDotsLi">
                    <button className="carouselDotsButton"></button>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="carousel-component__track">
            {ItemsOne.map((item) => {
              return <MayLikeCarouselItems item={item} key={item.id} />;
            })}
          </div>
          <br></br>
          {/* PEOPLE VIEWED SECTION */}
          <div className="mayLikeMainDiv">
            <div id="mayLikeTopSection">
              <div className="header">
                <h2 className="headerH2">People also viewed</h2>
              </div>
            </div>
            <div className="carousel-component__track">
              {ItemsTwo.map((items) => {
                return (
                  <PeopleViewedCarouselItems items={items} key={items.id} />
                );
              })}
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default YouMayAlsoLike;
