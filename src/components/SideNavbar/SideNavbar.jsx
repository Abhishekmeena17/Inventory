import './SideNavbar.css';
import logo from '../../images/phantasm_logo_icon_-01_480 1.png';
import box from '../../images/Category.png';
import cart from '../../images/active (1).png';
import contact from '../../images/2 User.png';
import folder from '../../images/navFolder.png';
import chat from '../../images/active (2).png';
import setting from '../../images/active (4).png';
import earphone from '../../images/Logout.png';
import banner from '../../images/banner.png';
import bottom from '../../images/bottom.png';


export default function SideNavbar() {
    return(
        <>
            <div className="side-navbar">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="menu">
                    <div className="menu-upper">
                        <div className="menu-icon">
                            <img src={box} alt="box"/>
                        </div>
                        <div className="menu-icon">
                            <img src={cart} alt="cart"/>
                        </div>
                        <div className="menu-icon">
                            <img src={contact} alt="contact"/>
                        </div>
                        <div className="menu-icon" id='folder'>
                            <img src={folder} alt="folder"/>
                        </div>
                        <div className="menu-icon">
                            <img src={chat} alt="chat"/>
                        </div>
                        <div className="menu-icon">
                            <img src={setting} alt="setting"/>
                        </div>
                    </div>
                    <div className="menu-lower">
                        <div className="menu-icon">
                            <img src={earphone} alt="earphone"/>
                        </div>
                        <div className="menu-icon">
                            <img src={banner} alt="reward"/>
                        </div>
                    </div>
                </div>
                <div className="logout">
                    <img src={bottom} alt="logout-icon"/>
                </div>
            </div>
        </>
    )
}