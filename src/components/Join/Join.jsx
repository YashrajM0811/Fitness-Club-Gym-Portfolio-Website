import React, {useRef} from 'react'
import './Join.css';
import emailjs from '@emailjs/browser'
const Join = () => {
    const form =useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_o86sfxe', 'template_t6sll68', form.current, '1Fuugxzu_ptoota4O')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='Join' id='join-us'>
        <div className='left-j'>
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'> WITH US?</span>
            </div>
        </div>
        <div className='right-j'>
            <form ref={form} className="email-container" >
            <input type="text" name='user_email' placeholder='Enter Your Email Address'/>
            <button className='btn btn-j' onSubmit={sendEmail}>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join