import './styles/Engagement.css';

const Engagement = () => {
    return (
        <div id='Engagement'>
            <div className='engagement-column'>
                <h2>Who we are</h2>
                <p>At REI, we believe that a life outdoors is a life well lived. We've been sharing our passion for the outdoors since 1938.</p>
                <a href='https://www.rei.com/about-rei'>Read our story</a>
            </div>

            <div className='engagement-column'>
                <h2>Become an REI Co-op Member</h2>
                <p>Anyone can join and everyone belongs. Benefits include great gear offers, special pricing on events and an annual Co-op Member Reward—for life. Join once, enjoy forever.</p>
                <a href='https://www.rei.com/membership'>Join us</a>
            </div>

            <div className='engagement-column'>
                <h2>Take a stand</h2>
                <p>Outdoor equity, climate action, places we love. Raise your voice in the movement to protect and share life outdoors.</p>
                <a href='https://www.rei.com/action/network'>REI Cooperative Action Network</a>
            </div>

            <div className='engagement-column'>
                <h2>Apply for the REI Co-op® Mastercard®</h2>
                <p>Earn a $100 REI gift card after your first purchase outside of REI within 60 days from account opening.</p>
                <p><a href='https://www.rei.com/membership/mastercard?trackingId=offer_details-100gc'>Details</a> | <a href='https://rei.capitalone.com/'>Manage your card</a></p>
            </div>
        </div>
    )
}

export default Engagement;