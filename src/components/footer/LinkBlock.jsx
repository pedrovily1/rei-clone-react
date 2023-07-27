import './styles/LinkBlock.css';

const LinkBlock = () => {
    return (
        <div id='LinkBlock'>
            <div className='link-block-column'>
                <h2>REI Co-op Account</h2>
                <a href='https://www.rei.com/login'>Sign Into My Account</a><br></br>
                <a href='https://www.rei.com/membership/lookup'>My Rewards Lookup</a><br></br>
                <a href='https://www.rei.com/lists'>My Wish Lists</a><br></br>
                <a href='https://www.rei.com/membership'>Membership Benefits</a>
            </div>
            <div className='link-block-column'>
                <h2>Orders and Returns</h2>
                <a> Order Status</a><br></br>
                <a> Return Policy & Information</a><br></br>
                <a> Store Curbside Pickup</a><br></br>
                <a> Shipping Info</a>
            </div>
            <div className='link-block-column'>
                <h2>Gifts</h2>
            </div>
            <div className='link-block-column'>
                <h2>Offers & Discounts</h2>
            </div>
            <div className='link-block-column'>
                <h2>Shopping Tools</h2>
            </div>
            <div className='link-block-column'>
                <h2>Learning and Community</h2>
            </div>
            <div className='link-block-column'>
                <h2>Work with Us</h2>
            </div>
            <div className='link-block-column'>
                <h2>REI Co-op</h2>
            </div>
        </div>
    )
}

export default LinkBlock;