import '../styles/contact.css';
import { useState } from 'react';
export default function Contact() {
    const [firstName, setFName] = useState("");
    const [lastName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
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
    return(
        <section className="contact-section">
            <h2>Contact Me</h2>
            
            <div>
                <div className='contact-me-personal-info'>
                    <a />
                </div>
                <form netlify name="contact" onSubmit={handleSubmit}className="contact-container-form">
                    <div className='contact-name'>
                    <label className='contact-form-attribute'>
                        First Name:
                        <input id="firstName" name="firstName"className='input-text' type="text" 
                        onChange={(e) => setFName(e.target.value)}/>
                    </label>
                    <label className='contact-form-attribute'>
                        Last Name:
                        <input id="lastName" name="lastName"className='input-text' type="text" 
                        onChange={(e) => setLName(e.target.value)}/>
                                                
                    </label>
                    </div>
                    <label className='contact-form-attribute'>
                        Your Email:
                        <input id="email"name="email"className='input-text' type="text" 
                        onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <label className='contact-form-attribute'>
                        Your Message:
                        <textarea  id="message"name="message" className='message-box' 
                                    onChange={(e) => setMessage(e.target.value)}/>
                    </label>
                    <button className='contact-submit' type="submit" >Submit</button>
                </form>
           
            </div>
            <hr/>

        </section>
    );
}