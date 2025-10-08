// src/components/about/Stats.jsx
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// Icons
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import TerminalIcon from '@mui/icons-material/Terminal';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const StatsContainer = styled(Box)(({ theme }) => ({
  minHeight: '60vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(6, 2),
}));

const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '20px',
  background: 'linear-gradient(135deg, #101624, #0a0f1c)',
  color: theme.palette.text.primary,
  boxShadow: '0px 8px 20px rgba(0,0,0,0.3)',
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  width: '290px',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0px 12px 28px rgba(0,0,0,0.45)',
  },
}));

export default function Stats() {
  const stats = [
    {
      icon: <WorkIcon color="primary" sx={{ fontSize: 40 }} />,
      number: '2+',
      label: 'Years Experience',
    },
    {
      icon: <CodeIcon color="secondary" sx={{ fontSize: 40 }} />,
      number: '4',
      label: 'Full-Scale Projects Delivered',
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: '#ffb400' }} />,
      number: '3 mo',
      label: 'Internship Experience',
    },
    {
      icon: <SchoolIcon color="success" sx={{ fontSize: 40 }} />,
      number: '2',
      label: 'Professional Certifications',
    },
    {
      icon: <GroupIcon color="info" sx={{ fontSize: 40 }} />,
      number: '4',
      label: 'Developers in My Team',
    },
    {
      icon: <ThumbUpAltIcon color="success" sx={{ fontSize: 40 }} />,
      number: '100%',
      label: 'Client Satisfaction Rate',
    },
    {
      icon: <TerminalIcon color="warning" sx={{ fontSize: 40 }} />,
      number: '10+',
      label: 'Technologies Mastered',
    },
    {
      icon: <MilitaryTechIcon color="secondary" sx={{ fontSize: 40 }} />,
      number: '5+',
      label: 'Awards & Achievements',
    },
  ];

  return (
    <StatsContainer id="stats">
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          color: 'primary.main',
          mb: { md: 6, xs: 3 },
          textAlign: 'center',
        }}
      >
        My Stats
      </Typography>

      <Grid container spacing={4} sx={{ justifyContent: { md: 'space-between', xs: 'center' } }}>
        {stats.map((stat, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
            <StatCard>
              <Box sx={{ mb: 2 }}>{stat.icon}</Box>
              <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
                {stat.number}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {stat.label}
              </Typography>
            </StatCard>
          </Grid>
        ))}
      </Grid>
    </StatsContainer>
  );
}
