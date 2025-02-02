import '../../components/styles/Counter.css'
import { counterData } from '../data'
const Counter = () => {
  return (
    <section className='counter' id='projects'>
      <div className="container">
        <div className="counter_wrapper">
          {
            counterData.map((item, index) => (
              <div className="counter_item" key={index}>
                <h3 className="counter_number">{item.number}</h3>
                <h4 className='counter_title'>{item.title}</h4>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Counter