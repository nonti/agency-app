import '../../components/styles/Blog.css';
import { FaArrowRight } from "react-icons/fa6";
import { blogData } from '../data';
const Blog = () => {
  return (
    <section id='blog' className='blog'>
      <div className="container">
        <div className="blog_top_content">
          <h6 className='subtitle'>Our Blog</h6>
          <h2>Lets have a look from our <span className="highlight">recent blog</span></h2>
        </div>

        <div className="blog_wrapper">
         {
           blogData.map((blog, index) => (
            <div className="blog_item" key={index}>
            <h2>{blog.title}</h2>
            <div className="blog_img">
            <img src={blog.img} alt="Video"  />
              <p className="description blog_desc">{blog.desc}</p>
              <div>
                <a href={blog.link} className="learn_more"><FaArrowRight/></a>
              </div>
            </div>
          </div>
           ))
         }
        </div>
      </div>
    </section>
  )
}

export default Blog