import FWGrey from "./FWGrey";
import FWSand from "./FWSand";
import ModalContext from "../../context/modalContext";
import { useContext } from "react";

const Footer = () => {
  const { modal } = useContext(ModalContext);

  return (
    <div id="Footer" className={modal === true ? "blurred" : "notBlurred"}>
      <FWGrey />
      <FWSand />
    </div>
  );
};

export default Footer;
