import React from 'react'
import './Contact.css'
import theme_patern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import locaion_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
    
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "ace17e56-4dda-46cc-abb5-8d2070383ae8");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert(res.message)
        //   console.log("Success", res);
        }
      };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_patern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let us talk </h1>
                    <p>I am curently available to join your company , if you can find anything intresting about me you can contact me</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>vishalduvedi008@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+91 8628026513</p>
                        </div>
                        <div className="contact-detail">
                            <img src={locaion_icon} alt="" />
                            <p>UNA , HIMACHAL PRADESH </p>
                        </div>

                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" name="name"  placeholder='Enter Your Name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name='email' />
                    <label htmlFor="">Write Your text Here</label>
                    <textarea name="message" rows="5" placeholder='Enter Your Message' ></textarea>
                    <button type='submit' className="contact-submit">
                        Submit Now
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
