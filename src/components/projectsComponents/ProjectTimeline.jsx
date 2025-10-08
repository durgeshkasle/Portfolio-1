import React from 'react';
import {
  Box,
  Typography,
  useTheme,
  styled,
  Stepper,
  Step,
  StepLabel,
  useMediaQuery,
} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// ===== Styled Container =====
const TimelineContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  padding: '32px',
  borderRadius: '20px',
  marginTop: '40px',
  boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
  border: `1px solid rgba(255,255,255,0.08)`,
}));

const steps = [
  { label: 'Planning & Design', icon: <BuildIcon color="primary" /> },
  { label: 'Development', icon: <CodeIcon color="secondary" /> },
  { label: 'Testing & Debugging', icon: <CheckCircleIcon color="success" /> },
  { label: 'Deployment', icon: <RocketLaunchIcon sx={{ color: '#ff4081' }} /> },
];

const ProjectTimeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <TimelineContainer>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 3,
          color: theme.palette.primary.light,
          textAlign: 'center',
        }}
      >
        Project Lifecycle
      </Typography>

      <Stepper
        activeStep={steps.length - 1}
        alternativeLabel={!isMobile}
        orientation={isMobile ? 'vertical' : 'horizontal'}
      >
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel icon={step.icon}>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.primary,
                  whiteSpace: 'nowrap',
                }}
              >
                {step.label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </TimelineContainer>
  );
};

export default ProjectTimeline;
