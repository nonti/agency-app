import { navLinks } from "../data";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import './Header.css';
import PropTypes from 'prop-types'
import { useRef, useEffect } from "react";
const Header = ({theme, toggleTheme}) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

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


    const handleClick = (e) => {
      e.preventDefault();

      const targetAttr = e.target.getAttribute('href');

      const loaction = document.querySelector(targetAttr).offsetTop;

      window.scrollTo({
        left: 0,
        top: loaction - 80,
      })
    }

    const toggleMenu = () => menuRef.current.classList.toggle('menu_active')
  return (
   <header className="header" ref={headerRef}>
    <div className="container">
      <div className="nav_wrapper">
        <div className="logo">
          <h2>Lanicourture</h2>
        </div>
        
         {/**Navigation */}
         <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {
                navLinks.map((item, index) => (
                  <li className="menu_item" key={index}>
                    <a href={item.path} onClick={handleClick}>{item.display}</a>
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

         <span className="mobile_menu" onClick={toggleMenu}>
          <IoMenu className="icon"/>
         </span>
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