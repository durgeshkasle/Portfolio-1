import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// ===== Styled Components =====
const WhatsAppButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  backgroundColor: '#25D366',
  color: 'white',
  width: '60px',
  height: '60px',
  zIndex: 9999,
  boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    backgroundColor: '#128C7E',
    transform: 'scale(1.1)',
    boxShadow: '0 6px 30px rgba(37, 211, 102, 0.6)',
  },
  
  '& .MuiSvgIcon-root': {
    fontSize: '32px',
  },

  [theme.breakpoints.down('sm')]: {
    bottom: '20px',
    right: '20px',
    width: '56px',
    height: '56px',
    '& .MuiSvgIcon-root': {
      fontSize: '28px',
    },
  },
}));

// ===== Component =====
const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    // WhatsApp link with phone number (using first number: 8976437111)
    window.open('https://wa.me/8451921125', '_blank', 'noopener,noreferrer');
  };

  return (
    <Tooltip title="Chat with us on WhatsApp" placement="left" arrow>
      <WhatsAppButton 
        onClick={handleWhatsAppClick}
        aria-label="WhatsApp"
      >
        <WhatsAppIcon />
      </WhatsAppButton>
    </Tooltip>
  );
};

export default FloatingWhatsApp;

