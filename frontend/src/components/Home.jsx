import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import illustration from '../assets/illu-4.png';
import illu3 from '../assets/illu-7.png';
import logo1 from '../assets/chat-gpt.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import logo8 from '../assets/logo8.png';
import logo9 from '../assets/logo9.png';
import logo10 from '../assets/logo10.png';
import logo11 from '../assets/logo11.png';
import logo12 from '../assets/logo12.png';
import Rev1 from '../assets/rev-1.jpg';
import Rev2 from '../assets/rev-2.jpg';
import Rev3 from '../assets/rev-3.jpg';
import Rev4 from '../assets/rev-4.jpg';
import Rev5 from '../assets/rev-5.jpg';
import Rev6 from '../assets/rev-6.jpg';
import '../styles/Home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Rating from '@mui/material/Rating';

const Home = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const redirectToDashboard = () => {
    if (user) {
      switch (user.role) {
        case 'admin':
          navigate('/admin-dashboard');
          break;
        case 'employee':
          navigate('/employee-dashboard');
          break;
        case 'hr':
          navigate('/hr-dashboard');
          break;
        case 'team_lead':
          navigate('/team-lead-dashboard');
          break;
        case 'product_manager':
          navigate('/product-manager-dashboard');
          break;
        default:
          navigate('/');
      }
    } else {
      navigate('/login');
    }
  };

  const reviews = [
    {
      name: "John Doe",
      review: "Amazing service! Highly recommend.",
      image: Rev1,
      rating: 5
    },
    {
      name: "Jane Smith",
      review: "This made scheduling so much easier.",
      image: Rev2,
      rating: 4
    },
    {
      name: "Paul Brown",
      review: "A must-have for any team.",
      image: Rev3,
      rating: 5
    },
    {
      name: "Emma Wilson",
      review: "Great user interface and very reliable.",
      image: Rev4,
      rating: 4
    },
    {
      name: "Mark Johnson",
      review: "Helped us streamline our processes.",
      image: Rev5,
      rating: 5
    },
    {
      name: "Linda Davis",
      review: "Fantastic customer support.",
      image: Rev6,
      rating: 5
    }
  ];

  return (
    <div className="Home">
      <div className="home">
        <div className="home-container">
          <div className="hero-bg">
            <Navbar />
            <div className="hero">
              <div className="hero-img">
                <img src={illustration} alt="Illustration" />
              </div>
              <div className="hero-content">
                <h1>Effortless Staff Scheduling with <b>Zoo Tech</b></h1>
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Typography variant="h4" gutterBottom>
                    Welcome {user ? user.role : 'Guest'}
                  </Typography>
                  {user ? (
                    <>
                      <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={redirectToDashboard} 
                        sx={{ mb: 2 }}
                      >
                        Dashboard
                      </Button>
                      <br />
                      <Button 
                        color="secondary" 
                        onClick={onLogout}
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="outlined"
                      color="primary"
                      href="/login"
                      sx={{
                        mt: 2,
                        borderRadius: '8px',
                        borderColor: '#007bff',
                        color: '#007bff',
                        '&:hover': {
                          borderColor: '#0056b3',
                          backgroundColor: '#e7f0ff',
                        },
                      }}
                    >
                      Login
                    </Button>
                  )}
                </Box>
              </div>
            </div>
          </div>
          <div className="feature">
            <div className="featlol">
              <div className="content-1">
                <div className="line">.</div><br />
                <div className="line-2">.</div>
                <h1 style={{ color: "white" }}>Manage your team's schedules efficiently and seamlessly.</h1>
                <div className="contlist">
                  <h5>
                    "Save time with our automated scheduling algorithms that ensure optimal shift distribution."<br />
                    "Receive instant updates and notifications about schedule changes."<br />
                    "Facilitate seamless communication between staff members with built-in messaging."<br />
                  </h5>
                </div>
                <div className="line-2">.</div><br />
                <div className="line">.</div>
              </div>
              <div className="content-img">
                <img src={illu3} alt="Feature" />
              </div>
            </div>
          </div>
          <div className="topcomp">
            <div className="topcompanies">
              <div className="topcompheading">
                <h3>Our Clients</h3>
                <div className="line-3">.</div>
                <div className="line-4">.</div>
              </div>
              <div className="topcompline-1">
                <img src={logo1} alt="Logo 1" />
                <img src={logo2} alt="Logo 2" />
                <img src={logo3} alt="Logo 3" />
                <img src={logo4} alt="Logo 4" />
                <img src={logo5} alt="Logo 5" />
                <img src={logo6} alt="Logo 6" />
              </div>
            </div>
            <div className="topcompline-2">
              <img src={logo7} alt="Logo 7" />
              <img src={logo8} alt="Logo 8" />
              <img src={logo9} alt="Logo 9" />
              <img src={logo10} alt="Logo 10" />
              <img src={logo11} alt="Logo 11" />
              <img src={logo12} alt="Logo 12" />
            </div>
          </div>
          <div className="review">
            <div className="userreview">
              <div className="reviewtitle">
                Customer Reviews
              </div>
              <Carousel>
                {reviews.map((item, i) => (
                  <Box key={i} className="review-item" sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                    <div className="review-img">
                      <img src={item.image} alt={item.name} className="review-image" />
                    </div>
                    <div className="reviewcontent" sx={{ ml: 2 }}>
                      <Typography variant="h6">{item.name}</Typography>
                      <Rating name="read-only" value={item.rating} readOnly />
                      <Typography>{item.review}</Typography>
                    </div>
                  </Box>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
