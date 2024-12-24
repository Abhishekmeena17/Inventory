import './MainSectionHeader.css';
import search from '../../images/Search.png';
import funnel from '../../images/fi_filter.png';
import calendar from '../../images/Calendar.png';
import send from '../../images/Send.png';

export default function MainSectionHeader({ children }) {
    return(
        <div className='inventory-header'>
            <div className='heading'>
                <p style={{textWrap: "nowrap"}}>{children}</p>
                <div className='search'>
                    <img src={search} alt='search icon'/>
                    <input className='input-box' placeholder="Search"/>
                </div>  
            </div>
            <div className='filters'>
                <div className='filter'>
                    <img src={funnel} alt='filter'/>
                    <p>Filter</p>
                </div>
                <div className='filter'>
                    <img src={calendar} alt='filter'/>
                    <p>Filter</p>
                </div>
                <div className='filter'>
                    <img src={send} alt='filter'/>
                    <p>Share</p>
                </div>
                <div className='filter'>
                    <select className='bulk-action' name='qunatity'>
                        <option>Bulk Action</option>
                        <option>Other</option>
                    </select>
                </div>
            </div>
        </div>
    )
}