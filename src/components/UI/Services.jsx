import '../../components/styles/Service.css';
import { servicesData } from '../data';


const Services = () => {
  return (
    <section id="service" className='section'>
      <div className="container">
        <div className="service_top_content">
          <h6 className='subtitle'>Our Services</h6>
          <h2>Save time managing your business</h2>
          <h2 className='highlight'>our best services</h2>
        </div>
        <div className="service_item_wrapper">
          {
            servicesData.map((item, index) => (
              <div className="service_item" key={index}>
                <div className="service_icon"><item.icon/></div>
                <h3 className='service_title'>{item.title}</h3>
                <p className="description">{item.desc}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services