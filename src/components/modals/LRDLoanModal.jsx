import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Chip,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    background: 'linear-gradient(145deg, rgba(10, 20, 35, 0.95), rgba(20, 30, 45, 0.98))',
    borderRadius: '20px',
    border: '1px solid rgba(202, 175, 92, 0.3)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(20px)',
    color: theme.palette.text.primary,
    maxWidth: '800px',
    width: '90vw',
    maxHeight: '90vh',
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  background: 'linear-gradient(135deg, #CAAF5C 0%, #D4C070 50%, #A08F4A 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 700,
  fontSize: '1.8rem',
  textAlign: 'center',
  padding: theme.spacing(3, 2),
  // borderBottom: '1px solid rgba(202, 175, 92, 0.2)',
}));

const FeatureBox = styled(Paper)(({ theme }) => ({
  background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.9))',
  border: '1px solid rgba(202, 175, 92, 0.2)',
  borderRadius: '12px',
  padding: theme.spacing(2),
  margin: theme.spacing(1, 0),
}));

const LRDLoanModal = ({ open, onClose }) => {
  const keyFeatures = [
    'Loan against regular rental income from leased property',
    'Long tenure and flexible repayment options',
    'Competitive interest rates',
    'Quick processing with minimal documentation',
    'Property remains in your ownership'
  ];

  const purposes = [
    'To raise funds for business expansion',
    'To meet working capital needs',
    'To manage cash flow efficiently',
    'To consolidate existing debts'
  ];

  const benefits = [
    'Unlock the value of your property',
    'Continue earning rental income even after availing the loan',
    'No need to sell your asset',
    'Ideal for property owners, developers, and investors'
  ];

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
    >
      <StyledDialogTitle>
        Lease Rental Discounting (LRD)
      </StyledDialogTitle>
      
      <DialogContent sx={{ p: 3 }}>
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.6,
            mb: 3,
            fontSize: '1.1rem',
          }}
        >
          Lease Rental Discounting (LRD) is a loan facility offered against the rental income earned
          from leased commercial or residential properties. It allows property owners to unlock the
          present value of their future rental receipts, providing immediate liquidity without selling the
          property.
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              color: '#CAAF5C',
              fontWeight: 600,
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            Key Features:
          </Typography>
          <FeatureBox>
            <List dense>
              {keyFeatures.map((feature, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255,255,255,0.9)',
                          fontSize: '0.95rem',
                        }}
                      >
                        • {feature}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </FeatureBox>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              color: '#CAAF5C',
              fontWeight: 600,
              mb: 2,
            }}
          >
            Purpose:
          </Typography>
          <FeatureBox>
            <List dense>
              {purposes.map((purpose, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255,255,255,0.9)',
                          fontSize: '0.95rem',
                        }}
                      >
                        • {purpose}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </FeatureBox>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              color: '#CAAF5C',
              fontWeight: 600,
              mb: 2,
            }}
          >
            Benefits:
          </Typography>
          <FeatureBox>
            <List dense>
              {benefits.map((benefit, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255,255,255,0.9)',
                          fontSize: '0.95rem',
                        }}
                      >
                        • {benefit}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </FeatureBox>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3, borderTop: '1px solid rgba(202, 175, 92, 0.2)' }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            background: 'linear-gradient(135deg, #CAAF5C 0%, #D4C070 100%)',
            color: '#000',
            fontWeight: 600,
            px: 4,
            py: 1,
            borderRadius: '25px',
            '&:hover': {
              background: 'linear-gradient(135deg, #D4C070 0%, #CAAF5C 100%)',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(202, 175, 92, 0.4)',
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default LRDLoanModal;
