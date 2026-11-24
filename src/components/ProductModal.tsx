'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { 
  X, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Box,
  ExternalLink,
  MessageCircle,
  Cpu,
  Layers
} from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote?: (productName: string) => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Crest & Caliper Spares, I would like to inquire about ${product.name} (Model: ${product.model}, Part: ${product.partNumber || 'N/A'}).`
  );

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      style={{
        padding: '16px',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        backgroundColor: 'rgba(6, 28, 61, 0.75)',
        backdropFilter: 'blur(3px)'
      }}
    >
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ 
          maxWidth: '780px', 
          width: '100%',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          overflow: 'hidden',
          padding: '0',
          boxShadow: '0 25px 60px rgba(0,0,0,0.3)'
        }}
      >
        {/* Modal Top Header */}
        <div style={{
          padding: '18px 24px',
          borderBottom: '1px solid #e2e8f0',
          backgroundColor: '#0a2540',
          color: '#ffffff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{ fontSize: '0.72rem', color: '#38bdf8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {product.category}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>•</span>
              <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                Technical Specification Sheet
              </span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: 0, lineHeight: 1.25 }}>
              {product.name}
            </h3>
          </div>

          <button 
            onClick={onClose}
            aria-label="Close"
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              border: 'none',
              transition: 'background-color 0.15s ease'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Content (No Images - Pure Technical Data) */}
        <div style={{ 
          padding: '24px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '20px',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          flexGrow: 1
        }}>
          
          {/* Key Reference Data Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>
                Model Designation
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0284c7', marginTop: '2px' }}>
                {product.model}
              </div>
            </div>

            <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>
                Part Number Reference
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0a2540', fontFamily: 'monospace', marginTop: '2px' }}>
                {product.partNumber || 'Consult with Serial Number'}
              </div>
            </div>

            <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>
                Stock & Availability
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                <span className="badge badge-green" style={{ fontSize: '0.75rem' }}>
                  <CheckCircle2 size={12} /> {product.inStock ? 'Ready in Stock' : 'Fast Delivery'}
                </span>
                <span className="badge badge-blue" style={{ fontSize: '0.75rem' }}>
                  {product.leadTime}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0a2540', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
              Equipment Overview
            </h4>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: '#475569', margin: 0 }}>
              {product.description}
            </p>
          </div>

          {/* Specifications Table */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0a2540', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Box size={16} color="#0284c7" /> 
              <span>Complete Technical Parameters</span>
            </h4>
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#0a2540', color: '#ffffff' }}>
                    <th style={{ padding: '9px 14px', textAlign: 'left', fontWeight: 700, width: '40%', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                      Parameter
                    </th>
                    <th style={{ padding: '9px 14px', textAlign: 'left', fontWeight: 700, width: '60%', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                      Specification / Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(product.specifications || {}).map(([key, val], idx) => (
                    <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc', borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '9px 14px', fontWeight: 700, color: '#334155' }}>{key}</td>
                      <td style={{ padding: '9px 14px', color: '#0a2540', fontWeight: 600 }}>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Compatible Brands & Certifications */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.76rem', fontWeight: 800, color: '#0a2540', textTransform: 'uppercase', marginBottom: '8px' }}>
                Compatible Engine & Machinery Brands
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {product.compatibleBrands.map((brand, idx) => (
                  <span key={idx} style={{ fontSize: '0.76rem', background: '#e2e8f0', padding: '3px 10px', borderRadius: '4px', color: '#1e293b', fontWeight: 600 }}>
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.76rem', fontWeight: 800, color: '#047857', textTransform: 'uppercase', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <ShieldCheck size={15} /> Quality & Class Approvals
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {(product.certification && product.certification.length > 0 
                  ? product.certification 
                  : ['DNV Certified', 'ClassNK Approved', 'Lloyds Register', 'ABS Survey']
                ).map((cert, idx) => (
                  <span key={idx} style={{ fontSize: '0.76rem', background: '#ecfdf5', border: '1px solid #a7f3d0', padding: '3px 10px', borderRadius: '4px', color: '#047857', fontWeight: 600 }}>
                    ✓ {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Action Footer */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            borderTop: '1px solid #e2e8f0',
            paddingTop: '18px',
            marginTop: '8px'
          }}>
            <Link
              href={`/products/${product.id}`}
              onClick={onClose}
              style={{
                padding: '10px 16px',
                border: '1px solid #0284c7',
                borderRadius: '6px',
                color: '#0284c7',
                fontSize: '0.85rem',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <ExternalLink size={15} />
              <span>Open Dedicated Page</span>
            </Link>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                onClick={onClose}
                style={{ 
                  padding: '10px 18px', 
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  backgroundColor: '#ffffff',
                  color: '#475569',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>

              <a 
                href={`https://wa.me/919819899051?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  padding: '10px 22px',
                  backgroundColor: '#22c55e',
                  color: '#ffffff',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <MessageCircle size={16} />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
