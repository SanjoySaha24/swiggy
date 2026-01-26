import './HeaderStyle.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login")

  const onlineStatus = useOnlineStatus()

  return (
    <div className="header">
      <div className="logo-container">
        <img 
          className="logo" 
          src="https://static.vecteezy.com/system/resources/previews/053/762/082/non_2x/food-delivery-catering-fast-food-logo-icon-free-vector.jpg" 
          alt="" 
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>

          <button 
            className="login"
            onClick={() => {
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header
