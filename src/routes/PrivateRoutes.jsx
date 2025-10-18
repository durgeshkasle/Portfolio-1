import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layout
import Loader from '../components/commonComponents/Loader';
import { PrivateLayout } from '../containers/LayoutContainer';
import NotFoundPage from '../pages/ErrorhandlerPages/NotFoundPage';

// Pages
import DashboardPage from '../pages/DashboardPage';
import AboutPage from '../pages/AboutPage';
import TechExpertisePage from '../pages/TechExpertisePage';
import ProjectsPage from '../pages/ProjectsPage';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';

const PrivateRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Protect sign-in and sign-up if already logged in */}
        <Route path="/sign-in" element={<Navigate to="/dashboard" replace />} />
        <Route path="/sign-up" element={<Navigate to="/dashboard" replace />} />

        <Route element={<PrivateLayout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/real-estate" element={<TechExpertisePage />} />
          <Route path="finance" element={<ProjectsPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default PrivateRoutes;
