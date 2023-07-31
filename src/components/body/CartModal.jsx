import "./CartModal.css";
import { useContext } from "react";
import ModalContext from "../../context/modalContext";
import ModalForCartBtn from "../modal/ModalForCartBtn";

const CartModal = () => {
  const { modal, setModal, overlayRef } = useContext(ModalContext);

  const closeModal = (e) => {
    setModal(false);
  };

  return (
    <>
      <div id="overlay" ref={overlayRef}></div>
      <div
        id="modalContainer"
        className={modal === true ? "showModal" : "hideModal"}
        onClick={closeModal}
      >
        <ModalForCartBtn />
      </div>
    </>
  );
};

export default CartModal;
