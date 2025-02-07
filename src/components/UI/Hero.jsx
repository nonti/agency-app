// import { MdOutlineLightMode } from "react-icons/md";
// import { MdDarkMode } from "react-icons/md";
import '../../components/styles/Hero.css';
import PropTypes from 'prop-types'

const Hero = () => {
  return (
    <section className='hero_section'>
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_content">
           <div>
              <h2>We&#39;re Creating Perfect</h2>
              <h2>Digital Products to</h2>
              <h2 className="highlight">Promote Your Brand</h2>
           </div>
           <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni culpa est distinctio eius ut sit aut nostrum in, non alias dicta! Harum officia ipsam saepe ad quae dolor, esse blanditiis?</p>

           <div className="hero_btns">
            <button className="primary_btn">Get Started Now</button>
            <button className="secondary_btn">Discover More</button>
           </div>
          </div>
          {/* <div className="hero_img">
            <span>{
               theme === 'light-theme' ? <MdDarkMode/> : <MdOutlineLightMode/>
              }</span>
          </div> */}
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}

export default Hero