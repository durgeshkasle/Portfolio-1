import React from 'react';

// @mui Components :-
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled, useTheme } from '@mui/material/styles';

// ========= Style Components ===========
const StatsContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  minHeight: '70vh',
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
  },
}));

const HorizontalContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  padding: theme.spacing(3, 4),
  position: 'relative',
  zIndex: 2,
  width: '100%',
  overflowX: 'auto',
  scrollbarWidth: 'thin',
  scrollbarColor: `${theme.palette.primary.main} transparent`,
  
  '&::-webkit-scrollbar': {
    height: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    borderRadius: '4px',
    '&:hover': {
      background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
    },
  },
  
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(2),
    padding: theme.spacing(3, 2),
  },
}));

const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  borderRadius: '20px',
  background: 'linear-gradient(145deg, rgba(10, 20, 35, 0.8), rgba(20, 30, 45, 0.9))',
  border: '1px solid rgba(202, 175, 92, 0.2)',
  color: theme.palette.text.primary,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(202, 175, 92, 0.05)',
  textAlign: 'center',
  height: '200px',
  minWidth: '300px',
  flex: '1 1 0',
  flexShrink: 0,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  cursor: 'default',
  backdropFilter: 'blur(10px)',

  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(202, 175, 92, 0.15)',
    border: '1px solid rgba(202, 175, 92, 0.25)',

    '& svg': {
      transform: 'scale(1.05)',
      filter: 'drop-shadow(0 4px 8px rgba(202, 175, 92, 0.4))',
    },
  },
}));

// ========= Component ===========
export default function AboutResponsibilities(props) {
  const { stats = [] } = props;
  const theme = useTheme();

  return (
    <StatsContainer id="about-responsibilities">
      {/* Content Container */}
      <Box sx={{ 
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: theme.spacing(0, 4),
        position: 'relative',
        zIndex: 2,
        [theme.breakpoints.down('md')]: {
          padding: theme.spacing(0, 2),
        },
      }}>
        <Box sx={{ position: 'relative', zIndex: 2, mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #CAAF5C 0%, #D4C070 50%, #A08F4A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              mb: 2,
              textAlign: 'center',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            }}
          >
            Our Responsibility
          </Typography>
          
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.8)',
              textAlign: 'center',
              fontWeight: 400,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Committed to excellence and delivering exceptional financial solutions with integrity and professionalism
          </Typography>
        </Box>

        <HorizontalContainer>
        {stats.map((stat, i) => (
          <StatCard key={i}>
            <Box 
              sx={{ 
                mt: 1,
                mb: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '60px',
                '& svg': {
                  filter: 'drop-shadow(0 4px 8px rgba(202, 175, 92, 0.3))',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              {stat.icon}
            </Box>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'text.primary',
                fontSize: "18px",
                fontWeight: 600,
                mb: 1,
                lineHeight: 1.3,
                textAlign: 'center',
                background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {stat.label}
            </Typography>
          </StatCard>
        ))}
        </HorizontalContainer>
      </Box>
    </StatsContainer>
  );
}
