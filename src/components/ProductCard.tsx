import React from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { 
  CheckCircle2, 
  FileSpreadsheet, 
  Eye, 
  Ship, 
  Factory
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
  onRequestQuote: (productName: string) => void;
}

export default function ProductCard({ product, onViewDetails, onRequestQuote }: ProductCardProps) {
  return (
    <div className="card-clean" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundColor: '#ffffff'
    }}>
      {/* Product Image Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '210px',
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Link 
          href={`/products/${product.id}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            textDecoration: 'none'
          }}
          title={`View full details for ${product.name}`}
        >
          <img 
            src={product.image} 
            alt={product.name}
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            loading="lazy"
          />
        </Link>

        {/* Top Badges */}
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          right: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pointerEvents: 'none'
        }}>
          <span className="badge badge-navy" style={{ fontSize: '0.7rem' }}>
            {product.category}
          </span>

          <span className="badge badge-green" style={{ fontSize: '0.7rem' }}>
            <CheckCircle2 size={12} /> In Stock
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        gap: '10px'
      }}>
        {/* Model & Part Number */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0284c7' }}>
            {product.model}
          </span>
          {product.partNumber && (
            <span style={{ fontSize: '0.72rem', color: '#64748b', maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {product.partNumber}
            </span>
          )}
        </div>

        {/* Product Title */}
        <h4 style={{
          fontSize: '1.05rem',
          fontWeight: 700,
          color: '#0a2540',
          lineHeight: 1.35,
          minHeight: '2.7em'
        }}>
          <Link 
            href={`/products/${product.id}`}
            style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0284c7')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#0a2540')}
          >
            {product.name}
          </Link>
        </h4>

        {/* Short Description */}
        <p style={{
          fontSize: '0.84rem',
          color: '#64748b',
          lineHeight: 1.5,
          flexGrow: 1
        }}>
          {product.shortDescription}
        </p>

        {/* Compatible Brands List */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '4px',
          paddingTop: '8px',
          borderTop: '1px solid #f1f5f9'
        }}>
          {product.compatibleBrands.slice(0, 3).map((brand, idx) => (
            <span key={idx} style={{
              fontSize: '0.72rem',
              backgroundColor: '#f1f5f9',
              color: '#334155',
              fontWeight: 600,
              padding: '2px 8px',
              borderRadius: '4px'
            }}>
              {brand}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8px',
          marginTop: '10px'
        }}>
          <Link 
            href={`/products/${product.id}`}
            className="btn btn-outline"
            style={{ 
              padding: '8px 10px', 
              fontSize: '0.8rem', 
              border: '1px solid #cbd5e1', 
              color: '#0a2540',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <Eye size={14} />
            <span>Details</span>
          </Link>

          <button 
            onClick={() => onRequestQuote(product.name)}
            className="btn btn-primary"
            style={{ padding: '8px 10px', fontSize: '0.8rem' }}
          >
            <FileSpreadsheet size={14} />
            <span>RFQ</span>
          </button>
        </div>

      </div>
    </div>
  );
}
