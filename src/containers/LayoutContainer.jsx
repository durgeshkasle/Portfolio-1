import React from 'react';
import { Outlet } from 'react-router-dom';
import '../App.css';
import LayoutHeader from '../components/layoutComponents/Header';
import Footer from '../components/layoutComponents/Footer';
import FloatingWhatsApp from '../components/commonComponents/FloatingWhatsApp';

export const PublicLayout = () => {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-background)',
      }}
    >
      <div className="container">
        <Outlet />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export const PrivateLayout = () => {
  return (
    <>
      {/* ===== Fixed Header ===== */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1100,
          backgroundColor: 'transparent',
        }}
      >
        <LayoutHeader />
      </header>

      {/* ===== Page Content ===== */}
      <div
        className="container"
        style={{
          paddingTop: '90px', // Matches your header height
        }}
      >
        <main>
          <Outlet />
        </main>
      </div>
      
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};
