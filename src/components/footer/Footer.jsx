import { quickLinks, quickLinksCompany } from '../data'
import './Footer.css'
const Footer = () => {
  return (
    <section className='footer'>
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_logo">
            <h2>Lanicourture</h2>
            <p className="description">Grow with us</p>

            <p className="small_text description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet doloremque omnis vitae obcaecati iste. Distinctio eligendi aperiam nulla quos quo deserunt nemo iure veritatis. Eius amet deleniti maxime excepturi corrupti?</p>
          </div>

          <div className="footer_quick_links">
            <div className="quick_links_title">Solutions</div>
            <ul className="quick_links">
              {
                quickLinks.map((link, index) => (
                  <li key={index} className='quick_link_item'>
                    <a href={link.path}>{link.display}</a>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="footer_quick_links">
            <div className="quick_links_title">Company</div>
            <ul className="quick_links">
              {
                quickLinksCompany.map((link, index) => (
                  <li key={index} className='quick_link_item'>
                    <a href={link.path}>{link.display}</a>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="footer_quick_links">
            <div className="quick_links_title">Support</div>
            <ul className="quick_links">
              {
                quickLinks.map((link, index) => (
                  <li key={index} className='quick_link_item'>
                    <a href={link.path}>{link.display}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <p className="copyright">
            Copyright {new Date().getFullYear()} Designed & Developed by Nonts. All rights reserved.
          </p>

      </div>
    </section>
  )
}

export default Footer