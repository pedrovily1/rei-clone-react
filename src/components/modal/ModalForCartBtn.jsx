import "./styles/ModalForCartBtn.css";
import doggo from "/src/assets/ProductDivPhotos/DogImage.jpeg";
import x from "/src/assets/X.svg";
import { useContext } from "react";
import ModalContext from "../../context/modalContext";
import ShippingContext from "../../context/shippingContext";

const ModalForCartBtn = () => {
    const { setModal } = useContext(ModalContext);

    const { cartValue } = useContext(ShippingContext)

    const stopProp = (e) => {
        e.stopPropagation()
    }

    const hide = (e) => {
        e.preventDefault();
        setModal(false);
    };
    return (
        <div id='ModalForCartBtn' onClick={stopProp}>
            <div id='header-and-x'>
                <h1>Added to cart</h1>
                <button onClick={hide}>
                    <img src={x}></img>
                </button>
            </div>
            <div id='product-overview'>
                <img id='product-image' src={doggo} alt='Dog Image'></img>
                <div id='product-text'>
                    <span>Timbuk2</span>
                    <span>Muttmover Luxe Pack</span>
                    <span>Color: Jet Black</span>
                    <span>Qty: {Math.floor(cartValue / 149)}</span>
                    <span>Price: ${cartValue}</span>
                </div>
            </div>
            <div id='cart-subtotal'>
            <h2>Cart subtotal: ${cartValue } </h2> <span> ({ Math.floor(cartValue / 149) } items)</span>
            </div>
            <div id='modal-buttons'>
                <button className='grn'>Cart & Checkout</button>
                <button className='gry' onClick={hide}>Continue Shopping</button>
            </div>
            <h1>Get the most out of your gear</h1>
            <span>Shop handpicked accessories from our experts</span>
            <div id='links'>
                <a href='https://www.rei.com/c/packing-cubes'>Shop all Packing Cubes</a>
                <a href='https://www.rei.com/c/toiletry-bags'>Shop all Toiletry Bags</a>
                <a href='https://www.rei.com/c/small-containers'>Shop all Small Containers</a>
            </div>
        </div>
    )
}

export default ModalForCartBtn;
