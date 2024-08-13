import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import { Typography, TextField, Button, MenuItem, FormControl, InputLabel, Select, Box, Container, Paper } from '@mui/material';
import '../styles/Signup.css';

const Signup = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    company: '',
    role: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setForm({ ...form, role: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', form, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      setError(error.response?.data || 'An error occurred. Please try again.');
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#ffffff' }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          <b>Signup</b>
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            name="firstName"
            type="text"
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={form.firstName}
            onChange={handleChange}
            required
          />
          <TextField
            name="lastName"
            type="text"
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={form.lastName}
            onChange={handleChange}
            required
          />
          <TextField
            name="username"
            type="text"
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={form.username}
            onChange={handleChange}
            required
          />
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
          />
          <TextField
            name="company"
            type="text"
            label="Company"
            variant="outlined"
            fullWidth
            margin="normal"
            value={form.company}
            onChange={handleChange}
            required
          />
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Role</InputLabel>
            <Select
              value={form.role}
              onChange={handleRoleChange}
              name="role"
              label="Role"
              required
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="employee">Employee</MenuItem>
              <MenuItem value="team_lead">Team Lead</MenuItem>
              <MenuItem value="product_manager">Product Manager</MenuItem>
            </Select>
          </FormControl>
          {error && (
            <Typography color="error" variant="body2" align="center" sx={{ marginTop: 2 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Signup
          </Button>
          <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
            Already have an account?{' '}
            <span
              style={{ color: 'blue', cursor: 'pointer' }}
              onClick={() => navigate('/login')}
            >
              Login
            </span>
          </Typography>
        </form>
      </Paper>
    </Container>
  );
};

export default Signup;
