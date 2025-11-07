import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// Import Icons
import PeopleIcon from '@mui/icons-material/People';
import SecurityIcon from '@mui/icons-material/Security';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import DescriptionIcon from '@mui/icons-material/Description';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

// ===== Styled Components =====
const ResponsibilitiesContainer = styled(Box)(({ theme }) => ({
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

const ResponsibilityItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 0),
  color: 'white',
  borderBottom: '1px solid rgba(202, 175, 92, 0.1)',
  
  '&:last-child': {
    borderBottom: 'none',
  },
}));

// ===== Component =====
export default function DetailedResponsibilities() {
  const theme = useTheme();

  const responsibilities = [
    {
      icon: <PeopleIcon sx={{ color: theme.palette.primary.main, fontSize: 40 }} />,
      title: 'Lead Generation',
      items: [
        'Identify and approach potential customers interested in financial products like personal loans, business loans, home loans, etc.',
        'Build and maintain a strong customer network.'
      ]
    },
    {
      icon: <SecurityIcon sx={{ color: theme.palette.success.main, fontSize: 40 }} />,
      title: 'Compliance & Confidentiality',
      items: [
        'Follow all regulatory and company guidelines.',
        'Maintain strict confidentiality of customer data and financial information.'
      ]
    },
    {
      icon: <ContactPhoneIcon sx={{ color: theme.palette.info.main, fontSize: 40 }} />,
      title: 'Customer Interaction',
      items: [
        'Explain loan products, eligibility criteria, interest rates, and terms to clients.',
        'Guide customers in selecting the right financial product based on their needs.'
      ]
    },
    {
      icon: <DescriptionIcon sx={{ color: theme.palette.warning.main, fontSize: 40 }} />,
      title: 'Document Collection & Verification',
      items: [
        'Collect required documents such as KYC, income proof, and bank statements.',
        'Ensure all submitted documents are accurate and complete before forwarding to the lender.'
      ]
    },
    {
      icon: <BusinessIcon sx={{ color: theme.palette.error.main, fontSize: 40 }} />,
      title: 'Application Processing',
      items: [
        'Submit loan applications to the respective bank or NBFC for evaluation.',
        'Track application status and ensure timely updates for clients.'
      ]
    },
    {
      icon: <AccountBalanceIcon sx={{ color: theme.palette.primary.main, fontSize: 40 }} />,
      title: 'Coordination with Financial Institutions',
      items: [
        'Act as a link between the customer and the bank or NBFC.',
        'Assist in clarifying queries raised by the lender during the verification process.'
      ]
    },
    {
      icon: <SupportAgentIcon sx={{ color: theme.palette.success.main, fontSize: 40 }} />,
      title: 'Customer Support',
      items: [
        'Help clients through each stage — from application to disbursement.',
        'Provide post-loan support and maintain long-term relationships.'
      ]
    }
  ];

  return (
    <ResponsibilitiesContainer id="detailed-responsibilities">
      <Container maxWidth="lg">
        <Box sx={{ 
          position: 'relative',
          zIndex: 2,
        }}>
          {/* Section Title */}
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(135deg, #CAAF5C 0%, #D4C070 50%, #A08F4A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' },
                textShadow: '0 4px 8px rgba(0,0,0,0.3)',
              }}
            >
              Our Key Responsibilities
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                fontWeight: 400,
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Committed to providing comprehensive financial services with professionalism and integrity
            </Typography>
          </Box>

          {/* Responsibilities List */}
          <Box sx={{ maxWidth: '900px', margin: '0 auto' }}>
            {responsibilities.map((responsibility, index) => (
              <ResponsibilityItem key={index}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {responsibility.icon}
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600, 
                        mb: 2,
                        color: theme.palette.primary.main,
                        fontSize: '1.3rem',
                      }}
                    >
                      {index + 1}. {responsibility.title}
                    </Typography>
                    <List dense sx={{ p: 0 }}>
                      {responsibility.items.map((item, itemIndex) => (
                        <ListItem key={itemIndex} sx={{ px: 0, py: 0.5, alignItems: 'flex-start' }}>
                          <ListItemIcon sx={{ minWidth: '24px', mt: 0.5 }}>
                            <Box
                              sx={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                backgroundColor: theme.palette.primary.main,
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText 
                            primary={item}
                            primaryTypographyProps={{ 
                              color: 'rgba(255,255,255,0.9)', 
                              fontSize: '1rem',
                              lineHeight: 1.7,
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>
              </ResponsibilityItem>
            ))}
          </Box>
        </Box>
      </Container>
    </ResponsibilitiesContainer>
  );
}

