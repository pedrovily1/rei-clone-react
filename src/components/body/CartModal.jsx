import "./CartModal.css";
import { useContext } from "react";
import ModalContext from "../../context/modalContext";

const CartModal = () => {
  const { modal, setModal, overlayRef } = useContext(ModalContext);

  const closeModal = (e) => {
    setModal(false);
  };

  const stopProp = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div id="overlay" ref={overlayRef} onClick={closeModal}></div>
      <div
        id="modalContainer"
        className={modal === true ? "showModal" : "hideModal"}
        onClick={stopPropr}
      >
        This is some stuff that gets rendered or hidden
      </div>
    </>
  );
};

export default CartModal;
