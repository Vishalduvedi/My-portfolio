import React from 'react'
import './Hero.css'
import profile_img from '../../assets/about_profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {

  // const resume = ()=>{
  //   <img src=""/>
  // }

  return (
    <div  id='home' className="hero" >
      <img src={profile_img} alt="" />
      <h1> <span>I am Vishal duvedi </span>, frotend developer</h1>
      <p>I am frotend developer from una himachal pradesh. I am a fresher in this field</p>
      <div className="hero-action">
        <div className="hero-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact' >  Connect with me </AnchorLink>
      
        </div>
        <div className="hero-resume">
          <h3> <a href="https://drive.google.com/file/d/1tnHgvPU_OwG3RBUlM1i8RsLy6J7--npp/view?usp=drive_link" >My-Resume</a>  </h3>
        </div>
      </div>
    </div>
  )
}
import './Hero.css'

export default Hero