import '../styles/contact.css';
import { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

export default function Contact() {
    const [firstName, setFName] = useState("");
    const [lastName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    function isValidEmail (email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
    };

   
 
    const form = useRef();

    function resetForm(){
        setFName('');
          setLName('');
          setEmail('');
          setMessage('');
          document.getElementById("form").reset()
          

    }const sendEmail = (e) => {
        e.preventDefault();
     
        if (firstName && lastName && isValidEmail(email) && message) {

        const serviceID = 'service_4r7qrye';
        const templateID = 'template_s3wy4qg';
        const publicKey = 'sPy2scEgxsHAGbk__';
    
        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
          .then((result) => {
            
            resetForm()
            alert('Your email was successfully sent. We will be in contact soon!')
            
        }, (error) => {
            alert(JSON.stringify(error));
          });
           
        } else{
            if(!isValidEmail(email)){
                alert('Email Error: Please provide a valid email')

            }else{
            alert('Please fill in all fields.');}

          }

      };

    return(
        <section className="contact-section">
            <h2>Contact Me</h2>
            
            <div>
                <div className='contact-me-personal-info'>
                    <a />
                </div>

                <form  id = "form" ref={form} onSubmit={sendEmail} className="contact-container-form">
                    <div className='contact-name'>
                    <label className='contact-form-attribute'>
                        First Name:
                        <input 
                        name="user_firstName"
                        className='input-text' type="text" 
                        onChange={e => setFName(e.target.value)}
                        />
                    </label>
                    <label className='contact-form-attribute'>
                        Last Name:
                        <input 
                        name="user_lastName"
                        className='input-text' type="text" 
                        onChange={e => setLName(e.target.value)}
                        />
                                                
                    </label>
                    </div>
                    <label className='contact-form-attribute'>
                        Your Email:
                        <input 
                        name="user_email"
                        className='input-text' type="text" 
                        onChange={e => setEmail(e.target.value)}
                        />
                    </label>
                    <label className='contact-form-attribute'>
                        Your Message:
                        <textarea  name="message" className='message-box' 
                                    onChange={e => setMessage(e.target.value)}/>
                    </label>
                    <input  className='contact-submit' type="submit" value='Send' />
                </form>

            
            </div>
            <hr/>

        </section>
    );
}