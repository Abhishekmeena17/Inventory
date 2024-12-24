import './UpperNavbar.css';
import notification from '../../images/Notification.png';
import profile from '../../images/profile 1.png';
import logo from '../../images/phantasm_logo_icon_-01_480 1.png';

export default function UpperNavbar() {
    return(
        <div className="upper-navbar">
            <div className='upper-nav-logo'>
              <img src={logo} alt='logo'/>
            </div>
            <div className="main-heading">
                <h2>Inventory</h2>
            </div>
            <div className="upper-nav-right">
                <div className="dropdown">
                    <select name="shop" className="shops">
                      <option className="shop-owner">Nanny's Shop</option>
                      <option className="shop-owner">Abhi's Shop</option>
                      <option className="shop-owner">Shivani's Shop</option>
                    </select>
                </div>
                <div className="notification-icon">
                  <img src={notification} alt="notification icon"/>
                </div>
                <div className="profile-icon">
                  <img src={profile} alt="profile icon"/>
                </div>
            </div>
          </div>
    )
}