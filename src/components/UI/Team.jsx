import '../../components/styles/Team.css';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { teamMembers } from '../data';
const Team = () => {
  return (
    <section className='our_team'>
      <div className="container">
        <div className="team_content">
          <h6 className="subtitle">Our Team</h6>
          <h2>Meet with <span className="highlight">our team</span></h2>
        </div>
        <div className="team_wrapper">
         {
            teamMembers.map((member, index) => (
              <div className="team_item" key={index}>
              <div className="team_img">
                <img src={member.img} alt="Team image" />
              </div>
              <div className="team_details">
                <h4>{member.name}</h4>
                <p className="description">{member.position}</p>
                <div className="team_member_social">
                  <span><FaLinkedin/></span>
                  <span><FaSquareXTwitter/></span>
                  <span><FaGithubSquare/></span>
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

export default Team