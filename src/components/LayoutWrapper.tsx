'use client';

import React, { createContext, useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';

interface RFQContextType {
  openRFQ: (productName?: string) => void;
}

export const RFQContext = createContext<RFQContextType>({
  openRFQ: () => {}
});

export const useRFQ = () => useContext(RFQContext);

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  // Safe fallback if any child still invokes openRFQ: redirect to WhatsApp
  const openRFQ = (productName?: string) => {
    const text = productName 
      ? `Hello Crest & Caliper Spares, I would like to inquire about: ${productName}`
      : 'Hello Crest & Caliper Spares, I have an urgent inquiry.';
    window.open(`https://wa.me/919819899051?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <RFQContext.Provider value={{ openRFQ }}>
      <Navbar onOpenRFQ={openRFQ} />
      <main style={{ minHeight: '80vh' }}>
        {children}
      </main>
      <Footer />
      <FloatingContact />
    </RFQContext.Provider>
  );
}
