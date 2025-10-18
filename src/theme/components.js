const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '30px',
        textTransform: 'none',
        padding: '10px 24px',
        fontWeight: 600,
        transition: 'all 0.3s ease',
      },
      containedPrimary: {
        background: 'linear-gradient(90deg,rgb(69, 73, 80), #00c6ff)',
        boxShadow: '0px 4px 20px rgba(41, 121, 255, 0.5)',
        '&:hover': {
          background: 'linear-gradient(90deg, #00c6ff, #2979ff)',
        },
      },
      outlined: {
        borderColor: '#2979ff',
        color: '#2979ff',
        '&:hover': {
          borderColor: '#00c6ff',
          color: '#00c6ff',
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: '16px',
        backgroundImage: 'none',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '20px',
        boxShadow: '0px 8px 24px rgba(0,0,0,0.3)',
      },
    },
  },
};

export default components;
