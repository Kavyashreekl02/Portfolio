import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  ContactContainer,
  ContactTitle,
  Subtitle,
  FormContainer,
  Form,
  Input,
  TextArea,
  SubmitButton,
} from './ContactStyledComponent';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_q8xllwk',      // Replace with your EmailJS Service ID
        'template_unsgfl9',      // Replace with your EmailJS Template ID
        formData,
        'YsCEd_b4ERcaD-XzQ'           // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          setFormData({
            email: '',
            name: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          alert('Failed to send message, please try again.');
          console.error('Error:', error);
        }
      );
  };

  return (
    <ContactContainer>
      <ContactTitle>Contact</ContactTitle>
      <Subtitle>Feel free to reach out to me for any questions or opportunities!</Subtitle>
      <FormContainer>
        <h3>Email Me 🚀</h3>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <TextArea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <SubmitButton type="submit">Send</SubmitButton>
        </Form>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
