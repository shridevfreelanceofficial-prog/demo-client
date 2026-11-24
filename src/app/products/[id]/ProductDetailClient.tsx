'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import { 
  ChevronRight, 
  Ship, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Phone, 
  MessageCircle, 
  Box, 
  Copy, 
  Check, 
  Globe2, 
  Wrench, 
  ArrowLeft,
  ArrowRight,
  Layers,
  Factory,
  FileCheck2,
  PackageCheck
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const [copiedPart, setCopiedPart] = useState(false);
  const [selectedRelatedProduct, setSelectedRelatedProduct] = useState<Product | null>(null);

  const handleCopyPart = () => {
    if (product.partNumber) {
      navigator.clipboard.writeText(product.partNumber);
      setCopiedPart(true);
      setTimeout(() => setCopiedPart(false), 2000);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Crest & Caliper Spares Operations, I am inquiring about: ${product.name} (Model: ${product.model}, Part: ${product.partNumber || 'N/A'}). Please provide price, availability, and port delivery options.`
  );

  return (
    <>
      {/* Clean Breadcrumb Bar */}
      <div style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '14px 0' }}>
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#64748b', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#0284c7', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600, textDecoration: 'none' }}>
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/products" style={{ color: '#0284c7', fontWeight: 600, textDecoration: 'none' }}>
              Products
            </Link>
            <ChevronRight size={14} />
            <Link href={`/products?category=${encodeURIComponent(product.category)}`} style={{ color: '#0284c7', fontWeight: 600, textDecoration: 'none' }}>
              {product.category}
            </Link>
            <ChevronRight size={14} />
            <span style={{ color: '#0a2540', fontWeight: 700, maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {product.model}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Product Technical Specification View (Image-Free Dossier) */}
      <section style={{ padding: '36px 0 70px', backgroundColor: '#f8fafc' }}>
        <div className="container">
          
          {/* Product Header Strip */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '12px' }}>
              <span className="badge badge-navy" style={{ fontSize: '0.78rem', padding: '4px 10px', backgroundColor: '#0a2540' }}>
                {product.category}
              </span>

              <span className="badge badge-blue" style={{ fontSize: '0.78rem', padding: '4px 10px' }}>
                {product.sector === 'marine' ? <Ship size={13} /> : <Factory size={13} />}
                <span>{product.sector === 'marine' ? 'Marine Class Grade' : 'Industrial Equipment'}</span>
              </span>

              <span className="badge badge-green" style={{ fontSize: '0.78rem', padding: '4px 10px' }}>
                <CheckCircle2 size={13} /> {product.inStock ? 'Ready in Physical Stock' : 'Fast Dispatch'}
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)',
              fontWeight: 800,
              color: '#0a2540',
              lineHeight: 1.25,
              marginBottom: '10px'
            }}>
              {product.name}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.92rem', color: '#64748b', flexWrap: 'wrap' }}>
              <div>
                <span>Model Designation: </span>
                <strong style={{ color: '#0a2540' }}>{product.model}</strong>
              </div>
              {product.partNumber && (
                <>
                  <span>•</span>
                  <div>
                    <span>Part / Assembly Reference: </span>
                    <strong style={{ color: '#0284c7', fontFamily: 'monospace' }}>{product.partNumber}</strong>
                  </div>
                </>
              )}
              <span>•</span>
              <div>
                <span>Dispatch Window: </span>
                <span style={{ color: '#16a34a', fontWeight: 700 }}>{product.leadTime}</span>
              </div>
            </div>
          </div>
          
          {/* Main 2-Column Technical Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'start'
          }}>

            {/* LEFT COLUMN: Technical Equipment Identification & Logistics Dossier */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Technical Dossier Summary Card */}
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 4px 20px rgba(10,37,64,0.04)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#0284c7',
                  marginBottom: '16px',
                  paddingBottom: '10px',
                  borderBottom: '1px solid #f1f5f9'
                }}>
                  <PackageCheck size={16} /> Component Identification & Traceability
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
                    <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>Equipment Type</span>
                    <span style={{ fontSize: '0.84rem', color: '#0a2540', fontWeight: 700 }}>{product.category}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
                    <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>Model / Series</span>
                    <span style={{ fontSize: '0.84rem', color: '#0284c7', fontWeight: 800 }}>{product.model}</span>
                  </div>

                  {product.partNumber && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
                      <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>OEM Part Number</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '0.84rem', color: '#0a2540', fontWeight: 800, fontFamily: 'monospace' }}>{product.partNumber}</span>
                        <button
                          onClick={handleCopyPart}
                          style={{
                            padding: '3px 8px',
                            fontSize: '0.74rem',
                            backgroundColor: copiedPart ? '#dcfce7' : '#ffffff',
                            color: copiedPart ? '#15803d' : '#0284c7',
                            border: '1px solid #cbd5e1',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          {copiedPart ? <Check size={12} /> : <Copy size={12} />}
                          <span>{copiedPart ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
                    <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>Quality Grade</span>
                    <span style={{ fontSize: '0.84rem', color: '#0a2540', fontWeight: 700 }}>{product.oemEquivalent || 'OEM Marine Specification'}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
                    <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>Stock Availability</span>
                    <span style={{ fontSize: '0.84rem', color: product.inStock ? '#15803d' : '#0284c7', fontWeight: 700 }}>
                      {product.inStock ? 'Immediate Berth / Anchorage Delivery' : product.leadTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quality & Survey Standards */}
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 4px 20px rgba(10,37,64,0.04)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#047857',
                  marginBottom: '14px'
                }}>
                  <ShieldCheck size={18} />
                  <span>Class Society & Material Certification</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.5, marginBottom: '14px' }}>
                  Supplied with traceable material test reports (MTR), dynamic balancing certificates, pressure test records, and class inspection compliance.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {(product.certification && product.certification.length > 0 
                    ? product.certification 
                    : ['DNV Certified', 'ClassNK Approved', 'Lloyds Register', 'ABS Survey', 'ISO 9001:2015']
                  ).map((cert, idx) => (
                    <span key={idx} style={{
                      fontSize: '0.78rem',
                      backgroundColor: '#ecfdf5',
                      border: '1px solid #a7f3d0',
                      borderRadius: '5px',
                      padding: '5px 12px',
                      color: '#047857',
                      fontWeight: 700
                    }}>
                      ✓ {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Immediate Port Dispatch Hubs */}
              <div style={{
                backgroundColor: '#f0f9ff',
                borderRadius: '12px',
                border: '1px solid #bae6fd',
                padding: '22px'
              }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0369a1', textTransform: 'uppercase', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Globe2 size={16} color="#0284c7" />
                  <span>Strategic Port Delivery Hubs</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#334155', lineHeight: 1.6, margin: 0 }}>
                  Immediate customs clearance and off-port-limit (OPL) launch boat deliveries at: <strong>Singapore OPL, Rotterdam, Fujairah & Dubai, Mumbai & Alang, Houston, and Zhoushan</strong>.
                </p>
              </div>

            </div>

            {/* RIGHT COLUMN: Full Technical Specifications & RFQ Desk */}
            <div>
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '30px',
                boxShadow: '0 4px 20px rgba(10,37,64,0.04)'
              }}>
                
                {/* Description / Scope */}
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ color: '#0284c7', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
                    Technical Overview
                  </div>
                  <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0a2540', marginBottom: '12px' }}>
                    Equipment Scope & Specifications
                  </h2>
                  <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.7, margin: 0 }}>
                    {product.description}
                  </p>
                </div>

                {/* Complete Detailed Technical Specifications Table */}
                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#0a2540',
                    marginBottom: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <Box size={18} color="#0284c7" />
                    <span>Technical Parameters & Metrics</span>
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
                          <th style={{ padding: '12px 18px', textAlign: 'left', fontWeight: 700, width: '40%', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Parameter
                          </th>
                          <th style={{ padding: '12px 18px', textAlign: 'left', fontWeight: 700, width: '60%', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Technical Metric / Value
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(product.specifications || {}).map(([key, val], idx) => (
                          <tr 
                            key={idx}
                            style={{
                              backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                              borderBottom: '1px solid #e2e8f0'
                            }}
                          >
                            <td style={{ padding: '12px 18px', fontWeight: 700, color: '#334155', verticalAlign: 'top' }}>
                              {key}
                            </td>
                            <td style={{ padding: '12px 18px', color: '#0a2540', fontWeight: 600, verticalAlign: 'top' }}>
                              {val}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Compatible Engine & Machinery Makers */}
                {product.compatibleBrands && product.compatibleBrands.length > 0 && (
                  <div style={{ marginBottom: '32px' }}>
                    <h4 style={{ fontSize: '0.84rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                      Compatible Engine & Machinery Makers
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {product.compatibleBrands.map((brand, idx) => (
                        <span key={idx} style={{
                          fontSize: '0.84rem',
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
                )}

                {/* Immediate WhatsApp & Call Operations Desk Card */}
                <div style={{
                  backgroundColor: '#0a2540',
                  borderRadius: '10px',
                  padding: '26px',
                  color: '#ffffff'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px' }}>
                    <Clock size={14} /> Immediate Inquiry & Port Dispatch Desk
                  </div>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                    Inquire About {product.model}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '22px' }}>
                    Contact our marine superintendent on WhatsApp or phone for immediate price, availability, and port delivery schedule.
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    <a
                      href={`https://wa.me/919819899051?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: '#22c55e',
                        color: '#ffffff',
                        padding: '13px 26px',
                        fontSize: '0.94rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        borderRadius: '6px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <MessageCircle size={18} />
                      <span>Inquire on WhatsApp (98198 99051)</span>
                    </a>

                    <a
                      href="tel:+919819899051"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.12)',
                        color: '#ffffff',
                        border: '1px solid rgba(255,255,255,0.3)',
                        padding: '13px 22px',
                        fontSize: '0.94rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        borderRadius: '6px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <Phone size={17} color="#38bdf8" />
                      <span>Call +91 98198 99051</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Related Products in the Same Category (Image-Free Cards) */}
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
                  style={{
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    padding: '9px 18px',
                    border: '1px solid #cbd5e1',
                    borderRadius: '6px',
                    backgroundColor: '#ffffff',
                    color: '#0a2540',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>View All {product.category}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px'
              }}>
                {relatedProducts.map((relProduct) => (
                  <ProductCard 
                    key={relProduct.id}
                    product={relProduct}
                    onViewDetails={(p) => setSelectedRelatedProduct(p)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Back to Products Navigation */}
          <div style={{ marginTop: '50px', textAlign: 'center' }}>
            <Link 
              href="/products" 
              style={{
                padding: '12px 28px',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                color: '#0a2540',
                fontWeight: 700,
                fontSize: '0.92rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <ArrowLeft size={16} />
              <span>Return to Full Products Catalog</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Quick Modal if triggered */}
      {selectedRelatedProduct && (
        <ProductModal
          product={selectedRelatedProduct}
          onClose={() => setSelectedRelatedProduct(null)}
        />
      )}
    </>
  );
}
