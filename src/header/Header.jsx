import './header.css'
import onward from '../assets/onward.jpg'

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img src={onward} alt="" className='headerImg'/>

        </div>
    )
}
