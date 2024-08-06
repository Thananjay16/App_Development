import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, MenuItem, Box } from '@mui/material';
import '../styles/Signup.css';
import illustration from '../assets/illu-1.png'; // Importing the image

const Signup = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    navigate('/');
  };

  return (
    <div className="signup-page">
      <div className="signup-bg"></div>
      <div className="signup-container">
        <Box className="signup-card" boxShadow={5} borderRadius={3} p={4} bgcolor="#fff">
          <Typography variant="h4" gutterBottom align="center" color="primary">
            <b>Signup</b>
          </Typography>
          <form className="signup-form" onSubmit={handleSubmit}>
            <TextField
              name="firstName"
              label="First Name"
              type="text"
              variant="outlined"
              fullWidth
              margin="normal"
              value={form.firstName}
              onChange={handleChange}
              required
              className="signup-input"
            />
            <TextField
              name="lastName"
              label="Last Name"
              type="text"
              variant="outlined"
              fullWidth
              margin="normal"
              value={form.lastName}
              onChange={handleChange}
              required
              className="signup-input"
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={form.email}
              onChange={handleChange}
              required
              className="signup-input"
            />
            <TextField
              name="role"
              select
              label="Role"
              variant="outlined"
              fullWidth
              margin="normal"
              value={form.role}
              onChange={handleChange}
              required
              className="signup-input"
            >
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Employee">Employee</MenuItem>
              <MenuItem value="Team Lead">Team Lead</MenuItem>
              <MenuItem value="Product Manager">Product Manager</MenuItem>
            </TextField>
            <TextField
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={form.password}
              onChange={handleChange}
              required
              className="signup-input"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="signup-button"
            >
              Signup
            </Button>
            <Typography className="signup-message" align="center">
              Already have an account?{' '}
              <span className="login-link" onClick={() => navigate('/login')}>
                Login
              </span>
            </Typography>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default Signup;
