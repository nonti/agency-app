import '../../components/styles/About.css'
import aboutImg from '../../assets/images/h7.png'
import { aboutData } from '../data'
const About = () => {
  return (
    <section id='about'>
      <div className="container">
        <div className="about_wrapper">
          <div className="about_content">
            <h6 className='subtitle'>Why choose us</h6>
            <h2>Specialist in abiding clients on</h2>
            <h2 className='highlight'>financial challenges</h2>
            <p className="description about_content_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iure suscipit quaerat vitae! Voluptate, minus. Dolorum dolor distinctio, fuga error velit odio minima rem natus amet vel optio beatae temporibus.</p>
          <div className="about_item_wrapper">
          {
        aboutData.map((item, index) => (
          <div className="choose_us_item" key={index}>
            <div className="choose_us_icon"><item.icon/></div> 
            <div>  
            <h4 className="choose_us_title">{item.title}</h4>
            <p className="description">{item.desc}</p>    
            </div>
          </div>
        ))
       }
          </div>
         
        </div>
        <div className="about_img">
            <img src={aboutImg} alt=''/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About