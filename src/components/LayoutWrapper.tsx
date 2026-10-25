'use client';

import React, { useState, createContext, useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import RFQModal from './RFQModal';
import FloatingContact from './FloatingContact';

interface RFQContextType {
  openRFQ: (productName?: string) => void;
}

export const RFQContext = createContext<RFQContextType>({
  openRFQ: () => {}
});

export const useRFQ = () => useContext(RFQContext);

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [rfqOpen, setRfqOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);

  const openRFQ = (productName?: string) => {
    setSelectedProduct(productName);
    setRfqOpen(true);
  };

  const closeRFQ = () => {
    setRfqOpen(false);
    setSelectedProduct(undefined);
  };

  return (
    <RFQContext.Provider value={{ openRFQ }}>
      <Navbar onOpenRFQ={openRFQ} />
      <main style={{ minHeight: '80vh' }}>
        {children}
      </main>
      <Footer />
      <RFQModal 
        isOpen={rfqOpen} 
        onClose={closeRFQ} 
        defaultProduct={selectedProduct} 
      />
      <FloatingContact onOpenRFQ={openRFQ} />
    </RFQContext.Provider>
  );
}
