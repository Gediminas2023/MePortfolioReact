import "./contact.css";
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');

    const handleChangeName = event => {
        setName(event.target.value);
      };
      const handleChangeSubject = event => {
        setSubject(event.target.value);
      };
      const handleChangeEmail = event => {
        setEmail(event.target.value);
      };


    const handleSublit = (e) => {
        e.preventDefault();

        if (name.length === 0) {
            alert('Name can not be empty!');
            return
        } 
        if (subject.length === 0) {
            alert('Subject can not be empty!');
            return
        } 
        if (email.length === 0) {
            alert('Email can not be empty!');
            return
        } 

        emailjs.sendForm(
            'service_v7c7eid', 
            'template_bm9g9m1', 
            formRef.current, 
            '7UHEysY9j_A0WaWdy')
        .then((result) => {
          console.log(result.text);
          setDone(true);
        }, (error) => {
          console.log(error.text);
        });
    }

  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
            <h1 className="contact-title">
            Get In Touch
            </h1>
            <div className="contact-info">
                <div className="contact-info-item">
                    <img className="contact-icon" src={Phone} alt="" />
                    +370 655 31346
                </div>
                <div className="contact-info-item">
                    <img className="contact-icon" src={Email} alt="" />
                    gediminasluksas@gmail.com
                </div>
                <div className="contact-info-item">
                    <img className="contact-icon" src={Address} alt="" />
                    Vilnius
                </div>
            </div>
        </div>
        <div className="contact-right">
            <p className="contact-description">
                <b>What`s your story?</b> Get in touch.
            </p>
            <form ref={formRef} onSubmit={handleSublit}>
                <input
                    type="text"
                    placeholder="Name" 
                    name="user_name"
                    onChange={handleChangeName} 
                />
                <input 
                    type="text" 
                    placeholder="Subject" 
                    name="user_subject" 
                    onChange={handleChangeSubject}
                />
                <input
                    type="email" 
                    placeholder="Email" 
                    name="user_email" 
                    onChange={handleChangeEmail}
                />
                <textarea name="message" placeholder="Message" rows="10" />
                {done ? "Thank you..." : <button>Submit</button>}
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact