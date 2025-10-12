import React from 'react';
import { Grid, Card, CardContent, Typography, IconButton, useTheme, styled } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  borderRadius: '20px',
  boxShadow: theme.shadows[5],
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  width: '550px',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },

  [theme.breakpoints.down('sm')]: {
    width: '350px',
  },
}));

export default function ContactCard({ contacts }) {
  const theme = useTheme();

  return (
    <Grid container spacing={3} justifyContent="center" sx={{ mb: 5 }}>
      {contacts.map((contact, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <StyledCard onClick={contact.onClick}>
            <CardContent>
              <IconButton
                sx={{
                  bgcolor: theme.palette.primary.dark,
                  color: '#fff',
                  mb: 2,
                  '&:hover': { bgcolor: theme.palette.primary.main },
                }}
              >
                {contact.icon}
              </IconButton>
              <Typography variant="h6" fontWeight={600}>
                {contact.title}
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                {contact.subtitle}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
}
