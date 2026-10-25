'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { 
  X, 
  ShieldCheck, 
  Clock, 
  FileSpreadsheet, 
  CheckCircle2, 
  Box,
  ExternalLink
} from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export default function ProductModal({ product, onClose, onRequestQuote }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '0', overflow: 'hidden' }}
      >
        {/* Modal Top Header */}
        <div style={{
          padding: '16px 24px',
          borderBottom: '1px solid #e2e8f0',
          backgroundColor: '#0a2540',
          color: '#ffffff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: '#38bdf8', fontWeight: 800, textTransform: 'uppercase' }}>
              {product.category}
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
              {product.name}
            </h3>
          </div>

          <button 
            onClick={onClose}
            aria-label="Close"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Main Visual & Key Data Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', alignItems: 'center' }}>
            <div style={{
              width: '100%',
              height: '240px',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px'
            }}>
              <img 
                src={product.image} 
                alt={product.name}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>
                  Model Designation
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0284c7' }}>
                  {product.model}
                </div>
              </div>

              <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>
                  Part / Assembly Number
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1e293b' }}>
                  {product.partNumber || 'Inquire with engine serial number'}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <span className="badge badge-green">
                  <CheckCircle2 size={12} /> {product.inStock ? 'Ready in Stock' : 'Fast Delivery'}
                </span>
                <span className="badge badge-blue">
                  {product.leadTime}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0a2540', marginBottom: '6px' }}>
              Product Overview
            </h4>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#475569' }}>
              {product.description}
            </p>
          </div>

          {/* Specifications Table */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0a2540', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Box size={16} color="#0284c7" /> Technical Specifications
            </h4>
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <tbody>
                  {Object.entries(product.specifications).map(([key, val], idx) => (
                    <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc', borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '8px 14px', fontWeight: 700, color: '#475569', width: '38%' }}>{key}</td>
                      <td style={{ padding: '8px 14px', color: '#0a2540', fontWeight: 600 }}>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Compatible Brands & Certifications */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
            <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0a2540', marginBottom: '6px' }}>
                Compatible Engine & Machinery Brands
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {product.compatibleBrands.map((brand, idx) => (
                  <span key={idx} style={{ fontSize: '0.74rem', background: '#e2e8f0', padding: '2px 8px', borderRadius: '4px', color: '#1e293b', fontWeight: 600 }}>
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#047857', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ShieldCheck size={14} /> Quality & Class Approvals
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {product.certification && product.certification.map((cert, idx) => (
                  <span key={idx} style={{ fontSize: '0.74rem', background: '#ecfdf5', border: '1px solid #a7f3d0', padding: '2px 8px', borderRadius: '4px', color: '#047857', fontWeight: 600 }}>
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            borderTop: '1px solid #e2e8f0',
            paddingTop: '16px'
          }}>
            <Link
              href={`/products/${product.id}`}
              onClick={onClose}
              className="btn btn-outline"
              style={{
                padding: '9px 16px',
                border: '1px solid #0284c7',
                color: '#0284c7',
                fontSize: '0.85rem',
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
                className="btn btn-outline"
                style={{ padding: '9px 18px', border: '1px solid #cbd5e1' }}
              >
                Close
              </button>
              <button 
                onClick={() => {
                  onClose();
                  onRequestQuote(product.name);
                }}
                className="btn btn-primary"
                style={{ padding: '9px 24px' }}
              >
                <FileSpreadsheet size={16} />
                <span>Request Quote (RFQ)</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
