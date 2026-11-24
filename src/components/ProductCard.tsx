import React from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { 
  CheckCircle2, 
  Eye, 
  MessageCircle,
  Cpu,
  Layers,
  ShieldCheck,
  Clock
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
  onRequestQuote?: (productName: string) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  // Grab top 3 specifications to display as technical preview
  const specEntries = Object.entries(product.specifications || {}).slice(0, 3);

  const whatsappInquiryLink = `https://wa.me/919819899051?text=${encodeURIComponent(
    `Hello Crest & Caliper Spares, I would like to inquire about ${product.name} (Model: ${product.model}, Part: ${product.partNumber || 'N/A'}).`
  )}`;

  return (
    <div 
      className="card-clean" 
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease'
      }}
    >
      {/* Top Header Strip: Badges */}
      <div 
        style={{
          padding: '14px 18px 10px',
          borderBottom: '1px solid #f1f5f9',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap'
        }}
      >
        <span 
          style={{
            fontSize: '0.72rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: '#0284c7',
            backgroundColor: '#e0f2fe',
            padding: '3px 8px',
            borderRadius: '4px'
          }}
        >
          {product.category}
        </span>

        <span 
          style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            color: product.inStock ? '#15803d' : '#0369a1',
            backgroundColor: product.inStock ? '#dcfce7' : '#f0f9ff',
            padding: '3px 8px',
            borderRadius: '4px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          <CheckCircle2 size={12} /> {product.inStock ? 'Ready in Stock' : product.leadTime}
        </span>
      </div>

      {/* Main Body */}
      <div 
        style={{
          padding: '18px 20px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          gap: '12px'
        }}
      >
        {/* Model & Part Number Block */}
        <div 
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            padding: '8px 12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <div>
            <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>
              Designation
            </div>
            <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0a2540' }}>
              {product.model}
            </div>
          </div>

          {product.partNumber && (
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>
                Part Number
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0284c7', fontFamily: 'monospace' }}>
                {product.partNumber}
              </div>
            </div>
          )}
        </div>

        {/* Product Title */}
        <h4 
          style={{
            fontSize: '1.05rem',
            fontWeight: 800,
            color: '#0a2540',
            lineHeight: 1.35,
            margin: '2px 0 0'
          }}
        >
          <Link 
            href={`/products/${product.id}`}
            style={{ color: '#0a2540', textDecoration: 'none', transition: 'color 0.2s ease' }}
            className="hover:text-sky-600"
          >
            {product.name}
          </Link>
        </h4>

        {/* Short Description */}
        <p 
          style={{
            fontSize: '0.84rem',
            color: '#64748b',
            lineHeight: 1.5,
            margin: 0
          }}
        >
          {product.shortDescription}
        </p>

        {/* Technical Specifications Preview Table */}
        {specEntries.length > 0 && (
          <div 
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              overflow: 'hidden',
              marginTop: '4px'
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.76rem' }}>
              <tbody>
                {specEntries.map(([k, v], idx) => (
                  <tr 
                    key={idx}
                    style={{
                      borderBottom: idx < specEntries.length - 1 ? '1px solid #f1f5f9' : 'none',
                      backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc'
                    }}
                  >
                    <td style={{ padding: '6px 10px', color: '#64748b', fontWeight: 600, width: '45%' }}>
                      {k}
                    </td>
                    <td style={{ padding: '6px 10px', color: '#0a2540', fontWeight: 700 }}>
                      {v}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Compatible Brands Tags */}
        {product.compatibleBrands && product.compatibleBrands.length > 0 && (
          <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
              Compatible Makers
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {product.compatibleBrands.slice(0, 4).map((brand, idx) => (
                <span 
                  key={idx} 
                  style={{
                    fontSize: '0.72rem',
                    backgroundColor: '#f1f5f9',
                    color: '#334155',
                    fontWeight: 600,
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
            marginTop: '10px',
            paddingTop: '12px',
            borderTop: '1px solid #f1f5f9'
          }}
        >
          <Link 
            href={`/products/${product.id}`}
            style={{ 
              padding: '9px 10px', 
              fontSize: '0.82rem', 
              fontWeight: 700,
              border: '1px solid #cbd5e1', 
              color: '#0a2540',
              backgroundColor: '#f8fafc',
              borderRadius: '6px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              transition: 'all 0.15s ease'
            }}
          >
            <Eye size={14} />
            <span>Details</span>
          </Link>

          <a 
            href={whatsappInquiryLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              padding: '9px 10px', 
              fontSize: '0.82rem',
              fontWeight: 700,
              backgroundColor: '#22c55e',
              color: '#ffffff',
              borderRadius: '6px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              transition: 'all 0.15s ease'
            }}
          >
            <MessageCircle size={14} />
            <span>Inquire</span>
          </a>
        </div>

      </div>
    </div>
  );
}
