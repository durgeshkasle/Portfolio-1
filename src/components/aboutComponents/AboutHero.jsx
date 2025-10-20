import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled, keyframes, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Import images
import aboutImage from '../../assets/images/homeImages/dream.jpg';

// ===== Keyframe Animations =========
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// ===== Styled Components =========
const HeroContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '80vh',
  position: 'relative',
  overflow: 'hidden',
  marginLeft: 'calc(-50vw + 50%)',
  marginRight: 'calc(-50vw + 50%)',
  maxWidth: 'none',
  marginTop: -23,
  paddingTop: 0,
  boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(202, 175, 92, 0.1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 30% 20%, rgba(202, 175, 92, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(202, 175, 92, 0.05) 0%, transparent 50%)',
    zIndex: 1,
    pointerEvents: 'none',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '110%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const HeroImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  opacity: 0.3,
  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
  filter: 'brightness(0.7) contrast(1.1)',
  '&:hover': {
    transform: 'scale(1.02)',
    opacity: 0.4,
  },
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.4) 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(202, 175, 92, 0.1) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
  color: 'white',
  padding: '16px 32px',
  borderRadius: '30px',
  fontWeight: 700,
  textTransform: 'none',
  fontSize: '1.2rem',
  boxShadow: '0 8px 25px rgba(202, 175, 92, 0.3), 0 0 0 1px rgba(202, 175, 92, 0.2)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
    transition: 'left 0.5s ease',
  },
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    transform: 'translateY(-3px) scale(1.05)',
    boxShadow: '0 12px 35px rgba(202, 175, 92, 0.4), 0 0 0 1px rgba(202, 175, 92, 0.3)',
    '&::before': {
      left: '100%',
    },
  },
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  animation: `${fadeInUp} 1s ease-out 0.5s both`,
}));

// ========== Component ==========
export default function AboutHero() {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <HeroContainer id="about-hero">
      <ImageContainer>
        <HeroImage
          sx={{
            backgroundImage: `url(${aboutImage})`,
          }}
        />
        
        <Overlay>
          <Box sx={{ 
            textAlign: 'center', 
            maxWidth: '800px', 
            px: 3,
            animation: `${fadeInUp} 1s ease-out 0.2s both`
          }}>
            <Typography
              variant="h1"
              sx={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #e0e0e0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 800,
                textAlign: 'center',
                mb: 2,
                textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                fontSize: { xs: '2.5rem', md: '4rem' },
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              About Dream Finance
            </Typography>
            
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.primary.main,
                textAlign: 'center',
                mb: 2,
                fontWeight: 600,
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                fontSize: { xs: '1.3rem', md: '1.8rem' },
                animation: `${fadeInUp} 1s ease-out 0.4s both`
              }}
            >
              Your Trusted Financial Partner
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                textAlign: 'center',
                mb: 10,
                fontWeight: 400,
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: 1.6,
                maxWidth: '600px',
                margin: '0 auto',
                animation: `${fadeInUp} 1s ease-out 0.6s both`
              }}
            >
              Discover our comprehensive financial solutions and real estate services designed to help you achieve your dreams
            </Typography>

            <Box sx={{ mt: 3 }}>
              <ContactButton
                endIcon={<ArrowForwardIcon />}
                onClick={handleContactUs}
                size="large"
              >
                Get Started Today
              </ContactButton>
            </Box>
          </Box>
        </Overlay>
      </ImageContainer>
    </HeroContainer>
  );
}
