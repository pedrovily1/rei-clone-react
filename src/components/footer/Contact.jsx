import './styles/Contact.css';
import help from '../../assets/Help.svg'
import chat from '../../assets/Chat.svg'
import store from '../../assets/Store.svg'

const Contact = () => {
    return (
        <div id='Contact'>
            <div>
                <img src={help} alt='Help'></img>
                <a>Help Center</a><br></br>
                <p>Find answers online anytime.</p>
            </div>

            <div>
                <img src={store} alt='Store'></img>
                <a>Find a Store</a><br></br>
                <p>See our stores and services.</p>
            </div>

            <div>
                <img src={chat} alt='Chat'></img>
                <a>Live Chat</a><br></br>
                <p>Mon-Fri, 6am-8pm PT</p>
                <p>Sat-Sun, 8am-5pm PT</p>
            </div>
        </div>
    )
}

export default Contact;