import React, { useState } from 'react';

// @mui Components :-
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled, useTheme } from '@mui/material/styles';

// Import Modals
import HomeLoanModal from '../modals/HomeLoanModal';
import LoanAgainstPropertyModal from '../modals/LoanAgainstPropertyModal';
import BusinessLoanModal from '../modals/BusinessLoanModal';
import PersonalLoanModal from '../modals/PersonalLoanModal';
import CashCreditModal from '../modals/CashCreditModal';
import OverdraftModal from '../modals/OverdraftModal';
import EducationLoanModal from '../modals/EducationLoanModal';

// ========= Style Components ===========
const StatsContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  minHeight: '70vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
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

const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: theme.spacing(4),
  padding: theme.spacing(3, 4),
  position: 'relative',
  zIndex: 2,
  width: '100%',
  
  '& .first-row': {
    gridColumn: '1 / -1',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  
  '& .second-row': {
    gridColumn: '1 / -1',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(4),
    justifyContent: 'center',
  },
  
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    
    '& .first-row': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    
    '& .second-row': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
  
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    
    '& .first-row': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    
    '& .second-row': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
  
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    
    '& .first-row': {
      gridTemplateColumns: '1fr',
    },
    
    '& .second-row': {
      gridTemplateColumns: '1fr',
    },
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
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  backdropFilter: 'blur(10px)',

  // Add subtle pulse animation to indicate interactivity
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '0',
    height: '0',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(202, 175, 92, 0.1) 0%, transparent 70%)',
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.6s ease',
    pointerEvents: 'none',
    zIndex: 1,
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(202, 175, 92, 0.03) 0%, transparent 50%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: 2,
  },

  // Enhanced hover effects
  '&:hover': {
    transform: 'translateY(-12px) scale(1.03)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(202, 175, 92, 0.3), 0 0 30px rgba(202, 175, 92, 0.2)',
    border: '1px solid rgba(202, 175, 92, 0.4)',
    background: 'linear-gradient(145deg, rgba(10, 20, 35, 0.9), rgba(20, 30, 45, 0.95))',

    '&::after': {
      width: '120%',
      height: '120%',
      background: 'radial-gradient(circle, rgba(202, 175, 92, 0.15) 0%, transparent 70%)',
    },

    '&::before': {
      opacity: 1,
    },

    '& .bottom-gradient': {
      opacity: 1,
    },

    '& .click-indicator': {
      opacity: 1,
      transform: 'translateY(0)',
    },

    '& svg': {
      transform: 'scale(1.15)',
      filter: 'drop-shadow(0 8px 16px rgba(202, 175, 92, 0.6))',
    },

    '& .card-title': {
      color: theme.palette.primary.main,
      textShadow: '0 0 10px rgba(202, 175, 92, 0.3)',
    },
  },

  '&:active': {
    transform: 'translateY(-8px) scale(1.02)',
    transition: 'all 0.1s ease',
  },

  // Add focus styles for accessibility
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 3px rgba(202, 175, 92, 0.3), 0 8px 32px rgba(0, 0, 0, 0.3)',
  },
}));

// ========= Component ===========
export default function FinanceStats(props) {
  const { stats = [] } = props;
  const theme = useTheme();
  const [homeLoanModalOpen, setHomeLoanModalOpen] = useState(false);
  const [loanAgainstPropertyModalOpen, setLoanAgainstPropertyModalOpen] = useState(false);
  const [businessLoanModalOpen, setBusinessLoanModalOpen] = useState(false);
  const [personalLoanModalOpen, setPersonalLoanModalOpen] = useState(false);
  const [cashCreditModalOpen, setCashCreditModalOpen] = useState(false);
  const [overdraftModalOpen, setOverdraftModalOpen] = useState(false);
  const [educationLoanModalOpen, setEducationLoanModalOpen] = useState(false);

  const handleCardClick = (stat) => {
    if (stat.label === 'Home Loan') {
      setHomeLoanModalOpen(true);
    } else if (stat.label === 'Loan Against Property') {
      setLoanAgainstPropertyModalOpen(true);
    } else if (stat.label === 'Business Loan') {
      setBusinessLoanModalOpen(true);
    } else if (stat.label === 'Personal Loan') {
      setPersonalLoanModalOpen(true);
    } else if (stat.label === 'Cash Credit ') {
      setCashCreditModalOpen(true);
    } else if (stat.label === 'Overdraft Facility') {
      setOverdraftModalOpen(true);
    } else if (stat.label === 'Education Loan') {
      setEducationLoanModalOpen(true);
    }
  };

  const handleKeyPress = (event, stat) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick(stat);
    }
  };

  return (
    <StatsContainer id="loan-services">
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
        <Box sx={{ position: 'relative', zIndex: 2, mb: 6, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #CAAF5C 0%, #D4C070 50%, #A08F4A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              mb: 2,
              textAlign: { xs: 'center', md: 'left' },
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            }}
          >
            Loan Services
          </Typography>
          
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.8)',
              textAlign: { xs: 'center', md: 'left' },
              fontWeight: 400,
              maxWidth: '600px',
              margin: { xs: '0 auto', md: '0' },
              lineHeight: 1.6,
            }}
          >
            Discover our comprehensive range of financial solutions tailored to meet your unique needs
          </Typography>
        </Box>

        <GridContainer>
        <Box className="first-row">
          {stats.slice(0, 4).map((stat, i) => (
            <StatCard key={i} onClick={() => handleCardClick(stat)} onKeyDown={(e) => handleKeyPress(e, stat)} tabIndex={0} role="button" aria-label={`Click to view ${stat.label} details`}>
              <Box 
                sx={{ 
                  mt: 1,
                  mb: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '60px',
                  position: 'relative',
                  zIndex: 3,
                  '& svg': {
                    filter: 'drop-shadow(0 4px 8px rgba(202, 175, 92, 0.3))',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                {stat.icon}
              </Box>
              <Typography 
                className="card-title"
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
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  zIndex: 3,
                }}
              >
                {stat.label}
              </Typography>
              
              {/* Click indicator */}
              <Box
                className="click-indicator"
                sx={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(202, 175, 92, 0.8), rgba(202, 175, 92, 0.6))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transform: 'translateY(-10px)',
                  transition: 'all 0.3s ease',
                  zIndex: 4,
                  '&::before': {
                    content: '"👆"',
                    fontSize: '12px',
                    filter: 'grayscale(0)',
                  },
                }}
              />
              
              <Box
                className="bottom-gradient"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, transparent 0%, #CAAF5C 50%, transparent 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: 2,
                }}
              />
            </StatCard>
          ))}
        </Box>
        
        <Box className="second-row">
          {stats.slice(4, 7).map((stat, i) => (
            <StatCard key={i + 4} onClick={() => handleCardClick(stat)} onKeyDown={(e) => handleKeyPress(e, stat)} tabIndex={0} role="button" aria-label={`Click to view ${stat.label} details`}>
              <Box 
                sx={{ 
                  mt: 1,
                  mb: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '60px',
                  position: 'relative',
                  zIndex: 3,
                  '& svg': {
                    filter: 'drop-shadow(0 4px 8px rgba(202, 175, 92, 0.3))',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                {stat.icon}
              </Box>
              <Typography 
                className="card-title"
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
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  zIndex: 3,
                }}
              >
                {stat.label}
              </Typography>
              
              {/* Click indicator */}
              <Box
                className="click-indicator"
                sx={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(202, 175, 92, 0.8), rgba(202, 175, 92, 0.6))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transform: 'translateY(-10px)',
                  transition: 'all 0.3s ease',
                  zIndex: 4,
                  '&::before': {
                    content: '"👆"',
                    fontSize: '12px',
                    filter: 'grayscale(0)',
                  },
                }}
              />
              
              <Box
                className="bottom-gradient"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, transparent 0%, #CAAF5C 50%, transparent 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: 2,
                }}
              />
            </StatCard>
          ))}
        </Box>
        </GridContainer>
      </Box>

      {/* Home Loan Modal */}
      <HomeLoanModal 
        open={homeLoanModalOpen} 
        onClose={() => setHomeLoanModalOpen(false)} 
      />

      {/* Loan Against Property Modal */}
      <LoanAgainstPropertyModal 
        open={loanAgainstPropertyModalOpen} 
        onClose={() => setLoanAgainstPropertyModalOpen(false)} 
      />

      {/* Business Loan Modal */}
      <BusinessLoanModal 
        open={businessLoanModalOpen} 
        onClose={() => setBusinessLoanModalOpen(false)} 
      />

      {/* Personal Loan Modal */}
      <PersonalLoanModal 
        open={personalLoanModalOpen} 
        onClose={() => setPersonalLoanModalOpen(false)} 
      />

      {/* Cash Credit Modal */}
      <CashCreditModal 
        open={cashCreditModalOpen} 
        onClose={() => setCashCreditModalOpen(false)} 
      />

      {/* Overdraft Modal */}
      <OverdraftModal 
        open={overdraftModalOpen} 
        onClose={() => setOverdraftModalOpen(false)} 
      />

      {/* Education Loan Modal */}
      <EducationLoanModal 
        open={educationLoanModalOpen} 
        onClose={() => setEducationLoanModalOpen(false)} 
      />
    </StatsContainer>
  );
}
