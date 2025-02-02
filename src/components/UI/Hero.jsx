import heroDarkImg from '../../assets/images/hero.png';
import '../../components/styles/Hero.css';
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
          <div className="hero_img">
            <img src={heroDarkImg} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero