import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'
const About = () => {
  return (
    <div id='about' className='about' >
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia rerum incidunt cumque minus omnis facere aliquid fuga! Sunt nesciunt soluta.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi, laborum</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p><hr style={{width:"45%"}} />
                </div>
                <div className="about-skill">
                    <p>React js</p><hr style={{width:"70%"}} />
                </div>
                <div className="about-skill">
                    <p>JavaScript</p><hr style={{width:"50%"}} />
                </div>
                
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>6+</h1>
            <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
        <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        
      </div>
      
    </div>
  )
}
import './About.css'
export default About
