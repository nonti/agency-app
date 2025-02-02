import { navLinks } from "../data";
import { MdOutlineLightMode } from "react-icons/md";
import './Header.css'
const Header = () => {
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
          <span><MdOutlineLightMode/> Light mode</span>
         </div>
      </div>
    </div>
   </header>
  )
}

export default Header