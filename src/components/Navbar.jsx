import { Link } from "react-router"
import SearchBar from "./SearchBar"
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <header className="mil-large mbl-small" >
      <nav className="flex align-items-center">
        <div className="flex align-items-center">
          <button className="discard-button">
            <img 
              className="medium-img"
              src="src/assets/hamburger.svg" 
              alt="hamburger" />
          </button>
          <h1 className="logo-text mil-small">TeleStream</h1>
        </div>
        <SearchBar />
        <div className="flex align-items-center space-around">
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
        </div>
        <button className="nav-user-btn"><span className="user-initial">S</span> San Lee</button>
      </nav>
    </header>
  )
}

export default Navbar