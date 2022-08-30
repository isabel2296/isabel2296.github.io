import '../styles/contact.css';
import { useState } from 'react';
import React, { Component }  from 'react';
import emailjs from 'emailjs-com'

export default function Contact() {
    const [firstName, setFName] = useState("");
    const [lastName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [emailSent, setEmailSent] = useState(false);
    function encode(data) {
        return Object.keys(data)
          .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&");
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", firstName, lastName, email, message }),
        })
          .then(() => alert("Message sent!"))
          .catch((error) => alert(error));
      }
      function isValidEmail (email) {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
       };
      function submit () {
        console.log("entered submit function")
         if (firstName && lastName && isValidEmail(email) && message) {

            const serviceId = 'service_4r7qrye';
            const templateId = 'template_s3wy4qg';
            const publicKey = 'sPy2scEgxsHAGbk__';
            const templateParams = {
                firstName:"isabel",
                lastName:"test",
                email:"isabelsilva@csu.fullerton.edu",
                message:"testing"
            };
            console.log(email, firstName, lastName, message)
            // emailjs.send(serviceId, templateId, templateParams, user_id)
            //     .then(response => console.log(response))
            //     .then(error => console.log(error));
            emailjs.sendForm(serviceId, templateId, templateParams, publicKey)
                .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                console.log('FAILED...', error);
                });
            console.log("MAYBE SENT EMAIL")
            // setFName('');
            // setLName('');
            // setEmail('');
            // setMessage('');
            setEmailSent(true);
            if (emailSent===true){
                alert('Your email was successfully sent. We will be in contact soon!')
            }
        } else {
            alert('Please fill in all fields.');
        }
    }
    function submit2(){
        const btn = document.getElementById('button');
                document.getElementById('form')
        .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'service_4r7qrye';
        const templateID = 'template_s3wy4qg';
        const publicKey = 'sPy2scEgxsHAGbk__';

        emailjs.sendForm(serviceID, templateID, this, publicKey)
            .then(() => {
            btn.value = 'Send Email';
            alert('Sent!');
            }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
            });
        });
    }
    

    return(
        <section className="contact-section">
            <h2>Contact Me</h2>
            
            <div>
                <div className='contact-me-personal-info'>
                    <a />
                </div>

                <form  id="form" className="contact-container-form">
                    <div className='contact-name'>
                    <label className='contact-form-attribute'>
                        First Name:
                        <input 
                        id="firstName"
                        className='input-text' type="text" 
                        />
                    </label>
                    <label className='contact-form-attribute'>
                        Last Name:
                        <input 
                        id="lastName"
                        className='input-text' type="text" 
                        />
                                                
                    </label>
                    </div>
                    <label className='contact-form-attribute'>
                        Your Email:
                        <input 
                        id="email"
                        className='input-text' type="text" 
                        />
                    </label>
                    <label className='contact-form-attribute'>
                        Your Message:
                        <textarea  id="message" className='message-box' 
                                    />
                    </label>
                    <input onSubmit={submit2} id="button" className='contact-submit' type="submit" value='Submit' />
                </form>

            
            </div>
            <hr/>

        </section>
    );
}