import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
  IconButton,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BusinessIcon from '@mui/icons-material/Business';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SecurityIcon from '@mui/icons-material/Security';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SpeedIcon from '@mui/icons-material/Speed';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useNavigate } from 'react-router-dom';

// Import image
import homeImage from '../../assets/images/homeImages/home-images.jpeg';

// Styled Components
const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '20px',
    background: 'linear-gradient(145deg, rgba(10, 20, 35, 0.95), rgba(20, 30, 45, 0.98))',
    border: '1px solid rgba(202, 175, 92, 0.2)',
    boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(202, 175, 92, 0.1)',
    backdropFilter: 'blur(20px)',
    maxWidth: '900px',
    width: '90vw',
    maxHeight: '90vh',
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 800,
  fontSize: '2rem',
  textAlign: 'center',
  padding: theme.spacing(3),
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(4),
  color: 'white',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'linear-gradient(45deg, #CAAF5C, #D4C070)',
    borderRadius: '4px',
  },
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.9))',
  border: '1px solid rgba(202, 175, 92, 0.15)',
  borderRadius: '16px',
  color: 'white',
  marginBottom: theme.spacing(2),
}));

const ContactButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
  color: 'white',
  padding: '12px 24px',
  borderRadius: '25px',
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '1.1rem',
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease',
}));

const OverdraftModal = ({ open, onClose }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  
  const keyFeatures = [
    'Purpose: To meet short-term financial or working capital needs',
    'Type: Revolving credit facility (withdraw, repay, and reuse)',
    'Interest: Charged only on the utilized amount',
    'Security: Can be secured (against property, FD, etc.) or unsecured',
    'Tenure: Generally renewed annually'
  ];

  const eligibleApplicants = [
    'Salaried Individuals (with regular income)',
    'Self-Employed Professionals',
    'Business Entities (Proprietorships, Firms, Companies)'
  ];

  const benefits = [
    'Ensures continuous liquidity',
    'Quick access to funds without fresh loan approval',
    'Flexible repayment and re-borrowing options',
    'Ideal for managing temporary cash flow shortages'
  ];

  const getFeatureIcon = (feature) => {
    if (feature.includes('Purpose')) {
      return <TrendingUpIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
    } else if (feature.includes('Type')) {
      return <SwapHorizIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
    } else if (feature.includes('Interest')) {
      return <AccountBalanceIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
    } else if (feature.includes('Security')) {
      return <SecurityIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
    } else if (feature.includes('Tenure')) {
      return <ScheduleIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
    }
    return <CheckCircleIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
  };

  const getApplicantIcon = (applicant) => {
    if (applicant.includes('Salaried')) {
      return <WorkIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
    } else if (applicant.includes('Self-Employed')) {
      return <PersonIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
    } else if (applicant.includes('Business Entities')) {
      return <BusinessCenterIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
    }
    return <BusinessIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
  };

  const getBenefitIcon = (benefit) => {
    if (benefit.includes('liquidity')) {
      return <AccountBalanceWalletIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
    } else if (benefit.includes('Quick access')) {
      return <SpeedIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
    } else if (benefit.includes('Flexible')) {
      return <SwapHorizIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
    } else if (benefit.includes('cash flow')) {
      return <TrendingUpIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
    }
    return <CheckCircleIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
  };

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <StyledDialogTitle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'inherit' }}>
            Overdraft Facility
          </Typography>
          <IconButton onClick={onClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </StyledDialogTitle>

      <StyledDialogContent>
        <Grid container spacing={4}>
          {/* Left Column - Content */}
          <Grid item xs={12} md={7}>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
              An Overdraft (OD) Facility is a credit arrangement provided by banks that allows
              customers to withdraw more money than what is available in their current or savings
              account, up to a pre-approved limit. It acts as a short-term financial cushion to meet
              urgent or unexpected expenses, ensuring smooth cash flow without the need for a separate
              loan.
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
              The overdraft limit is usually determined based on the customer's relationship with the
              bank, creditworthiness, and income or business turnover. Interest is charged only on the
              amount actually utilized, not on the total sanctioned limit, making it a flexible and cost-
              effective borrowing option.
            </Typography>

            <FeatureCard>
              <Typography variant="h6" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 600 }}>
                Key Features:
              </Typography>
              <List dense>
                {keyFeatures.map((feature, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                      {getFeatureIcon(feature)}
                    </ListItemIcon>
                    <ListItemText 
                      primary={feature} 
                      sx={{ 
                        '& .MuiListItemText-primary': { 
                          fontSize: '0.95rem',
                          lineHeight: 1.5 
                        } 
                      }} 
                    />
                  </ListItem>
                ))}
              </List>
            </FeatureCard>

            <FeatureCard>
              <Typography variant="h6" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 600 }}>
                Eligible Applicants:
              </Typography>
              <List dense>
                {eligibleApplicants.map((applicant, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                      {getApplicantIcon(applicant)}
                    </ListItemIcon>
                    <ListItemText 
                      primary={applicant} 
                      sx={{ 
                        '& .MuiListItemText-primary': { 
                          fontSize: '0.95rem',
                          lineHeight: 1.5 
                        } 
                      }} 
                    />
                  </ListItem>
                ))}
              </List>
            </FeatureCard>

            <FeatureCard>
              <Typography variant="h6" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 600 }}>
                Benefits:
              </Typography>
              <List dense>
                {benefits.map((benefit, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                      {getBenefitIcon(benefit)}
                    </ListItemIcon>
                    <ListItemText 
                      primary={benefit} 
                      sx={{ 
                        '& .MuiListItemText-primary': { 
                          fontSize: '0.95rem',
                          lineHeight: 1.5 
                        } 
                      }} 
                    />
                  </ListItem>
                ))}
              </List>
            </FeatureCard>
          </Grid>

          {/* Right Column - Image */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                height: '400px',
                borderRadius: '16px',
                backgroundImage: `url(${homeImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)',
                },
              }}
            />
          </Grid>
        </Grid>
      </StyledDialogContent>

      <DialogActions sx={{ padding: 3, justifyContent: 'center' }}>
        <ContactButton
          startIcon={<ContactPhoneIcon />}
          onClick={() => {
            onClose();
            navigate('/contact');
          }}
          size="large"
        >
          Contact Us Today
        </ContactButton>
      </DialogActions>
    </StyledDialog>
  );
};

export default OverdraftModal;
