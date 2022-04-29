import './sidebar.css'
import panther from '../assets/panther.jpg'

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src={panther} height='200px' alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum nihil officiis fugit rem! Nam vita</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">X</li>
                    <li className="sidebarListItem">X</li>
                    <li className="sidebarListItem">X</li>
                    <li className="sidebarListItem">X</li>
                    <li className="sidebarListItem">X</li>
                    <li className="sidebarListItem">X</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarIcons">
                    <p>I</p>
                    <p>I</p>
                    <p>I</p>
                    <p>I</p>
                    <p>I</p>
                </div>
            </div>
        </div>
    )
}
