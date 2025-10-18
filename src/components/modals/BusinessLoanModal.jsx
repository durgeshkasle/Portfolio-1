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
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BuildIcon from '@mui/icons-material/Build';
import InventoryIcon from '@mui/icons-material/Inventory';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

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

const BusinessLoanModal = ({ open, onClose }) => {
  const theme = useTheme();
  
  const loanFeatures = [
    'Loan amount from ₹1 lakh to ₹1 crore (or more based on eligibility)',
    'No collateral required for unsecured loans',
    'Flexible repayment tenure (up to 5 years or more)',
    'Minimal documentation & fast processing',
    'Loans available for traders, manufacturers, service providers, professionals, and more',
    'Top-up & balance transfer options available'
  ];

  const suitableFor = [
    'Business Expansion',
    'Working Capital Needs',
    'Equipment / Machinery Purchase',
    'Inventory Purchase',
    'Office Renovation',
    'Managing Operational Expenses'
  ];

  const whyChoose = [
    'Access to multiple loan offers from leading lenders',
    'Tailored solutions as per your business profile',
    'Transparent process with expert guidance',
    'End-to-end support — from documentation to disbursal'
  ];

  const getSuitableIcon = (item) => {
    switch (item) {
      case 'Business Expansion':
        return <TrendingUpIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
      case 'Working Capital Needs':
        return <AccountBalanceWalletIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
      case 'Equipment / Machinery Purchase':
        return <BuildIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
      case 'Inventory Purchase':
        return <InventoryIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
      case 'Office Renovation':
        return <HomeWorkIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />;
      case 'Managing Operational Expenses':
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
            Business Loan
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
              At Dream Finance, we believe that every business deserves the right financial support to
              grow and succeed. Whether you're a startup, SME, or an established enterprise, our Business
              Loan solutions are designed to provide the capital you need — when you need it.
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
              We offer quick, hassle-free business loans with flexible terms through our tie-ups with top
              Banks and NBFCs.
            </Typography>

            <FeatureCard>
              <Typography variant="h6" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 600 }}>
                ✅ Loan Features:
              </Typography>
              <List dense>
                {loanFeatures.map((feature, index) => (
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
                🚀 Suitable For:
              </Typography>
              <List dense>
                {suitableFor.map((item, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                      {getSuitableIcon(item)}
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
                💼 Why Choose Dream Finance?
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
              Whether you're scaling up or need funds to manage day-to-day operations, Dream Finance is
              your trusted partner in business growth.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem', fontWeight: 500 }}>
              Connect with us today to get the best business loan offers suited to your needs!
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

export default BusinessLoanModal;
