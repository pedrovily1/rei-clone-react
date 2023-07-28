import UNav from './UNav';
import GNav from './Gnav';
import './Header.css';
import PromoBar from './PromoBar.jsx'

const Header = () => {
    return (
        <>
            <UNav />
            <GNav />
            <PromoBar />
        </>
    )
}

export default Header
