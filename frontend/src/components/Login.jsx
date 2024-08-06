import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { Typography, TextField, Button, MenuItem, Box } from '@mui/material';

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    role: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = { email: form.email, role: form.role };
    onLogin(userInfo);
    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <Box className="login-card" boxShadow={5} borderRadius={3} p={4} bgcolor="#fff">
          <Typography variant="h4" gutterBottom align="center" color="primary">
            <b>Login</b>
          </Typography>
          <form className="login-form" onSubmit={handleSubmit}>
            <TextField
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={form.email}
              onChange={handleChange}
              required
              className="login-input"
            />
            <TextField
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={form.password}
              onChange={handleChange}
              required
              className="login-input"
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
              className="login-input"
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="employee">Employee</MenuItem>
              <MenuItem value="team_lead">Team Lead</MenuItem>
              <MenuItem value="product_manager">Product Manager</MenuItem>
            </TextField>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="login-button"
            >
              Login
            </Button>
            <Typography className="login-message" align="center">
              Don’t have an account?{' '}
              <span className="signup-link" onClick={() => navigate('/signup')}>
                Sign up
              </span>
            </Typography>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default Login;
