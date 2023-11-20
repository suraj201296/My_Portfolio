
import { SocialIcon } from 'react-social-icons'
import './contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'
import About from './About';


type Props = {}

export default function Contact({}: Props) {

  const form : any  = useRef<HTMLFormElement>(null);

  const sendEmail = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_ek1m31e', 'template_88t4ohh', form.current, '5ZlYxC8V15GfPTNt0')
      .then((result) => {
          console.log(result.text);
          e.currentTarget.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id="contactPage">
        <About/>
        <div id="contacts">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form belo to discuss any work opportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type='hidden' name='to_name' value="Suraj" />
                <input type="text" className="name" placeholder='Your Name' name='from_name'/>
                <input type="email" className="email" placeholder='Your Email' name='from_email'/>
                <textarea className="msg" name="message" rows={'5' as unknown as number} placeholder='Your Message'></textarea>
                <button type="submit" value="send" className="submitBtn" style={{ cursor : 'pointer'}}>Submit</button>
                <div className="links">
                    <SocialIcon url='https://www.linkedin.com/in/suraj-kamble-324213145' target='_blank' className='link'/>
                    <SocialIcon url='https://github.com/suraj201296' target='_blank' bgColor='white' className='link'/>
                    <SocialIcon url='https://www.instagram.com/kamblesuraj682?igshid=MzMyNGUyNmU2YQ==' target='_blank' className='link' bgColor='pink'/>
                    <SocialIcon url='https://www.facebook.com/profile.php?id=10000704605' target='_blank' className='link'/>
                </div>
            </form>
        </div>
    </section>
  )
}