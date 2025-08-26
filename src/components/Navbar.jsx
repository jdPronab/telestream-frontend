import { Link } from "react-router"
import SearchBar from "./SearchBar"
import '../styles/Navbar.css'
import { useState } from "react"

const Navbar = () => {

  const [hide, setHide] = useState(true)

  return (
    <header className="mil-large mbl-small" >
      <nav className="flex space-between align-items-center">
        <div className="flex align-items-center">
          <button onClick={() => setHide(!hide)} className="discard-button">
            <img 
              className="medium-img"
              src="src/assets/hamburger.svg" 
              alt="hamburger" />
          </button>
          <h1 className="logo-text mil-small">udisk</h1>
        </div>
        {/* <div className="flex align-items-center space-around">
          <Link to='/'>
            <img
              className="medium-img mil-small" 
              src="src/assets/diamond.svg" 
              alt="subscription" />
          </Link>
          <Link to='/'>
            <img
              className="medium-img mil-small" 
              src="src/assets/help.svg" 
              alt="subscription" />
          </Link>
          <Link to='/'>
            <img
              className="medium-img mil-small" 
              src="src/assets/notifications.svg" 
              alt="subscription" />
          </Link>
        </div> */}
        <button className="nav-user-btn"><span className="user-initial">S</span><span className="user-name-container">San Lee</span></button>
      </nav>
      <div id="menu-slide" className={`${hide ? 'hide' : ''} flex flex-column full-height menu-slide`}>
          <div className="flex flex-column mil-small mbl-small">
            <button className="mbl-small">Upload from telegram</button>
            <Link className="mbl-small" to='/dashboard'>Dashboard</Link>
            <Link className="mbl-small" to='/'>My files</Link>
            <Link className="mbl-small" to='/'>Earning overview</Link>
            <Link className="mbl-small" to='/'>Daily report</Link>
            <Link className="mbl-small" to='/'>Referrals</Link>
            <Link className="mbl-small" to='/'>Settings</Link>
          </div>
      </div>
    </header>
  )
}

export default Navbar