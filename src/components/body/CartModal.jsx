import "./CartModal.css";
import { useContext } from "react";
import ModalContext from "../../context/modalContext";
import ModalForCartBtn from "../modal/ModalForCartBtn";

const CartModal = () => {
  const { modal, overlayRef } = useContext(ModalContext);

  return (
    <>
      <div id="overlay" ref={overlayRef}></div>
      <div
        id="modalContainer"
        className={modal === true ? "showModal" : "hideModal"}
      >
        <ModalForCartBtn />
      </div>

    </>
  );
};

export default CartModal;
