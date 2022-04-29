import './topbar.css'

export default function TopBar() {
    return (
        <div className='top'>
            <div className="topLeft">
                <p className='topIcon'>font</p>
                <p className='topIcon'>font</p>
                <p className='topIcon'>font</p>
                <p className='topIcon'>font</p>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'>HOME</li>
                    <li className='topListItem'>ABOUT</li>
                    <li className='topListItem'>CONTACT</li>
                    <li className='topListItem'>WRITE</li>
                    <li className='topListItem'>LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className='topImg' src="" alt="" />
                <p className='topSearchIcon'>SEARCH BUTT</p>
            </div>
        </div>
    )
}
