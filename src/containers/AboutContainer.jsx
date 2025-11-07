import React from 'react';

// @mui cons
import WorkIcon from '@mui/icons-material/Work';
import ShieldIcon from '@mui/icons-material/Shield';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

// About Module Pages ;-
import AboutHero from '../components/aboutComponents/AboutHero';
import FounderSection from '../components/aboutComponents/FounderSection';
import AboutIntroduction from '../components/aboutComponents/AboutIntroduction';
import DetailedResponsibilities from '../components/aboutComponents/DetailedResponsibilities';
import AboutResponsibilities from '../components/aboutComponents/AboutResponsibilities';

const AboutContainer = () => {
  // ====== Stats Page data =========
  const stats = [
    {
      icon: <WorkIcon color="primary" sx={{ fontSize: 40 }} />,
      label: 'Instant Loan Approval',
    },
    {
      icon: <ShieldIcon color="success" sx={{ fontSize: 40 }} />,
      label: 'Secure Data',
    },
    {
      icon: <ContentCopyIcon color="info" sx={{ fontSize: 40}} />,
      label: 'Multiple Products',
    },
    {
      icon: <SupportAgentIcon color="error" sx={{ fontSize: 40 }} />,
      label: 'Excellent Customer Support',
    },
  ];

  return (
    <>
      <AboutHero />
      <FounderSection />
      <AboutIntroduction />
      <AboutResponsibilities stats={stats}/>
      <DetailedResponsibilities />
    </>
  );
};

export default AboutContainer;
