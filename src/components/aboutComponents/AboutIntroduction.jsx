import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Card, CardContent } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// Import Icons
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BusinessIcon from '@mui/icons-material/Business';
import HomeIcon from '@mui/icons-material/Home';
import RealEstateAgentIcon from '@mui/icons-material/RealEstateAgent';
import SchoolIcon from '@mui/icons-material/School';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BuildIcon from '@mui/icons-material/Build';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LocationCityIcon from '@mui/icons-material/LocationCity';

// Import Modals
import HomeLoanModal from '../modals/HomeLoanModal';
import LoanAgainstPropertyModal from '../modals/LoanAgainstPropertyModal';
import BusinessLoanModal from '../modals/BusinessLoanModal';
import PersonalLoanModal from '../modals/PersonalLoanModal';
import CashCreditModal from '../modals/CashCreditModal';
import EducationLoanModal from '../modals/EducationLoanModal';
import RealEstateModal from '../modals/RealEstateModal';
import MachineryLoanModal from '../modals/MachineryLoanModal';
import LRDLoanModal from '../modals/LRDLoanModal';

// ===== Styled Components =====
const IntroductionContainer = styled(Box)(({ theme }) => ({
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

const ServiceCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(145deg, rgba(10, 20, 35, 0.8), rgba(20, 30, 45, 0.9))',
  borderRadius: '20px',
  border: '1px solid rgba(202, 175, 92, 0.2)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(202, 175, 92, 0.05)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  height: '240px',
  width: '280px',
  minWidth: '280px',
  maxWidth: '280px',
  display: 'flex',
  flexDirection: 'column',
  backdropFilter: 'blur(10px)',
  color: theme.palette.text.primary,
  cursor: 'pointer',
  flexShrink: 0,
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(202, 175, 92, 0.25)',
    border: '1px solid rgba(202, 175, 92, 0.3)',
  },
}));

// ===== Component =====
export default function AboutIntroduction() {
  const theme = useTheme();
  
  // Modal states
  const [homeLoanModalOpen, setHomeLoanModalOpen] = useState(false);
  const [loanAgainstPropertyModalOpen, setLoanAgainstPropertyModalOpen] = useState(false);
  const [businessLoanModalOpen, setBusinessLoanModalOpen] = useState(false);
  const [personalLoanModalOpen, setPersonalLoanModalOpen] = useState(false);
  const [cashCreditModalOpen, setCashCreditModalOpen] = useState(false);
  const [educationLoanModalOpen, setEducationLoanModalOpen] = useState(false);
  const [realEstateModalOpen, setRealEstateModalOpen] = useState(false);
  const [machineryLoanModalOpen, setMachineryLoanModalOpen] = useState(false);
  const [lrdLoanModalOpen, setLrdLoanModalOpen] = useState(false);

  const handleCardClick = (serviceName) => {
    switch (serviceName) {
      case 'Personal Loans':
        setPersonalLoanModalOpen(true);
        break;
      case 'Business Loans':
        setBusinessLoanModalOpen(true);
        break;
      case 'Home Loans':
        setHomeLoanModalOpen(true);
        break;
      case 'Loan Against Property (LAP)':
        setLoanAgainstPropertyModalOpen(true);
        break;
      case 'Education Loan':
        setEducationLoanModalOpen(true);
        break;
      case 'Working Capital - Cash Credit/Overdraft':
        setCashCreditModalOpen(true);
        break;
      case 'Machinery Loan':
        setMachineryLoanModalOpen(true);
        break;
      case 'Lease Rental Discounting (LRD)':
        setLrdLoanModalOpen(true);
        break;
      case 'Real Estate Services':
        setRealEstateModalOpen(true);
        break;
      default:
        break;
    }
  };

  const services = [
    {
      name: 'Personal Loans',
      icon: <AccountBalanceWalletIcon sx={{ fontSize: 48 }} />,
      color: '#4CAF50'
    },
    {
      name: 'Business Loans',
      icon: <BusinessIcon sx={{ fontSize: 48 }} />,
      color: '#2196F3'
    },
    {
      name: 'Home Loans',
      icon: <HomeIcon sx={{ fontSize: 48 }} />,
      color: '#FF9800'
    },
    {
      name: 'Loan Against Property (LAP)',
      icon: <RealEstateAgentIcon sx={{ fontSize: 48 }} />,
      color: '#9C27B0'
    },
    {
      name: 'Education Loan',
      icon: <SchoolIcon sx={{ fontSize: 48 }} />,
      color: '#F44336'
    },
    {
      name: 'Working Capital - Cash Credit/Overdraft',
      icon: <CreditCardIcon sx={{ fontSize: 48 }} />,
      color: '#00BCD4'
    },
    {
      name: 'Machinery Loan',
      icon: <BuildIcon sx={{ fontSize: 48 }} />,
      color: '#795548'
    },
    {
      name: 'Lease Rental Discounting (LRD)',
      icon: <ReceiptIcon sx={{ fontSize: 48 }} />,
      color: '#607D8B'
    },
    {
      name: 'Real Estate Services',
      icon: <LocationCityIcon sx={{ fontSize: 48 }} />,
      color: '#E91E63'
    }
  ];

  return (
    <IntroductionContainer id="about-introduction">
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
            About Dream Finance
          </Typography>
          
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.8)',
              textAlign: 'center',
              fontWeight: 400,
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.6,
              mb: 4,
            }}
          >
            Dream Finance is a proprietorship firm established in March 2023 and office at Malad West, Mumbai. We specialize in providing comprehensive financial solutions through a wide range of loan products tailored to meet the diverse needs of individuals and businesses.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              textAlign: 'center',
              fontWeight: 400,
              maxWidth: '900px',
              margin: '0 auto',
              lineHeight: 1.6,
              mb: 4,
            }}
          >
            We proudly serve clients across Mumbai, Navi Mumbai, Thane, and Palghar regions, offering access to finance through a strong network of trusted tie-ups with leading Banks and NBFCs.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              textAlign: 'center',
              fontWeight: 400,
              maxWidth: '900px',
              margin: '0 auto',
              lineHeight: 1.6,
              mb: 4,
            }}
          >
            At Dream Finance, our goal is to simplify the borrowing process by providing quick, transparent, and customized loan solutions. Whether you're looking to fund a personal need, expand your business, purchase a home, or leverage your property for financial growth, we are here to assist with professional guidance and end-to-end support.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              textAlign: 'center',
              fontWeight: 400,
              maxWidth: '900px',
              margin: '0 auto',
              lineHeight: 1.6,
              mb: 4,
            }}
          >
            Apart from that we provide real estate services, service like Property Buying & Selling, Leasing & Renting, Property Management, Real Estate Consulting, Legal & Documentation Support
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              textAlign: 'center',
              fontWeight: 400,
              maxWidth: '900px',
              margin: '0 auto',
              lineHeight: 1.6,
              mb: 6,
            }}
          >
            Driven by trust, transparency, and customer satisfaction, Dream Finance is committed to being your reliable financial partner. Contact us today to find the right loan solution for your needs.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={3} sx={{ 
          mb: 4,
          justifyContent: 'center',
          '& .MuiGrid-item': {
            display: 'flex',
            justifyContent: 'center',
          }
        }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} lg={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <ServiceCard onClick={() => handleCardClick(service.name)}>
                <CardContent sx={{ 
                  p: 2,
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  height: '100%',
                  width: '100%',
                  boxSizing: 'border-box',
                  gap: 2,
                }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                      border: `2px solid ${service.color}40`,
                      transition: 'all 0.3s ease',
                      mb: 1,
                      '&:hover': {
                        transform: 'scale(1.1)',
                        background: `linear-gradient(135deg, ${service.color}30, ${service.color}20)`,
                        border: `2px solid ${service.color}60`,
                        boxShadow: `0 8px 25px ${service.color}30`,
                      }
                    }}
                  >
                    <Box sx={{ color: service.color, transition: 'all 0.3s ease' }}>
                      {service.icon}
                    </Box>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      fontWeight: 600,
                      fontSize: '1rem',
                      lineHeight: 1.3,
                      textAlign: 'center',
                      wordBreak: 'break-word',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      maxHeight: '3.9em',
                    }}
                  >
                    {service.name}
                  </Typography>
                </CardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Modals */}
      <HomeLoanModal 
        open={homeLoanModalOpen} 
        onClose={() => setHomeLoanModalOpen(false)} 
      />

      <LoanAgainstPropertyModal 
        open={loanAgainstPropertyModalOpen} 
        onClose={() => setLoanAgainstPropertyModalOpen(false)} 
      />

      <BusinessLoanModal 
        open={businessLoanModalOpen} 
        onClose={() => setBusinessLoanModalOpen(false)} 
      />

      <PersonalLoanModal 
        open={personalLoanModalOpen} 
        onClose={() => setPersonalLoanModalOpen(false)} 
      />

      <CashCreditModal 
        open={cashCreditModalOpen} 
        onClose={() => setCashCreditModalOpen(false)} 
      />

      <EducationLoanModal 
        open={educationLoanModalOpen} 
        onClose={() => setEducationLoanModalOpen(false)} 
      />

      <MachineryLoanModal 
        open={machineryLoanModalOpen} 
        onClose={() => setMachineryLoanModalOpen(false)} 
      />

      <LRDLoanModal 
        open={lrdLoanModalOpen} 
        onClose={() => setLrdLoanModalOpen(false)} 
      />

      <RealEstateModal 
        open={realEstateModalOpen} 
        onClose={() => setRealEstateModalOpen(false)} 
      />
    </IntroductionContainer>
  );
}
