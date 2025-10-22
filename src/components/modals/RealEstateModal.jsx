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
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DescriptionIcon from '@mui/icons-material/Description';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router-dom';

// Import image
import realEstateImage from '../../assets/images/homeImages/real.jpeg';

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
  padding: '16px 32px',
  borderRadius: '30px',
  fontWeight: 700,
  textTransform: 'none',
  fontSize: '1.2rem',
  boxShadow: '0 8px 25px rgba(202, 175, 92, 0.3)',
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 35px rgba(202, 175, 92, 0.4)',
  },
}));

const RealEstateModal = ({ open, onClose }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const keyTypes = [
    {
      icon: <HomeIcon sx={{ color: theme.palette.primary.main }} />,
      title: 'Property Buying & Selling',
      description: 'Assistance in purchasing or selling residential and commercial properties.'
    },
    {
      icon: <BusinessIcon sx={{ color: theme.palette.success.main }} />,
      title: 'Leasing & Renting',
      description: 'Helping clients find suitable tenants or rental properties.'
    },
    {
      icon: <AccountBalanceIcon sx={{ color: theme.palette.info.main }} />,
      title: 'Property Management',
      description: 'Maintenance, rent collection, and overall management of real estate assets.'
    },
    {
      icon: <TrendingUpIcon sx={{ color: theme.palette.warning.main }} />,
      title: 'Real Estate Consulting',
      description: 'Market analysis, valuation, and investment advice.'
    },
    {
      icon: <DescriptionIcon sx={{ color: theme.palette.error.main }} />,
      title: 'Legal & Documentation Support',
      description: 'Handling property registration, title verification, and agreement drafting.'
    }
  ];

  const responsibilities = [
    {
      icon: <PeopleIcon sx={{ color: theme.palette.primary.main }} />,
      title: 'Lead Generation',
      items: [
        'Identify and approach potential customers interested in financial products like personal loans, business loans, home loans, etc.',
        'Build and maintain a strong customer network.'
      ]
    },
    {
      icon: <SecurityIcon sx={{ color: theme.palette.success.main }} />,
      title: 'Compliance & Confidentiality',
      items: [
        'Follow all regulatory and company guidelines.',
        'Maintain strict confidentiality of customer data and financial information.'
      ]
    },
    {
      icon: <ContactPhoneIcon sx={{ color: theme.palette.info.main }} />,
      title: 'Customer Interaction',
      items: [
        'Explain loan products, eligibility criteria, interest rates, and terms to clients.',
        'Guide customers in selecting the right financial product based on their needs.'
      ]
    },
    {
      icon: <DescriptionIcon sx={{ color: theme.palette.warning.main }} />,
      title: 'Document Collection & Verification',
      items: [
        'Collect required documents such as KYC, income proof, and bank statements.',
        'Ensure all submitted documents are accurate and complete before forwarding to the lender.'
      ]
    },
    {
      icon: <BusinessIcon sx={{ color: theme.palette.error.main }} />,
      title: 'Application Processing',
      items: [
        'Submit loan applications to the respective bank or NBFC for evaluation.',
        'Track application status and ensure timely updates for clients.'
      ]
    },
    {
      icon: <AccountBalanceIcon sx={{ color: theme.palette.primary.main }} />,
      title: 'Coordination with Financial Institutions',
      items: [
        'Act as a link between the customer and the bank or NBFC.',
        'Assist in clarifying queries raised by the lender during the verification process.'
      ]
    },
    {
      icon: <SupportAgentIcon sx={{ color: theme.palette.success.main }} />,
      title: 'Customer Support',
      items: [
        'Help clients through each stage — from application to disbursement.',
        'Provide post-loan support and maintain long-term relationships.'
      ]
    }
  ];

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ color: theme.palette.primary.main, fontWeight: 800 }}>
            Real Estate Services
          </Typography>
          <IconButton onClick={onClose} sx={{ color: theme.palette.primary.main }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <StyledDialogContent>
        <Grid container spacing={4}>
          {/* Introduction Section */}
          <Grid item xs={12}>
            <FeatureCard>
              <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 2, fontWeight: 700 }}>
                Real Estate Services – Introduction
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                Real Estate Services refer to a wide range of professional activities related to buying,
                selling, renting, and managing properties. These services help individuals, investors, and
                businesses make informed decisions regarding residential, commercial, industrial, or land
                properties. Real estate service providers act as a bridge between property owners and
                buyers/tenants, ensuring smooth and transparent transactions.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                The main goal of real estate services is to maximize the value of a property, simplify
                complex legal and financial processes, and provide expert guidance to clients in all
                property-related matters. These services play a crucial role in the growth and organization
                of the real estate market.
              </Typography>
            </FeatureCard>
          </Grid>

          {/* Key Types Section */}
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 3, fontWeight: 700 }}>
              Key Types of Real Estate Services:
            </Typography>
            <Grid container spacing={2}>
              {keyTypes.map((type, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <FeatureCard>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      {type.icon}
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                          {index + 1}. {type.title}
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                          {type.description}
                        </Typography>
                      </Box>
                    </Box>
                  </FeatureCard>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Importance Section */}
          <Grid item xs={12}>
            <FeatureCard>
              <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 2, fontWeight: 700 }}>
                Importance of Real Estate Services:
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: theme.palette.success.main }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Provide professional expertise and market insights."
                    primaryTypographyProps={{ color: 'white' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: theme.palette.success.main }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Ensure legal compliance and transparent transactions."
                    primaryTypographyProps={{ color: 'white' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: theme.palette.success.main }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Save clients' time and effort through efficient handling."
                    primaryTypographyProps={{ color: 'white' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: theme.palette.success.main }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Help investors and businesses make profitable decisions."
                    primaryTypographyProps={{ color: 'white' }}
                  />
                </ListItem>
              </List>
            </FeatureCard>
          </Grid>

          {/* Responsibilities Section */}
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 3, fontWeight: 700 }}>
              Responsibilities
            </Typography>
            <Grid container spacing={2}>
              {responsibilities.map((responsibility, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <FeatureCard>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      {responsibility.icon}
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                          {index + 1}. {responsibility.title}
                        </Typography>
                        <List dense>
                          {responsibility.items.map((item, itemIndex) => (
                            <ListItem key={itemIndex} sx={{ px: 0, py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: '20px' }}>
                                <Typography sx={{ color: theme.palette.primary.main }}>o</Typography>
                              </ListItemIcon>
                              <ListItemText 
                                primary={item}
                                primaryTypographyProps={{ 
                                  color: 'white', 
                                  fontSize: '0.9rem',
                                  lineHeight: 1.4
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Box>
                  </FeatureCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </StyledDialogContent>

      <DialogActions sx={{ padding: theme.spacing(3), justifyContent: 'center' }}>
        <ContactButton
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

export default RealEstateModal;
