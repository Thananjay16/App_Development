import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { TextField, Button, Typography, Box } from '@mui/material';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-container">
        <Box className="contact-form-container" boxShadow={3} p={4} borderRadius={2} bgcolor="#ffffff">
          <Typography variant="h4" className="contact-heading" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body1" className="contact-description" gutterBottom>
            If you have any questions or need support, feel free to reach out to us using the contact form below. We look forward to hearing from you!
          </Typography>
          <form className="contact-form">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="contact-submit-button"
              fullWidth
            >
              Send Message
            </Button>
          </form>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
