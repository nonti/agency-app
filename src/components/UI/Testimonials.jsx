import Slider from "react-slick";
import "../../components/styles/Testimonials.css";
import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from '../../assets/images/avatar2.png';
import avatar3 from '../../assets/images/avatar3.png';
const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <div className="container">
        <div className="slider_content_top">
          <h6 className="subtitle">Testimonials</h6>
          <h2 className="title">
            Trusted by more than <span>5,000 customers</span>
          </h2>
        </div>
        <div className="slider_wrapper">
          <Slider {...settings}>
            <div className="slider_item">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, fuga praesentium illo, nihil autem quisquam quia
                tempore quos, voluptatibus commodi omnis ipsum animi amet eaque
                natus delectus quae iure mollitia.
              </p>

              <div className="customer_details">
                <div className="customer_img">
                  <img src={avatar1} alt="" />
                </div>
                <div>
                  <h5 className="customer_name">Zoe Barns</h5>
                  <p className="description">CEO Lanicourture</p>
                </div>
              </div>
            </div>
            <div className="slider_item">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, fuga praesentium illo, nihil autem quisquam quia
                tempore quos, voluptatibus commodi omnis ipsum animi amet eaque
                natus delectus quae iure mollitia.
              </p>

              <div className="customer_details">
                <div className="customer_img">
                  <img src={avatar2} alt="" />
                </div>
                <div>
                  <h5 className="customer_name">Barry Smitk</h5>
                  <p className="description">Product Designer</p>
                </div>
              </div>
            </div>
            <div className="slider_item">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, fuga praesentium illo, nihil autem quisquam quia
                tempore quos, voluptatibus commodi omnis ipsum animi amet eaque
                natus delectus quae iure mollitia.
              </p>

              <div className="customer_details">
                <div className="customer_img">
                  <img src={avatar3} alt="" />
                </div>
                <div>
                  <h5 className="customer_name">Ursula McKyl</h5>
                  <p className="description">Head of Design</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
