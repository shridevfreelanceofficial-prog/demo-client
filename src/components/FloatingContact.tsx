'use client';

import React, { useState } from 'react';
import { Phone, MessageCircle, FileSpreadsheet, X, ChevronUp } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface FloatingContactProps {
  onOpenRFQ?: (productName?: string) => void;
}

export default function FloatingContact({ onOpenRFQ }: FloatingContactProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className="floating-desk-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '12px'
      }}
    >
      {/* Expanded Quick Contact Drawer */}
      {expanded && (
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #cbd5e1',
          borderRadius: '12px',
          padding: '18px',
          boxShadow: '0 15px 35px rgba(10, 37, 64, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          minWidth: '260px',
          maxWidth: 'calc(100vw - 32px)',
          animation: 'fadeIn 0.2s ease'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #e2e8f0',
            paddingBottom: '8px'
          }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0a2540', textTransform: 'uppercase' }}>
              24/7 Operations Desk
            </span>
            <button 
              onClick={() => setExpanded(false)}
              style={{ color: '#64748b', cursor: 'pointer' }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Quick RFQ Trigger */}
          <button 
            onClick={() => {
              setExpanded(false);
              if (onOpenRFQ) onOpenRFQ();
            }}
            className="btn btn-primary"
            style={{
              padding: '10px 14px',
              fontSize: '0.85rem',
              justifyContent: 'center',
              backgroundColor: '#0284c7',
              borderColor: '#0284c7'
            }}
          >
            <FileSpreadsheet size={16} />
            <span>Instant Quote / RFQ</span>
          </button>

          {/* WhatsApp Direct */}
          <a
            href={COMPANY_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              backgroundColor: '#25D366',
              color: '#ffffff',
              padding: '10px 14px',
              borderRadius: '6px',
              fontSize: '0.85rem',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            <MessageCircle size={16} />
            <span>WhatsApp Operations</span>
          </a>

          {/* Direct Phone Call */}
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              backgroundColor: '#0a2540',
              color: '#ffffff',
              padding: '10px 14px',
              borderRadius: '6px',
              fontSize: '0.85rem',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            <Phone size={16} />
            <span>Call Duty Desk</span>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        aria-label="Contact Navyronix Operations"
        style={{
          backgroundColor: '#0a2540',
          color: '#ffffff',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(10, 37, 64, 0.35)',
          cursor: 'pointer',
          border: '2px solid #ffffff',
          transition: 'all 0.25s ease'
        }}
      >
        {expanded ? <ChevronUp size={24} /> : <Phone size={24} />}
      </button>
    </div>
  );
}
