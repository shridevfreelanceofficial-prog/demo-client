'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { useRFQ } from '@/components/LayoutWrapper';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import { 
  ChevronRight, 
  Ship, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  FileSpreadsheet, 
  Phone, 
  MessageCircle, 
  Box, 
  Maximize2, 
  Copy, 
  Check, 
  Globe2, 
  Wrench, 
  ArrowLeft,
  ArrowRight,
  Layers,
  Factory
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const { openRFQ } = useRFQ();
  const [copiedPart, setCopiedPart] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectedRelatedProduct, setSelectedRelatedProduct] = useState<Product | null>(null);

  const handleCopyPart = () => {
    if (product.partNumber) {
      navigator.clipboard.writeText(product.partNumber);
      setCopiedPart(true);
      setTimeout(() => setCopiedPart(false), 2000);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Navyronix Operations, I am inquiring about: ${product.name} (Model: ${product.model}, Part: ${product.partNumber || 'N/A'}). Please provide price, availability, and port delivery options.`
  );

  return (
    <>
      {/* 1. Breadcrumbs & Product Title Banner - Featuring ship4.jpg Background */}
      <section style={{
        position: 'relative',
        backgroundImage: 'linear-gradient(180deg, rgba(10, 37, 64, 0.84) 0%, rgba(10, 37, 64, 0.90) 100%), url("/images/ship4.jpg")',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '42px 0 36px',
        color: '#ffffff',
        borderBottom: '3px solid #0284c7',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb Path */}
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#94a3b8', marginBottom: '16px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/products" style={{ color: '#cbd5e1' }}>
              Products
            </Link>
            <ChevronRight size={14} />
            <Link href={`/products?category=${encodeURIComponent(product.category)}`} style={{ color: '#38bdf8', fontWeight: 600 }}>
              {product.category}
            </Link>
            <ChevronRight size={14} />
            <span style={{ color: '#ffffff', fontWeight: 600, maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {product.model}
            </span>
          </nav>

          {/* Product Header Badges & Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
            <span className="badge badge-blue" style={{ fontSize: '0.78rem', padding: '4px 10px' }}>
              {product.sector === 'marine' ? <Ship size={13} /> : <Factory size={13} />}
              <span>{product.sector === 'marine' ? 'Marine Certified' : 'Industrial Equipment'}</span>
            </span>

            <span className="badge badge-navy" style={{ fontSize: '0.78rem', padding: '4px 10px', backgroundColor: '#0284c7' }}>
              {product.category}
            </span>

            <span className="badge badge-green" style={{ fontSize: '0.78rem', padding: '4px 10px' }}>
              <CheckCircle2 size={13} /> {product.inStock ? 'Ready in Stock' : 'Fast Delivery'}
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(1.8rem, 3.8vw, 2.8rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.25,
            marginBottom: '8px'
          }}>
            {product.name}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.92rem', color: '#cbd5e1', flexWrap: 'wrap' }}>
            <div>
              <span style={{ color: '#94a3b8' }}>Model: </span>
              <strong style={{ color: '#ffffff' }}>{product.model}</strong>
            </div>
            {product.partNumber && (
              <>
                <span style={{ color: '#475569' }}>•</span>
                <div>
                  <span style={{ color: '#94a3b8' }}>Part Number: </span>
                  <strong style={{ color: '#38bdf8' }}>{product.partNumber}</strong>
                </div>
              </>
            )}
            <span style={{ color: '#475569' }}>•</span>
            <div>
              <span style={{ color: '#94a3b8' }}>Lead Time: </span>
              <span style={{ color: '#4ade80', fontWeight: 600 }}>{product.leadTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Product Details View Grid */}
      <section style={{ padding: '50px 0 70px', backgroundColor: '#f8fafc' }}>
        <div className="container">
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}>

            {/* LEFT COLUMN: Large High-Resolution Product Image & Badges */}
            <div>
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 8px 30px rgba(10,37,64,0.06)',
                position: 'relative'
              }}>
                {/* Large Product Image Frame */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '420px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px',
                  cursor: 'pointer'
                }}
                onClick={() => setImageModalOpen(true)}
                title="Click to view large full-resolution image"
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={{
                      maxWidth: '95%',
                      maxHeight: '95%',
                      objectFit: 'contain',
                      display: 'block',
                      transition: 'transform 0.3s ease'
                    }}
                  />

                  {/* Zoom Fullscreen Indicator Button */}
                  <div style={{
                    position: 'absolute',
                    bottom: '14px',
                    right: '14px',
                    backgroundColor: 'rgba(10, 37, 64, 0.85)',
                    color: '#ffffff',
                    padding: '8px 14px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    backdropFilter: 'blur(4px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                  }}>
                    <Maximize2 size={14} />
                    <span>View Full Size</span>
                  </div>

                  {/* Top Left OEM Tag */}
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: '#0a2540',
                    color: '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '5px 12px',
                    borderRadius: '4px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                  }}>
                    {product.oemEquivalent || 'OEM Grade Marine Machinery'}
                  </div>
                </div>

                {/* Classification & Inspection Badges Strip */}
                <div style={{
                  marginTop: '20px',
                  padding: '16px',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0a2540', textTransform: 'uppercase', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <ShieldCheck size={16} color="#0284c7" />
                    <span>Quality Assurance & Survey Standards</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {(product.certification || ['DNV Certified', 'ClassNK Approved', 'Lloyds Register', 'ABS Survey', 'ISO 9001:2015']).map((cert, idx) => (
                      <span key={idx} style={{
                        fontSize: '0.75rem',
                        backgroundColor: '#ffffff',
                        border: '1px solid #cbd5e1',
                        borderRadius: '4px',
                        padding: '4px 10px',
                        color: '#1e293b',
                        fontWeight: 600
                      }}>
                        ✓ {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Strategic Dispatch Locations */}
                <div style={{
                  marginTop: '16px',
                  padding: '16px',
                  backgroundColor: '#f0f9ff',
                  borderRadius: '8px',
                  border: '1px solid #bae6fd'
                }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0369a1', textTransform: 'uppercase', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Globe2 size={16} color="#0284c7" />
                    <span>Immediate Port Delivery Hubs</span>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: '#334155', lineHeight: 1.5, margin: 0 }}>
                    Ready for immediate truck delivery to shipyards or launch boat transit at: <strong>Singapore OPL, Rotterdam, Fujairah, Mumbai, and Zhoushan</strong>.
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: Technical Specs Table & RFQ Action Desk */}
            <div>
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '30px',
                boxShadow: '0 8px 30px rgba(10,37,64,0.06)'
              }}>
                
                {/* Product Name & Description */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ color: '#0284c7', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                    Technical Overview
                  </div>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0a2540', marginBottom: '14px' }}>
                    {product.name}
                  </h2>
                  <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '16px' }}>
                    {product.description}
                  </p>
                </div>

                {/* Part Number & Model Copy Box */}
                {product.partNumber && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    backgroundColor: '#f8fafc',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    marginBottom: '26px'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>
                        Manufacturer Assembly Reference
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0a2540', fontFamily: 'monospace' }}>
                        {product.partNumber}
                      </div>
                    </div>
                    <button
                      onClick={handleCopyPart}
                      className="btn"
                      style={{
                        padding: '6px 12px',
                        fontSize: '0.78rem',
                        backgroundColor: copiedPart ? '#dcfce7' : '#ffffff',
                        color: copiedPart ? '#15803d' : '#0284c7',
                        border: '1px solid #cbd5e1',
                        borderRadius: '4px'
                      }}
                      title="Copy Part Number"
                    >
                      {copiedPart ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedPart ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                )}

                {/* Complete Detailed Technical Specifications Table */}
                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#0a2540',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <Box size={18} color="#0284c7" />
                    <span>Complete Technical Specifications</span>
                  </h3>

                  <div style={{
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#0a2540', color: '#ffffff' }}>
                          <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 700, width: '40%', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Specification Parameter
                          </th>
                          <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 700, width: '60%', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Technical Metric / Value
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(product.specifications).map(([key, val], idx) => (
                          <tr 
                            key={idx}
                            style={{
                              backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                              borderBottom: '1px solid #e2e8f0'
                            }}
                          >
                            <td style={{ padding: '12px 16px', fontWeight: 700, color: '#334155', verticalAlign: 'top' }}>
                              {key}
                            </td>
                            <td style={{ padding: '12px 16px', color: '#0a2540', fontWeight: 600, verticalAlign: 'top' }}>
                              {val}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Compatible Engine & Machinery Makers */}
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Compatible Engine & Machinery Makers
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {product.compatibleBrands.map((brand, idx) => (
                      <span key={idx} style={{
                        fontSize: '0.82rem',
                        backgroundColor: '#f1f5f9',
                        border: '1px solid #cbd5e1',
                        borderRadius: '6px',
                        padding: '6px 14px',
                        color: '#0a2540',
                        fontWeight: 700
                      }}>
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Immediate RFQ & Duty Superintendent Action Desk */}
                <div style={{
                  backgroundColor: '#0a2540',
                  borderRadius: '10px',
                  padding: '24px',
                  color: '#ffffff'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '6px' }}>
                    <Clock size={14} /> Guaranteed 60-Minute Quotation Response
                  </div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                    Request Quotation for {product.model}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '20px' }}>
                    Provide your vessel name, target delivery port, and engine serial number to receive instant proforma pricing with customs HS codes and freight options.
                  </p>

                  <div className="btn-group-responsive">
                    <button
                      onClick={() => openRFQ(`${product.name} (Part: ${product.partNumber || product.model})`)}
                      className="btn btn-primary"
                      style={{
                        padding: '14px 28px',
                        backgroundColor: '#0284c7',
                        borderColor: '#0284c7',
                        fontSize: '0.96rem',
                        fontWeight: 700
                      }}
                    >
                      <FileSpreadsheet size={18} />
                      <span>Submit RFQ for this Part</span>
                    </button>

                    <a
                      href={`https://wa.me/919820048911?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{
                        backgroundColor: '#25D366',
                        color: '#ffffff',
                        padding: '14px 22px',
                        fontSize: '0.96rem',
                        fontWeight: 700,
                        textDecoration: 'none'
                      }}
                    >
                      <MessageCircle size={18} />
                      <span>WhatsApp Duty Desk</span>
                    </a>

                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                      className="btn"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.12)',
                        color: '#ffffff',
                        border: '1px solid rgba(255,255,255,0.3)',
                        padding: '14px 20px',
                        fontSize: '0.96rem',
                        fontWeight: 700,
                        textDecoration: 'none'
                      }}
                    >
                      <Phone size={18} color="#38bdf8" />
                      <span>Call Hotline</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* 3. Related Products in the Same Category */}
          {relatedProducts.length > 0 && (
            <div style={{ marginTop: '70px', borderTop: '2px solid #e2e8f0', paddingTop: '50px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <div style={{ color: '#0284c7', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Catalog Cross-References
                  </div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0a2540' }}>
                    Related {product.category} Spares
                  </h3>
                </div>

                <Link 
                  href={`/products?category=${encodeURIComponent(product.category)}`}
                  className="btn btn-outline"
                  style={{ fontSize: '0.86rem', padding: '9px 18px' }}
                >
                  <span>View All {product.category}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '24px'
              }}>
                {relatedProducts.map((relProduct) => (
                  <ProductCard 
                    key={relProduct.id}
                    product={relProduct}
                    onViewDetails={(p) => setSelectedRelatedProduct(p)}
                    onRequestQuote={(name) => openRFQ(name)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Back to Products Navigation */}
          <div style={{ marginTop: '50px', textAlign: 'center' }}>
            <Link 
              href="/products" 
              className="btn btn-outline" 
              style={{ padding: '12px 28px', backgroundColor: '#ffffff', fontSize: '0.92rem' }}
            >
              <ArrowLeft size={16} />
              <span>Return to Full Products Catalog</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Full Resolution Image Lightbox Modal */}
      {imageModalOpen && (
        <div 
          className="modal-overlay" 
          onClick={() => setImageModalOpen(false)}
          style={{ zIndex: 10000 }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '900px',
              width: '95%',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
              position: 'relative',
              textAlign: 'center'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a2540', margin: 0 }}>
                  {product.name}
                </h3>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  High-Resolution Component Inspection Frame
                </div>
              </div>
              <button
                onClick={() => setImageModalOpen(false)}
                className="btn"
                style={{ padding: '6px 14px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.85rem' }}
              >
                Close (Esc)
              </button>
            </div>

            <div style={{
              height: '520px',
              maxHeight: '70vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <img 
                src={product.image} 
                alt={product.name}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
            </div>

            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ fontSize: '0.84rem', color: '#64748b', textAlign: 'left' }}>
                Model: <strong>{product.model}</strong> • Part: <strong>{product.partNumber || 'Inquire'}</strong>
              </div>
              <button
                onClick={() => {
                  setImageModalOpen(false);
                  openRFQ(`${product.name} (${product.model})`);
                }}
                className="btn btn-primary"
                style={{ padding: '10px 22px' }}
              >
                <FileSpreadsheet size={16} />
                <span>Request Equipment Quote</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Related Product Quick Modal if triggered */}
      {selectedRelatedProduct && (
        <ProductModal
          product={selectedRelatedProduct}
          onClose={() => setSelectedRelatedProduct(null)}
          onRequestQuote={(name) => openRFQ(name)}
        />
      )}
    </>
  );
}
