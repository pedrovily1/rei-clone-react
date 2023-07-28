import './styles/ModalForCartBtn.css';
import doggo from '/src/assets/ProductDivPhotos/DogImage.jpeg';

const ModalForCartBtn = () => {
    return (
        <div id='ModalForCartBtn'>
            <h1>Added to cart</h1>
            <div id='product-overview'>
                <img id='product-image' src={doggo} alt='Dog Image'></img>
                <div id='product-text'>
                    <span>Timbuk2</span>
                    <span>Muttmover Luxe Pack</span>
                    <span>Color: Jet Black</span>
                    <span>Qty: 1</span>
                    <span>Price: {/**/}</span>
                </div>
            </div>
        </div>
    )
}


export default ModalForCartBtn