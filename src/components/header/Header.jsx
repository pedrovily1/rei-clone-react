import UNav from "./UNav";
import GNav from "./Gnav";
import PromoBar from "./PromoBar.jsx";
import ModalContext from "../../context/modalContext";
import { useContext } from "react";

const Header = () => {
  const { modal } = useContext(ModalContext);

  return (
    <div className={modal === true ? "blurred" : "notBlurred"}>
      <UNav />
      <GNav />
      <PromoBar />
    </div>
  );
};

export default Header;
