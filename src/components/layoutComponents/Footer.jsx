import React from 'react';
import { Box, styled } from '@mui/system';

const AnimatedAppFooter = styled(Box)(({ theme }) => ({
  background: 'rgba(16, 22, 36, 0.75)',
  backdropFilter: 'blur(12px)',
  boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
  transition: 'all 0.4s ease',
  animation: 'fadeInDown 1s ease',
  textAlign: 'center',
  padding: '20px 0',
  '@keyframes fadeInDown': {
    '0%': { opacity: 0, transform: 'translateY(-20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
}));

const Footer = () => {
  return <AnimatedAppFooter>© 2025 Shivank.dev — All Rights Reserved</AnimatedAppFooter>;
};

export default Footer;
