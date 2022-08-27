import '../styles/contact.css';

export default function Contact() {
    return(
        <section className="contact-section">
            <h2>Contact Me</h2>
            
            <div>
                <div className='contact-me-personal-info'>
                    <a />
                </div>
                <form className="contact-container-form">
                    <div className='contact-name'>
                    <label className='contact-form-attribute'>
                        First Name:
                        <input className='input-text' type="text" name="firstName"/>
                    </label>
                    <label className='contact-form-attribute'>
                        Last Name:
                        <input className='input-text' type="text" name="lastName"/>
                    </label>
                    </div>
                    <label className='contact-form-attribute'>
                        Your Email:
                        <input className='input-text' type="text" name="email"/>
                    </label>
                    <label className='contact-form-attribute'>
                        Your Message:
                        <textarea  className='message-box' name="message"/>
                    </label>
                    <input className='contact-submit' type="submit" value="Submit"/>
                </form>
           
            </div>
            <hr/>

        </section>
    );
}