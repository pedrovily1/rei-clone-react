import "./CartModal.css";
import { useContext } from "react";
import ModalContext from "../../context/modalContext";
import ModalForCartBtn from "../modal/ModalForCartBtn";

const CartModal = () => {
  const { modal, setModal, overlayRef } = useContext(ModalContext);

  const closeModal = (e) => {
    console.log(e.currentTarget);
    e.stopPropagation();
    setModal(false);
  };

  const stopProp = (e) => {

  };

  return (
    <>
      <div id="overlay" ref={overlayRef} onClick={closeModal}> </div>
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
