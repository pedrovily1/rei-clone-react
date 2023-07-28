import "./CartModal.css";
import { useContext } from "react";
import ModalContext from "../../context/modalContext";

const CartModal = () => {
  const { modal, overlayRef } = useContext(ModalContext);

  return (
    <>
      <div id="overlay" ref={overlayRef}></div>
      <div
        id="modalContainer"
        className={modal === true ? "showModal" : "hideModal"}
      >
        This is some stuff that gets rendered or hidden
      </div>
    </>
  );
};

export default CartModal;
