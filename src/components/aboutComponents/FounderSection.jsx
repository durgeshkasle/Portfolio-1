import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// ===== Styled Components =====
const FounderContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  minHeight: '60vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%)',
  padding: theme.spacing(8, 4),
  overflow: 'hidden',
  marginLeft: 'calc(-50vw + 50%)',
  marginRight: 'calc(-50vw + 50%)',
  maxWidth: 'none',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 20% 50%, rgba(202, 175, 92, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(202, 175, 92, 0.05) 0%, transparent 50%)',
    pointerEvents: 'none',
  },

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 2),
    minHeight: '50vh',
  },
}));

const CircleWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '250px',
  height: '250px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(145deg, rgba(10, 20, 35, 0.8), rgba(20, 30, 45, 0.9))',
  border: `4px solid ${theme.palette.primary.main}`,
  boxShadow: '0 12px 40px rgba(202, 175, 92, 0.4), 0 0 0 1px rgba(202, 175, 92, 0.2)',
  transition: 'all 0.4s ease',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
    borderRadius: '50%',
    zIndex: -1,
    opacity: 0,
    transition: 'opacity 0.4s ease',
  },
  
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 16px 50px rgba(202, 175, 92, 0.5), 0 0 0 1px rgba(202, 175, 92, 0.3)',
    '&::before': {
      opacity: 1,
    },
  },

  [theme.breakpoints.down('md')]: {
    width: '200px',
    height: '200px',
  },
}));

// ===== Component =====
export default function FounderSection() {
  const theme = useTheme();

  return (
    <FounderContainer id="founder-section">
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}>
          {/* Section Title */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #CAAF5C 0%, #D4C070 50%, #A08F4A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              mb: 5,
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '3rem' },
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            }}
          >
            Meet Our Founder
          </Typography>

          {/* US Text in Circle */}
          <CircleWrapper>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                color: theme.palette.primary.main,
                textAlign: 'center',
                fontSize: { xs: '3rem', md: '4rem' },
                letterSpacing: '0.1em',
              }}
            >
              US
            </Typography>
          </CircleWrapper>

          {/* Founder Name */}
          <Typography
            variant="h4"
            sx={{
              mt: 4,
              fontWeight: 700,
              color: theme.palette.primary.main,
              textAlign: 'center',
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              letterSpacing: '0.02em',
            }}
          >
            Uma Sharma
          </Typography>

          {/* Founder Title */}
          <Typography
            variant="h6"
            sx={{
              mt: 1,
              color: 'rgba(255,255,255,0.8)',
              textAlign: 'center',
              fontWeight: 500,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
            }}
          >
            Founder & Proprietor
          </Typography>

          {/* Founder Description */}
          <Typography
            variant="body1"
            sx={{
              mt: 3,
              color: 'rgba(255,255,255,0.7)',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.8,
              fontSize: { xs: '1rem', md: '1.1rem' },
            }}
          >
            With a vision to simplify financial solutions and provide comprehensive real estate services, 
            Uma Sharma established Dream Finance in March 2023. Her commitment to transparency, trust, 
            and customer satisfaction has made Dream Finance a reliable partner for individuals and 
            businesses across Mumbai, Navi Mumbai, Thane, and Palghar regions.
          </Typography>
        </Box>
      </Container>
    </FounderContainer>
  );
}

