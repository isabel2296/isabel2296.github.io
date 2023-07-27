import React, {useState, useRef, useEffect} from 'react';
import '../styles/sideMenuHeader.css';
import { Button, Form, Input, Image} from 'antd';
import emailjs from 'emailjs-com';
import smile from '../images/gestures.png';
import portrait from '../images/portrait.png'
import "../App.css";
import "../styles/contact.css"
import Footer from './Footer';

const service_id = process.env.REACT_APP_EMAIL_EMAIL_SERVICE_ID;
const email_template_id=process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const emailjs_id= process.env.REACT_APP_EMAILJS_PRIVATE_KEY;

const Contact = () => {
    const formRef = React.useRef(null);
    const { TextArea } = Input;
   
    const createFormElement = (formData) => {
      const formElement = document.createElement("form");
    
      for (const fieldName in formData) {
        if (formData.hasOwnProperty(fieldName)) {
          const inputElement = document.createElement("input");
          inputElement.name = fieldName;
          inputElement.value = formData[fieldName];
          formElement.appendChild(inputElement);
        }
      }
    
      return formElement;
    };

    const onFinish = (values) => {
        console.log(values);
        sendEmail(values);
      };
    const onReset = () => {
        formRef.current?.resetFields();
      };
  
    const sendEmail = (values) => {
      const andtFormData = formRef.current.getFieldsValue();
      const htmlFormElement = createFormElement(andtFormData);
      emailjs.sendForm(service_id, email_template_id, htmlFormElement, emailjs_id)
        .then((result) => {
            alert("Message Sent! Talk with you soon. :) ");
            onReset();
        }, (error) => {
            alert(error.text);
        });
    };
    return (
      <div>
        <h1 className='page-title'>Contact Me</h1>

        <div className='contact-section-wrapper'>

          {/* <img src={Divider}/> */}  
          <section id="Contact" className='contact-form-section'>
              <h1>Send me a message <img src={smile} className='icons' /> </h1>
              <Form
              className='contact-container-form'
              ref={formRef}
              name="control-ref"
              onFinish={onFinish}
              onReset={onReset}
              style={{
                maxWidth: 600,
              }}>
              <Form.Item

              className='contact-container-attribute'
              name="user_name"
              label="Name"
              rules={[{ required: true, 
                  message: 'Please input your first and last name as it should appear in the email.' }
                  ,{
                  type: 'string',
                  min: 6,
                  },]}>
                  <Input  />
              </Form.Item>

              <Form.Item 
                      label="Email"  
                      name="user_email"
                      rules={[{ required: true, message: 'Please input a valid email.' }
                      ,{
                      type: 'email',
                      min: 6,
                      },]}>
                  <Input />

              </Form.Item>
              
              <Form.Item 
                        className='contact-container-attribute'

                      label="Message" 
                      name="user_message"
                      rules={[{required: true, message:'Please input a message. '}]}>
                
                      <TextArea rows={4} />
              </Form.Item>
              <Form.Item   >

                <Button
                    htmlType="submit"
                    > Submit</Button>

              </Form.Item>
            </Form>  
          </section>
          <footer>Contact: isabelsilva2296@gmail.com <br/>Located in California, willing to relocate. </footer>
          
        </div>
      </div>
    );

}

export default Contact; 