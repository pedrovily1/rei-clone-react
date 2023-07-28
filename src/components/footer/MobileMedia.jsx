import './styles/MobileMedia.css';
import AppStore from '/src/assets/AppStore.svg'
import Facebook from '/src/assets/facebook.svg'
import GooglePlay from '/src/assets/GooglePlay.svg'
import Instagram from '/src/assets/Instagram.svg'
import Microphone from '/src/assets/microphone.svg'
import Pinterest from '/src/assets/pinterest.svg'
import Tiktok from '/src/assets/tiktok.svg'
import Twitter from '/src/assets/Twitter.svg'
import YouTube from '/src/assets/YouTube.svg'

const MobileMedia = () => {
    return (
        <div id='MobileMedia'>
            <div id='mobile-apps-container'>
                <a href='https://www.rei.com/mobile'><h2>Get REI apps for shopping & adventure</h2></a>
                <div>
                    <a href='http://c00.adobe.com/5a4d03d5-7db9-4c1e-b2eb-b3a015fb55c9/5fus3cmp/g/com.ubermind.rei'><img src={GooglePlay}></img></a>
                    <a href='http://c00.adobe.com/3d4c8cb3-1b99-426e-a74e-ca0b51f2fd72/z7shjv1g/i/404849387'><img src={AppStore}></img></a>
                </div>
            </div>
            <div id='social-media'>
                    <a href='https://www.instagram.com/rei/'><img src={Instagram}></img></a>
                    <a href='https://www.tiktok.com/@rei'><img src={Tiktok}></img></a>
                    <a href='https://www.facebook.com/REI/'><img src={Facebook}></img></a>
                    <a href='https://twitter.com/rei'><img src={Twitter}></img></a>
                    <a href='https://www.pinterest.com/reicoop/'><img src={Pinterest}></img></a>
                    <a href='https://www.youtube.com/user/reifindout'><img src={YouTube}></img></a>
                    <a href='https://www.rei.com/blog/podcasts'><img src={Microphone}></img></a>
            </div>
        </div>
    )
}

export default MobileMedia;