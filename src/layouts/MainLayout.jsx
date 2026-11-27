import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SocialLinks from '../components/SocialLinks';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FC] text-[#15283B]">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <SocialLinks />
    </div>
  );
}
