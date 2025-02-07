import { navLinks } from "../data";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import './Header.css';
import PropTypes from 'prop-types'
import { useRef, useEffect } from "react";
const Header = ({theme, toggleTheme}) => {
  const headerRef = useRef(null);

  const headerFunc = () => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('header_shrink')
  }else{
     headerRef.current.classList.remove('header_shrink')
  
  }
}

useEffect(() => {
  window.addEventListener('scroll', headerFunc)
  return () => window.removeEventListener('scroll', headerFunc)
},[])
  return (
   <header className="header">
    <div className="container">
      <div className="nav_wrapper">
        <div className="logo">
          <h2>Lanicourture</h2>
        </div>
         {/**Navigation */}
         <div className="navigation">
            <ul className="menu">
              {
                navLinks.map((item, index) => (
                  <li className="menu_item" key={index}>
                    <a href={item.path}>{item.display}</a>
                  </li>
                ))
              }
            </ul>
          </div>
         {/*Light mode */}
         <div className="light-mode">
          <span onClick={toggleTheme}>
            {
              theme === 'light-theme' ? (
                <MdOutlineDarkMode className="icon-dark"/>
              ):( 
                <MdOutlineLightMode className="icon-light"/>
            )}
           </span>
         </div>
      </div>
    </div>
   </header>
  )
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}

export default Header