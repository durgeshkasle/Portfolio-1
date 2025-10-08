import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  useTheme,
  styled,
} from '@mui/material';

import magicBusLogo from '../../assets/images/projectsImages/magicBusLogo.jpg';
import jarvisLogo from '../../assets/images/projectsImages/jarvisLogo.png';
import tomorLogo from '../../assets/images/projectsImages/tomorLogo.webp';
import multiActLogo from '../../assets/images/projectsImages/multiActLogo.jpeg';

tomorLogo.webp;

const StyledCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '20px',
  overflow: 'hidden',
  width: '100%',
  width: '600px',
  transition: 'all 0.4s ease',
  border: `1px solid rgba(255,255,255,0.08)`,
  boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.45)',
    border: `1px solid ${theme.palette.primary.light}`,
  },

  [theme.breakpoints.down('sm')]: {
    width: '300px',
  },
}));

const ProjectCards = () => {
  const theme = useTheme();

  const projects = [
    {
      title: 'Portfolio Website',
      desc: 'A personal portfolio built using React.js and Material UI with theme-based design.',
      tech: ['React.js', 'MUI', 'Framer Motion'],
      image: magicBusLogo,
      link: '#',
    },
    {
      title: 'Task Management App',
      desc: 'A Kanban-style task tracker built using MERN stack and Redux Toolkit.',
      tech: ['MERN', 'Redux', 'JWT Auth'],
      image: jarvisLogo,
      link: '#',
    },
    {
      title: 'E-commerce Dashboard',
      desc: 'Admin dashboard for e-commerce analytics with charts and filtering features.',
      tech: ['Next.js', 'MUI', 'Chart.js'],
      image: tomorLogo,
      link: '#',
    },
    {
      title: 'E-commerce Dashboard',
      desc: 'Admin dashboard for e-commerce analytics with charts and filtering features.',
      tech: ['Next.js', 'MUI', 'Chart.js'],
      image: multiActLogo,
      link: '#',
    },
  ];

  return (
    <Box sx={{ py: 8, px: 3 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: 6,
          textAlign: 'center',
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Featured Projects
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: theme.palette.text.secondary,
          textAlign: 'center',
          mb: 6,
          maxWidth: '900px',
          mx: 'auto',
        }}
      >
        Explore a selection of my key projects showcasing creativity, clean code, and
        problem-solving skills. Each project reflects modern design and scalable architecture built
        with the latest web technologies.
      </Typography>

      <Grid
        container
        spacing={5}
        sx={{ display: 'flex', justifyContent: { md: 'space-between', xs: 'center' } }}
      >
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.title}>
            <StyledCard>
              <CardMedia component="img" height="200" image={project.image} alt={project.title} />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary, mt: 1, mb: 2 }}
                >
                  {project.desc}
                </Typography>

                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                  {project.tech.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        background: 'rgba(255,255,255,0.05)',
                        color: theme.palette.text.primary,
                      }}
                    />
                  ))}
                </Box>

                <Button
                  variant="contained"
                  size="small"
                  href={project.link}
                  sx={{
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    color: '#fff',
                    borderRadius: '8px',
                    textTransform: 'none',
                    '&:hover': {
                      opacity: 0.9,
                    },
                  }}
                >
                  View Project
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectCards;
