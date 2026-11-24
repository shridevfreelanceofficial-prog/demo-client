'use client';

import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function FloatingContact() {
  const [hoveredBtn, setHoveredBtn] = useState<'whatsapp' | 'call' | null>(null);

  return (
    <div 
      className="floating-desk-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12px',
        zIndex: 999
      }}
    >
      {/* 1. WhatsApp Button (Directly ABOVE Call Icon) */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <a
          href="https://wa.me/919819899051"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Crest & Caliper Spares on WhatsApp (98198 99051)"
          onMouseEnter={() => setHoveredBtn('whatsapp')}
          onMouseLeave={() => setHoveredBtn(null)}
          style={{
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            backgroundColor: '#25D366',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
            transition: 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            transform: hoveredBtn === 'whatsapp' ? 'scale(1.1)' : 'scale(1)',
            textDecoration: 'none'
          }}
        >
          <MessageCircle size={28} />
        </a>

        {/* Floating Tooltip Pill */}
        {hoveredBtn === 'whatsapp' && (
          <div style={{
            position: 'absolute',
            left: '66px',
            backgroundColor: '#0a2540',
            color: '#ffffff',
            padding: '7px 14px',
            borderRadius: '6px',
            fontSize: '0.8rem',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            pointerEvents: 'none',
            animation: 'fadeIn 0.15s ease'
          }}>
            <span style={{ color: '#25D366' }}>●</span>
            <span>WhatsApp (98198 99051)</span>
          </div>
        )}
      </div>

      {/* 2. Call Button (Directly Below WhatsApp Icon) */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <a
          href="tel:9819899051"
          aria-label="Call Crest & Caliper Spares Operations (98198 99051)"
          onMouseEnter={() => setHoveredBtn('call')}
          onMouseLeave={() => setHoveredBtn(null)}
          style={{
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            backgroundColor: '#0a2540',
            color: '#38bdf8',
            border: '2px solid #38bdf8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(10, 37, 64, 0.4)',
            transition: 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            transform: hoveredBtn === 'call' ? 'scale(1.1)' : 'scale(1)',
            textDecoration: 'none'
          }}
        >
          <Phone size={24} />
        </a>

        {/* Floating Tooltip Pill */}
        {hoveredBtn === 'call' && (
          <div style={{
            position: 'absolute',
            left: '66px',
            backgroundColor: '#0a2540',
            color: '#ffffff',
            padding: '7px 14px',
            borderRadius: '6px',
            fontSize: '0.8rem',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            pointerEvents: 'none',
            animation: 'fadeIn 0.15s ease'
          }}>
            <span style={{ color: '#38bdf8' }}>●</span>
            <span>Call 24/7 (98198 99051)</span>
          </div>
        )}
      </div>
    </div>
  );
}
