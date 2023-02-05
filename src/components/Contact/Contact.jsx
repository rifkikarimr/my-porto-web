import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { ImWhatsapp } from 'react-icons/im'
import { useRef } from 'react'
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j6znd1z', 'template_7frpdki', form.current, '4IMXV2az1pcrkvJhQY')
    
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>rifkikarimr@gmail.com</h5>
            <a href="mailto:rifkikarimr@gmail.com" target="blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <ImWhatsapp className='contact_option-icon'/>
            <h4>Whats App</h4>
            <h5>+6281219156645</h5>
            <a href="https://api.whatsapp.com/send?phone=+6281219156645" target="blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send a message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact