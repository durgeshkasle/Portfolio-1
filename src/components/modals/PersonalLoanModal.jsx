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
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CelebrationIcon from '@mui/icons-material/Celebration';
import FlightIcon from '@mui/icons-material/Flight';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

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

const PersonalLoanModal = ({ open, onClose }) => {
  const theme = useTheme();
  
  const keyFeatures = [
    'Loan amount from ₹50,000 to ₹40 Lakhs (based on eligibility)',
    'No collateral or guarantor required',
    'Flexible tenure up to 5 years',
    'Attractive interest rates',
    'Quick approval and fast disbursal',
    'Simple documentation process'
  ];

  const idealFor = [
    'Medical Expenses',
    'Wedding or Event Planning',
    'Travel or Vacation',
    'Higher Education',
    'Home Renovation',
    'Debt Consolidation'
  ];

  const whyChoose = [
    'Multiple loan options from leading Banks & NBFCs',
    'Personalized assistance to choose the best offer',
    'Transparent process with zero hidden charges',
    'Support from application to loan disbursal'
  ];

  const getIdealIcon = (item) => {
    switch (item) {
      case 'Medical Expenses':
        return <LocalHospitalIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
      case 'Wedding or Event Planning':
        return <CelebrationIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
      case 'Travel or Vacation':
        return <FlightIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
      case 'Higher Education':
        return <SchoolIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
      case 'Home Renovation':
        return <HomeIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
      case 'Debt Consolidation':
        return <AccountBalanceIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
      default:
        return <BusinessIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
    }
  };

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <StyledDialogTitle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'inherit' }}>
            Personal Loan
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
              When life brings unexpected expenses or new opportunities, a Personal Loan from Dream
              Finance can help you meet your financial needs without stress. Whether it's for a medical
              emergency, wedding, education, travel, or debt consolidation – we offer quick and flexible
              personal loan solutions through our wide network of Banks and NBFCs.
            </Typography>

            <FeatureCard>
              <Typography variant="h6" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 600 }}>
                ✅ Key Features:
              </Typography>
              <List dense>
                {keyFeatures.map((feature, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                      <CheckCircleIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />
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
                💡 Ideal For:
              </Typography>
              <List dense>
                {idealFor.map((item, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                      {getIdealIcon(item)}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item} 
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
                🌟 Why Choose Dream Finance?
              </Typography>
              <List dense>
                {whyChoose.map((reason, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                      <BusinessIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={reason} 
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

            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
              Whatever your personal goal is, Dream Finance is here to support you with the right
              financial solution.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem', fontWeight: 500 }}>
              Contact us now to check your eligibility and get the best personal loan offers.
            </Typography>
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
            // Navigate to contact page or open contact form
            window.location.href = '/contact';
          }}
          size="large"
        >
          Contact Us Today
        </ContactButton>
      </DialogActions>
    </StyledDialog>
  );
};

export default PersonalLoanModal;
