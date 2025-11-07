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
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
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

const CashCreditModal = ({ open, onClose }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  
  const keyFeatures = [
    'Purpose: To meet short-term working capital requirements',
    'Security: Hypothecation of stock, inventory, or receivables and Property',
    'Interest: Charged only on the amount utilized',
    'Tenure: Typically reviewed and renewed every 12 months',
    'Flexibility: Funds can be withdrawn and deposited multiple times within the limit'
  ];

  const eligibleApplicants = [
    'Proprietors',
    'Partnership Firms',
    'Private Limited Companies',
    'Other Business Entities'
  ];

  const advantages = [
    'Provides continuous liquidity',
    'Helps manage business cash flow efficiently',
    'Lower interest cost compared to unsecured loans'
  ];

  const getFeatureIcon = (feature) => {
    if (feature.includes('Purpose')) {
      return <TrendingUpIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
    } else if (feature.includes('Security')) {
      return <SecurityIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
    } else if (feature.includes('Interest')) {
      return <AccountBalanceIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
    } else if (feature.includes('Tenure')) {
      return <ScheduleIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
    } else if (feature.includes('Flexibility')) {
      return <SwapHorizIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
    }
    return <CheckCircleIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
  };

  const getApplicantIcon = (applicant) => {
    switch (applicant) {
      case 'Proprietors':
        return <PersonIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
      case 'Partnership Firms':
        return <GroupIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
      case 'Private Limited Companies':
        return <BusinessCenterIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
      case 'Other Business Entities':
        return <BusinessIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
      default:
        return <BusinessIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
    }
  };

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <StyledDialogTitle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'inherit' }}>
            Working Capital - Cash Credit/Overdraft
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
              A Working Capital facility is a short-term capital loan provided by banks to businesses
              and traders to meet their day-to-day operational expenses such as purchasing raw
              materials, paying salaries, or managing inventory. It is a secured credit facility, usually
              backed by stock, Property, inventory, or receivables as collateral.
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
              Under this facility, the borrower is allowed to withdraw funds up to a sanctioned limit
              even without having a positive balance in the account. Interest is charged only on the
              utilized amount, not on the entire sanctioned limit, making it a cost-effective financing
              option for businesses.
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
                Advantages:
              </Typography>
              <List dense>
                {advantages.map((advantage, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                      <CheckCircleIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={advantage} 
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

export default CashCreditModal;
