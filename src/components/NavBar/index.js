import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import {MenuList} from '../../helpers/MenuList'; 
import './style.css'

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const menuList = MenuList.map(({url,title}, index) =>{
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">{title === 'Home' ? <i className="fas fa-home"></i> : title}</NavLink>
      </li>
    )
  })
  const handleClick = () => {
    setClicked(!clicked);
  }
  return (
    <nav className="nav">
       <div className="menu">
         <img className="logo" alt="logo" src="images/Larry__logo2.png"/>
      </div>

      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
     
      <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}
      <li>
        <div className="about__socialicons">
          <a href='https://www.facebook.com/prince.arvind/' target="_blank" rel="noreferrer"> <i className="fab fa-facebook-square"></i> </a>
          <a  href='https://www.instagram.com/_.geeky__nerd._/' target="_blank" rel="noreferrer">  <i className="fab fa-instagram"></i> </a>
          <a  href='https://www.linkedin.com/in/aravindmaddala/' target="_blank" rel="noreferrer"> <i className="fab fa-linkedin"></i> </a>
        </div>
      </li>
      <li className="nav__hireme"><button className="nav__hirebtn">Hire Me</button>
      <i className="fas fa-paper-plane"></i>
      </li>
      </ul>
    </nav>
  )
}

export default NavBar
