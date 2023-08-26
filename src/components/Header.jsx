import { useState } from 'react'
import './Header.css'
import { faBuilding, faPenToSquare, faNetworkWired, faBell, faClockRotateLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
        <div className="divHeader">
        <ul className="item-list">
            <button className='btnList'>
                <li><FontAwesomeIcon icon={faBuilding} className="menu-icon"/></li>
            </button>
            <button className='btnList'>
                <li><FontAwesomeIcon icon={faPenToSquare} className="menu-icon" /></li>
            </button>
            <button className='btnList'>
                <li><FontAwesomeIcon icon={faNetworkWired} className="menu-icon" /></li>
            </button>
            <button className='btnList'>
                <li><FontAwesomeIcon icon={faBell} className="menu-icon" /></li>
            </button>
            <button className='btnList'>
                <li><FontAwesomeIcon icon={faClockRotateLeft} className="menu-icon" /></li>
                </button>
            <button className='btnList'>
                <li><FontAwesomeIcon icon={faUser} className="menu-icon" /></li>
                </button>
        </ul>
        </div>
      
      
      
    </>
  )
}

export default Header
