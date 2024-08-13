import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import '../styles/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/contact/conpost', {
        name,
        email,
        message
      });
      setName('');
      setEmail('');
      setMessage('');
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-container">
        <div className="contact-form-container">
          <Typography variant="h4" className="contact-heading">
            Get in Touch
          </Typography>
          <Typography variant="body1" className="contact-description">
            If you have any questions or need support, feel free to reach out to us using the contact form below. We look forward to hearing from you!
          </Typography>
          <form className="contact-form" onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="contact-submit-button"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
